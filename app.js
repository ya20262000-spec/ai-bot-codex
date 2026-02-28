const app = document.getElementById('app');
const favoritesKey = 'allTheCarsFavorites';
const compareKey = 'allTheCarsCompare';

const state = {
  favorites: new Set(JSON.parse(localStorage.getItem(favoritesKey) || '[]')),
  compare: new Set(JSON.parse(localStorage.getItem(compareKey) || '[]')),
};

function saveState() {
  localStorage.setItem(favoritesKey, JSON.stringify([...state.favorites]));
  localStorage.setItem(compareKey, JSON.stringify([...state.compare]));
}

function route() {
  const hash = window.location.hash || '#/';
  const [path, query] = hash.slice(2).split('?');

  if (path.startsWith('car/')) {
    renderCarDetail(path.replace('car/', ''));
    return;
  }
  if (path.startsWith('brand/')) {
    renderBrandDetail(path.replace('brand/', ''));
    return;
  }

  switch (path) {
    case 'database':
      renderDatabase(new URLSearchParams(query));
      break;
    case 'favorites':
      renderFavorites();
      break;
    case 'compare':
      renderCompare();
      break;
    default:
      renderHome();
  }
}

function stats() {
  const years = CARS.map(c => c.year);
  return {
    brands: BRANDS.length,
    models: CARS.length,
    span: `${Math.min(...years)}-${Math.max(...years)}`,
  };
}

function renderHome() {
  const s = stats();
  const featuredBrands = BRANDS.slice(0, 6);
  const latestCars = [...CARS].sort((a, b) => b.year - a.year).slice(0, 8);

  app.innerHTML = `
    <section class="hero">
      <article class="panel">
        <h2>World Automotive Legacy</h2>
        <p>This luxury archive presents brands and models from pioneering classics to modern EVs and hypercars. Explore by brand, era, category, and country.</p>
        <div class="kpis">
          <div class="kpi"><strong>${s.brands}</strong>Brands</div>
          <div class="kpi"><strong>${s.models}</strong>Models</div>
          <div class="kpi"><strong>${s.span}</strong>Timeline</div>
        </div>
      </article>
      <article class="panel">
        <h2>Featured Brands</h2>
        <div class="grid">
          ${featuredBrands.map(b => cardBrand(b)).join('')}
        </div>
      </article>
    </section>

    <section>
      <h2 class="section-title">Latest & Iconic Models</h2>
      <div class="grid">
        ${latestCars.map(car => cardCar(car)).join('')}
      </div>
    </section>
  `;

  bindCardButtons();
}

function renderDatabase(params) {
  const selected = {
    search: params.get('search') || '',
    brand: params.get('brand') || '',
    year: params.get('year') || '',
    category: params.get('category') || '',
    country: params.get('country') || '',
  };

  const brands = [...new Set(CARS.map(c => c.brand))].sort();
  const years = [...new Set(CARS.map(c => c.year))].sort((a, b) => b - a);
  const categories = [...new Set(CARS.map(c => c.category))].sort();
  const countries = [...new Set(CARS.map(c => c.country))].sort();

  const filtered = CARS.filter(c =>
    c.model.toLowerCase().includes(selected.search.toLowerCase()) &&
    (!selected.brand || c.brand === selected.brand) &&
    (!selected.year || String(c.year) === selected.year) &&
    (!selected.category || c.category === selected.category) &&
    (!selected.country || c.country === selected.country)
  );

  app.innerHTML = `
    <section class="panel">
      <h2 class="section-title">Searchable Car Database</h2>
      <div class="filters">
        ${inputField('search', 'Search model...', selected.search)}
        ${selectField('brand', brands, selected.brand)}
        ${selectField('year', years, selected.year)}
        ${selectField('category', categories, selected.category)}
        ${selectField('country', countries, selected.country)}
      </div>
      <p class="muted">${filtered.length} cars found.</p>
      <div class="grid">${filtered.map(cardCar).join('') || '<p>No cars found. Adjust filters.</p>'}</div>
    </section>
  `;

  document.querySelectorAll('.filters [name]').forEach(el => {
    el.addEventListener('change', updateFilters);
    if (el.name === 'search') el.addEventListener('input', updateFilters);
  });
  bindCardButtons();

  function updateFilters() {
    const query = new URLSearchParams();
    document.querySelectorAll('.filters [name]').forEach(input => {
      if (input.value) query.set(input.name, input.value);
    });
    window.location.hash = `#/database?${query.toString()}`;
  }
}

function renderCarDetail(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) {
    app.innerHTML = '<section class="panel"><h2>Car not found.</h2></section>';
    return;
  }

  app.innerHTML = `
    <section class="panel detail">
      <img src="${car.image}" alt="${car.brand} ${car.model}" />
      <article>
        <h2 class="section-title">${car.brand} ${car.model}</h2>
        <p class="muted">${car.category} · ${car.year}</p>
        <p>${car.description}</p>
        <ul class="specs">
          <li><strong>Year:</strong> ${car.year}</li>
          <li><strong>Engine:</strong> ${car.engine}</li>
          <li><strong>Horsepower:</strong> ${car.horsepower} hp</li>
          <li><strong>Country:</strong> ${car.country}</li>
          <li><strong>Brand:</strong> <a class="button-link" href="#/brand/${slug(car.brand)}">View brand</a></li>
        </ul>
        <div class="btn-row">
          <button data-favorite="${car.id}">${state.favorites.has(car.id) ? 'Remove Favorite' : 'Add Favorite'}</button>
          <button data-compare="${car.id}">${state.compare.has(car.id) ? 'Remove Compare' : 'Add Compare'}</button>
          <a class="button-link" href="#/database">Back to database</a>
        </div>
      </article>
    </section>
  `;

  bindCardButtons();
}

