const BRANDS = [
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    country: 'Germany',
    founded: 1926,
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
    history: 'Rooted in Karl Benz and Gottlieb Daimler inventions, Mercedes-Benz helped define the modern automobile and luxury performance.',
    models: ['Patent-Motorwagen', '300 SL', 'S-Class', 'G-Class', 'AMG GT', 'EQS']
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'United States',
    founded: 1903,
    logo: 'https://images.unsplash.com/photo-1613214150388-1c6cbd0492f7?auto=format&fit=crop&w=1200&q=80',
    history: 'Ford industrialized automotive production with the Model T and remains iconic across trucks, performance, and EVs.',
    models: ['Model T', 'Mustang', 'F-150', 'GT40', 'Bronco', 'Mustang Mach-E']
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'Italy',
    founded: 1947,
    logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    history: 'Founded by Enzo Ferrari, the marque symbolizes racing heritage and elite supercar craftsmanship.',
    models: ['125 S', '250 GTO', 'F40', 'Enzo', 'LaFerrari', 'SF90 Stradale']
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japan',
    founded: 1937,
    logo: 'https://images.unsplash.com/photo-1593941707882-a56075bba6f8?auto=format&fit=crop&w=1200&q=80',
    history: 'Toyota became a global benchmark for reliability, manufacturing quality, and hybrid innovation.',
    models: ['Corolla', 'Land Cruiser', 'Supra', 'Prius', 'Hilux', 'GR Yaris']
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'United States',
    founded: 2003,
    logo: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    history: 'Tesla accelerated modern EV adoption and connected software-driven user experience with electric performance.',
    models: ['Roadster', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck']
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    country: 'France',
    founded: 1909,
    logo: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&w=1200&q=80',
    history: 'Bugatti combines couture-level design and engineering extremes in some of the fastest road cars ever produced.',
    models: ['Type 35', 'EB110', 'Veyron', 'Chiron', 'Divo', 'Tourbillon']
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'Italy',
    founded: 1963,
    logo: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=1200&q=80',
    history: 'Lamborghini built its identity on audacious design, naturally aspirated drama, and modern hybrid hypercars.',
    models: ['Miura', 'Countach', 'Diablo', 'Aventador', 'Huracán', 'Revuelto']
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Germany',
    founded: 1931,
    logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    history: 'From the 356 and 911 to Taycan, Porsche blends motorsport precision, everyday usability, and premium engineering.',
    models: ['356', '911', '959', 'Cayenne', '918 Spyder', 'Taycan']
  },
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Germany',
    founded: 1916,
    logo: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=1200&q=80',
    history: 'BMW earned global prestige with performance sedans, luxury technology, and the M performance lineage.',
    models: ['328', '2002', 'M3', '7 Series', 'X5', 'i8']
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    country: 'United Kingdom',
    founded: 1906,
    logo: 'https://images.unsplash.com/photo-1613214149922-f1809c99d4fd?auto=format&fit=crop&w=1200&q=80',
    history: 'Rolls-Royce represents the pinnacle of bespoke luxury motoring and grand touring craftsmanship.',
    models: ['Silver Ghost', 'Phantom', 'Ghost', 'Wraith', 'Cullinan', 'Spectre']
  }
];

