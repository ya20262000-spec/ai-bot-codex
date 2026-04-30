import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, UploadCloud, XCircle } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const steps = [
  { key: 'htfDirection', label: 'What is the High Time Frame (Daily/H4) direction?', type: 'select', options: ['Bullish', 'Bearish', 'Ranging'] },
  { key: 'smcMarkers', label: 'Is there a clear FVG or OB currently being tapped?', type: 'text' },
  { key: 'liquiditySwept', label: 'Has sell-side or buy-side liquidity been swept?', type: 'toggle' },
  { key: 'ltfConfirmation', label: 'Is there a Lower Time Frame (M1/M5) displacement or MSS?', type: 'toggle' },
  { key: 'rrr', label: 'What is the Risk-to-Reward ratio (RRR) for this setup?', type: 'number' },
];

const initialChecklist = { htfDirection: '', smcMarkers: '', liquiditySwept: '', ltfConfirmation: '', rrr: '' };
const initialTrade = { assetPair: '', entryPrice: '', sl: '', tp: '', lotSize: '', screenshot: '' };

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [checklist, setChecklist] = useState(initialChecklist);
  const [tradeForm, setTradeForm] = useState(initialTrade);
  const [isHighProbability, setIsHighProbability] = useState(false);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const rr = Number(checklist.rrr);
    const qualifies =
      checklist.htfDirection !== 'Ranging' &&
      checklist.liquiditySwept === 'Yes' &&
      checklist.ltfConfirmation === 'Yes' &&
      checklist.smcMarkers.trim().length > 3 &&
      rr >= 2;
    setIsHighProbability(qualifies);
  }, [checklist]);

  const progress = ((currentStep + (isWizardComplete() ? 1 : 0)) / steps.length) * 100;

  function isStepAnswered() {
    const key = steps[currentStep].key;
    return String(checklist[key]).trim() !== '';
  }

  function isWizardComplete() {
    return steps.every((s) => String(checklist[s.key]).trim() !== '');
  }

  function updateChecklist(key, value) {
    setChecklist((prev) => ({ ...prev, [key]: value }));
  }

  function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setTradeForm((prev) => ({ ...prev, screenshot: String(reader.result) }));
    };
    reader.readAsDataURL(file);
  }

  function submitTrade(e) {
    e.preventDefault();
    const newTrade = {
      id: crypto.randomUUID(),
      createdAt: new Date().toLocaleDateString(),
      highProb: isHighProbability,
      ...tradeForm,
      checklist: { ...checklist },
      pnl: Number(tradeForm.tp) - Number(tradeForm.entryPrice),
    };
    setTrades((prev) => [newTrade, ...prev]);
    setChecklist(initialChecklist);
    setTradeForm(initialTrade);
    setCurrentStep(0);
  }

  const equityData = useMemo(() => {
    let cumulative = 0;
    return [...trades].reverse().map((trade, index) => {
      cumulative += trade.pnl;
      return { trade: index + 1, equity: Number(cumulative.toFixed(2)) };
    });
  }, [trades]);

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-base p-6 md:p-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="glass rounded-3xl p-6 md:p-8">
          <h1 className="font-mono text-2xl">Interactive Smart Trading Journal</h1>
          <p className="mt-2 text-sm text-zinc-400">RS-Circle style pre-trade gatekeeper workflow.</p>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full bg-cyan-400" animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }} />
          </div>

          {!isWizardComplete() ? (
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-4"
                >
                  <p className="text-lg font-medium">{currentStep + 1}. {step.label}</p>
                  <StepInput step={step} value={checklist[step.key]} onChange={(value) => updateChecklist(step.key, value)} />
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex justify-between">
                <button onClick={() => setCurrentStep((s) => Math.max(0, s - 1))} className="rounded-xl border border-white/15 px-4 py-2 text-sm" disabled={currentStep === 0}>Back</button>
                <button
                  onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
                  disabled={!isStepAnswered()}
                  className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
                >Next</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submitTrade} className="mt-8 space-y-4">
              <StatusPill isHighProbability={isHighProbability} />
              {['assetPair', 'entryPrice', 'sl', 'tp', 'lotSize'].map((field) => (
                <input key={field} required value={tradeForm[field]} onChange={(e) => setTradeForm((p) => ({ ...p, [field]: e.target.value }))} placeholder={field.replace(/([A-Z])/g, ' $1')} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 outline-none focus:border-cyan-400" />
              ))}
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-5 text-sm text-zinc-400">
                <UploadCloud className="mb-2 h-5 w-5" />
                Drag-and-drop / upload screenshot
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              </label>
              {tradeForm.screenshot && <img src={tradeForm.screenshot} alt="chart" className="max-h-40 rounded-lg object-cover" />}
              <button className="w-full rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-black">Record Trade</button>
            </form>
          )}
        </section>

        <section className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h2 className="font-mono text-lg">Equity Curve</h2>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={equityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="trade" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="equity" stroke="#22d3ee" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h2 className="font-mono text-lg">Trade Dashboard</h2>
            <div className="mt-4 max-h-96 overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-zinc-400">
                  <tr><th>Pair</th><th>RRR</th><th>Prob.</th><th>HTF</th></tr>
                </thead>
                <tbody>
                  {trades.map((trade) => (
                    <tr key={trade.id} className="border-t border-white/10">
                      <td className="py-2">{trade.assetPair}</td>
                      <td>{trade.checklist.rrr}</td>
                      <td>{trade.highProb ? 'High' : 'Standard'}</td>
                      <td>{trade.checklist.htfDirection}</td>
                    </tr>
                  ))}
                  {trades.length === 0 && <tr><td colSpan={4} className="py-4 text-zinc-500">No trades logged yet.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StepInput({ step, value, onChange }) {
  if (step.type === 'select') {
    return (
      <div className="flex gap-3">
        {step.options.map((option) => (
          <button key={option} onClick={() => onChange(option)} className={`rounded-xl border px-4 py-2 ${value === option ? 'border-cyan-400 bg-cyan-400/20' : 'border-white/15'}`}>
            {option}
          </button>
        ))}
      </div>
    );
  }

  if (step.type === 'toggle') {
    return (
      <div className="flex gap-3">
        {['Yes', 'No'].map((option) => (
          <button key={option} onClick={() => onChange(option)} className={`rounded-xl border px-4 py-2 ${value === option ? 'border-cyan-400 bg-cyan-400/20' : 'border-white/15'}`}>
            {option}
          </button>
        ))}
      </div>
    );
  }

  return <input type={step.type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 outline-none focus:border-cyan-400" />;
}

function StatusPill({ isHighProbability }) {
  return isHighProbability ? (
    <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-emerald-300"><CheckCircle2 size={16} /> High Probability Setup</div>
  ) : (
    <div className="flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-rose-300"><XCircle size={16} /> Criteria not fully met</div>
  );
}