function renderBrandDetail(id) {
  const brand = BRANDS.find(b => b.id === id);
  if (!brand) {
    app.innerHTML = '<section class="panel"><h2>Brand not found.</h2></section>';
    return;
  }

  const cars = CARS.filter(c => c.brand === brand.name).sort((a, b) => a.year - b.year);

  app.innerHTML = `
    <section class="panel">
      <img class="brand-image" src="${brand.logo}" alt="${brand.name} logo" />
      <h2 class="section-title">${brand.name}</h2>
      <p class="muted">Founded ${brand.founded} · ${brand.country}</p>
      <p>${brand.history}</p>
      <h3 class="section-title">All Models in Archive</h3>
      <div class="grid">
        ${cars.map(cardCar).join('')}
      </div>
    </section>
  `;

  bindCardButtons();
}

function renderFavorites() {
  const favorites = CARS.filter(c => state.favorites.has(c.id));
  app.innerHTML = `
    <section class="panel">
      <h2 class="section-title">Favorite Cars</h2>
      <p class="muted">Save your personal luxury garage list in local storage.</p>
      <div class="grid">${favorites.map(cardCar).join('') || '<p>No favorites yet.</p>'}</div>
    </section>
  `;
  bindCardButtons();
}

function renderCompare() {
  const compared = CARS.filter(c => state.compare.has(c.id));
  app.innerHTML = `
    <section class="panel">
      <h2 class="section-title">Compare Cars</h2>
      <p class="muted">Compare key specs side by side for selected vehicles.</p>
      ${compared.length ? `
        <div class="panel">
          <table style="width:100%; border-collapse: collapse;">
            <thead><tr>${compared.map(c => `<th style="text-align:left; color:var(--gold); border-bottom:1px solid var(--panel-border); padding:.5rem;">${c.model}</th>`).join('')}</tr></thead>
            <tbody>
              ${comparisonRow('Brand', compared.map(c => c.brand))}
              ${comparisonRow('Year', compared.map(c => c.year))}
              ${comparisonRow('Engine', compared.map(c => c.engine))}
              ${comparisonRow('Horsepower', compared.map(c => c.horsepower + ' hp'))}
              ${comparisonRow('Category', compared.map(c => c.category))}
              ${comparisonRow('Country', compared.map(c => c.country))}
            </tbody>
          </table>
        </div>
      ` : '<p>Select cars with “Add Compare” from the database.</p>'}
      <div class="grid">${compared.map(cardCar).join('')}</div>
    </section>
  `;
  bindCardButtons();
}

function comparisonRow(label, values) {
  return `<tr>${values.map((v, i) => `<td style="border-bottom:1px solid var(--panel-border); padding:.45rem;"><strong style="color:${i===0?'var(--gold-soft)':'var(--silver)'}">${i===0 ? label + ': ' : ''}</strong>${v}</td>`).join('')}</tr>`;
}

function inputField(name, placeholder, value) {
  return `<input name="${name}" value="${value}" placeholder="${placeholder}" aria-label="${name}"/>`;
}

function selectField(name, options, value) {
  return `
    <select name="${name}" aria-label="${name}">
      <option value="">All ${name}</option>
      ${options.map(o => `<option value="${o}" ${String(o)===String(value) ? 'selected' : ''}>${o}</option>`).join('')}
    </select>
  `;
}

function cardCar(car) {
  return `
    <article class="card">
      <img class="car-image" src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy" />
      <div class="card-content">
        <h3>${car.model}</h3>
        <p class="muted">${car.brand} · ${car.year} · ${car.category}</p>
        <p>${car.horsepower} hp · ${car.engine}</p>
        <div class="btn-row">
          <a class="button-link" href="#/car/${car.id}">Details</a>
          <button data-favorite="${car.id}">${state.favorites.has(car.id) ? '★ Saved' : '☆ Favorite'}</button>
          <button data-compare="${car.id}">${state.compare.has(car.id) ? '✓ Compare' : '+ Compare'}</button>
        </div>
      </div>
    </article>
  `;
}

function cardBrand(brand) {
  return `
    <article class="card">
      <img class="brand-image" src="${brand.logo}" alt="${brand.name} logo" loading="lazy" />
      <div class="card-content">
        <h3>${brand.name}</h3>
        <p class="muted">${brand.country} · Founded ${brand.founded}</p>
        <a class="button-link" href="#/brand/${brand.id}">Open Brand</a>
      </div>
    </article>
  `;
}

function slug(brandName) {
  return BRANDS.find(b => b.name === brandName)?.id || '';
}

function bindCardButtons() {
  document.querySelectorAll('[data-favorite]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-favorite');
      state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
      saveState();
      route();
    });
  });

  document.querySelectorAll('[data-compare]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-compare');
      state.compare.has(id) ? state.compare.delete(id) : state.compare.add(id);
      saveState();
      route();
    });
  });
}

window.addEventListener('hashchange', route);
route();