const CARS = [
  { id:'benz-patent', brand:'Mercedes-Benz', model:'Patent-Motorwagen', year:1886, category:'Classic', country:'Germany', engine:'0.95L Single-cylinder', horsepower:1, image:'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80', description:'The first practical automobile, credited as the birth of the car industry.' },
  { id:'300-sl', brand:'Mercedes-Benz', model:'300 SL', year:1954, category:'Classic', country:'Germany', engine:'3.0L I6', horsepower:215, image:'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80', description:'Gullwing doors and race-derived engineering made it a timeless icon.' },
  { id:'s-class', brand:'Mercedes-Benz', model:'S-Class', year:2024, category:'Sedan', country:'Germany', engine:'3.0L Turbo I6 / Hybrid', horsepower:429, image:'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80', description:'Flagship luxury sedan setting benchmarks in safety and comfort.' },
  { id:'amg-gt', brand:'Mercedes-Benz', model:'AMG GT', year:2024, category:'Sports', country:'Germany', engine:'4.0L Twin-Turbo V8', horsepower:577, image:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', description:'Grand tourer with muscular V8 performance and cutting-edge dynamics.' },
  { id:'eqs', brand:'Mercedes-Benz', model:'EQS', year:2023, category:'Electric', country:'Germany', engine:'Dual Electric Motor', horsepower:516, image:'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80', description:'Electric luxury flagship focused on refinement, range, and technology.' },

  { id:'model-t', brand:'Ford', model:'Model T', year:1908, category:'Classic', country:'United States', engine:'2.9L I4', horsepower:20, image:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80', description:'Mass-produced car that transformed mobility worldwide.' },
  { id:'mustang-1965', brand:'Ford', model:'Mustang', year:1965, category:'Classic', country:'United States', engine:'4.7L V8', horsepower:271, image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80', description:'The original pony car, defining affordable performance culture.' },
  { id:'f150', brand:'Ford', model:'F-150', year:2024, category:'Truck', country:'United States', engine:'3.5L EcoBoost V6', horsepower:400, image:'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80', description:'Best-selling full-size pickup known for versatility and durability.' },
  { id:'gt40', brand:'Ford', model:'GT40', year:1966, category:'Race', country:'United States', engine:'7.0L V8', horsepower:485, image:'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80', description:'Legendary endurance racer that won Le Mans repeatedly.' },
  { id:'mach-e', brand:'Ford', model:'Mustang Mach-E', year:2024, category:'Electric', country:'United States', engine:'Dual Electric Motor', horsepower:480, image:'https://images.unsplash.com/photo-1571987502533-57c41a9cb84d?auto=format&fit=crop&w=1200&q=80', description:'Electric crossover combining Mustang-inspired style with EV capability.' },

  { id:'f40', brand:'Ferrari', model:'F40', year:1987, category:'Classic', country:'Italy', engine:'2.9L Twin-Turbo V8', horsepower:471, image:'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80', description:'Raw, lightweight supercar built to celebrate Ferrari’s 40th anniversary.' },
  { id:'laferrari', brand:'Ferrari', model:'LaFerrari', year:2013, category:'Hypercar', country:'Italy', engine:'6.3L V12 Hybrid', horsepower:950, image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', description:'Hybrid halo hypercar blending Formula 1 tech with Ferrari heritage.' },
  { id:'sf90', brand:'Ferrari', model:'SF90 Stradale', year:2024, category:'Hypercar', country:'Italy', engine:'4.0L Twin-Turbo V8 Hybrid', horsepower:986, image:'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&w=1200&q=80', description:'Plug-in hybrid supercar delivering extreme acceleration and agility.' },

  { id:'corolla', brand:'Toyota', model:'Corolla', year:2024, category:'Sedan', country:'Japan', engine:'2.0L I4', horsepower:169, image:'https://images.unsplash.com/photo-1592853598064-5df3f4f8dfc4?auto=format&fit=crop&w=1200&q=80', description:'Global best-seller known for efficiency, reliability, and practicality.' },
  { id:'land-cruiser', brand:'Toyota', model:'Land Cruiser', year:2024, category:'SUV', country:'Japan', engine:'2.4L Turbo Hybrid', horsepower:326, image:'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80', description:'Legendary body-on-frame SUV with global reputation for toughness.' },
  { id:'prius', brand:'Toyota', model:'Prius', year:2024, category:'Hybrid', country:'Japan', engine:'2.0L Hybrid', horsepower:194, image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80', description:'Mainstream hybrid pioneer with excellent fuel economy.' },
  { id:'supra', brand:'Toyota', model:'Supra', year:2023, category:'Sports', country:'Japan', engine:'3.0L Turbo I6', horsepower:382, image:'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=1200&q=80', description:'Modern revival of Toyota’s iconic rear-wheel-drive sports coupe.' },

  { id:'model-s', brand:'Tesla', model:'Model S Plaid', year:2024, category:'Electric', country:'United States', engine:'Tri Motor', horsepower:1020, image:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80', description:'Ultra-fast electric sedan with top-tier acceleration and range.' },
  { id:'model3', brand:'Tesla', model:'Model 3', year:2024, category:'Electric', country:'United States', engine:'Dual Electric Motor', horsepower:450, image:'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80', description:'Popular premium EV sedan offering software-centric ownership.' },
  { id:'cybertruck', brand:'Tesla', model:'Cybertruck', year:2024, category:'Truck', country:'United States', engine:'Dual / Tri Motor', horsepower:845, image:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80', description:'Stainless-steel electric pickup with futuristic design and high torque.' },

  { id:'veyron', brand:'Bugatti', model:'Veyron', year:2005, category:'Hypercar', country:'France', engine:'8.0L Quad-Turbo W16', horsepower:1001, image:'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80', description:'Hypercar that redefined speed, luxury, and engineering ambition.' },
  { id:'chiron', brand:'Bugatti', model:'Chiron', year:2016, category:'Hypercar', country:'France', engine:'8.0L Quad-Turbo W16', horsepower:1479, image:'https://images.unsplash.com/photo-1566024164372-0281f1133aa6?auto=format&fit=crop&w=1200&q=80', description:'Successor to Veyron with even greater power and refinement.' },
  { id:'tourbillon', brand:'Bugatti', model:'Tourbillon', year:2026, category:'Hypercar', country:'France', engine:'8.3L V16 Hybrid', horsepower:1775, image:'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=1200&q=80', description:'Next-generation hybrid hypercar with naturally aspirated character.' },

  { id:'countach', brand:'Lamborghini', model:'Countach', year:1974, category:'Classic', country:'Italy', engine:'4.0L V12', horsepower:375, image:'https://images.unsplash.com/photo-1583121274452-3f5b7f4226f1?auto=format&fit=crop&w=1200&q=80', description:'Wedge-shaped icon that defined exotic supercar aesthetics.' },
  { id:'huracan', brand:'Lamborghini', model:'Huracán STO', year:2024, category:'Supercar', country:'Italy', engine:'5.2L V10', horsepower:631, image:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', description:'Track-focused V10 supercar delivering raw engagement.' },
  { id:'revuelto', brand:'Lamborghini', model:'Revuelto', year:2024, category:'Hypercar', country:'Italy', engine:'6.5L V12 Hybrid', horsepower:1001, image:'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=80', description:'Flagship hybrid V12 successor carrying Lamborghini into a new era.' },

  { id:'911', brand:'Porsche', model:'911 Carrera', year:2024, category:'Sports', country:'Germany', engine:'3.0L Twin-Turbo Flat-6', horsepower:379, image:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80', description:'Timeless sports car balancing precision, speed, and daily usability.' },
  { id:'cayenne', brand:'Porsche', model:'Cayenne Turbo E-Hybrid', year:2024, category:'SUV', country:'Germany', engine:'4.0L V8 Hybrid', horsepower:729, image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80', description:'High-performance luxury SUV with exceptional versatility.' },
  { id:'taycan', brand:'Porsche', model:'Taycan Turbo GT', year:2024, category:'Electric', country:'Germany', engine:'Dual Electric Motor', horsepower:1019, image:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80', description:'Electric performance sedan engineered with Porsche track DNA.' },

  { id:'m3', brand:'BMW', model:'M3', year:2024, category:'Sedan', country:'Germany', engine:'3.0L Twin-Turbo I6', horsepower:503, image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80', description:'High-performance benchmark sedan from BMW M division.' },
  { id:'x5', brand:'BMW', model:'X5', year:2024, category:'SUV', country:'Germany', engine:'3.0L Turbo I6', horsepower:375, image:'https://images.unsplash.com/photo-1617469767053-d3b523a0b98b?auto=format&fit=crop&w=1200&q=80', description:'Premium SUV blending comfort, space, and driving dynamics.' },
  { id:'i8', brand:'BMW', model:'i8', year:2020, category:'Hybrid', country:'Germany', engine:'1.5L Turbo Hybrid', horsepower:369, image:'https://images.unsplash.com/photo-1549399542-7e5dbe31d376?auto=format&fit=crop&w=1200&q=80', description:'Futuristic plug-in sports coupe with lightweight carbon construction.' },

  { id:'phantom', brand:'Rolls-Royce', model:'Phantom', year:2024, category:'Luxury Sedan', country:'United Kingdom', engine:'6.75L Twin-Turbo V12', horsepower:563, image:'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80', description:'Ultimate expression of bespoke ultra-luxury chauffeured motoring.' },
  { id:'cullinan', brand:'Rolls-Royce', model:'Cullinan', year:2024, category:'SUV', country:'United Kingdom', engine:'6.75L Twin-Turbo V12', horsepower:592, image:'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1200&q=80', description:'Flagship luxury SUV with commanding presence and supreme comfort.' },
  { id:'spectre', brand:'Rolls-Royce', model:'Spectre', year:2024, category:'Electric', country:'United Kingdom', engine:'Dual Electric Motor', horsepower:577, image:'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80', description:'First all-electric Rolls-Royce grand tourer with silent performance.' }
];
