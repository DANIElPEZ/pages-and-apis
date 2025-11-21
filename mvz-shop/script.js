const products = [
  { id: 'p001', name: 'Porta agujas', category: 'Instrumental quirúrgico', price: null, image: './assets/portagujas.jpg' },
  { id: 'p002', name: 'Pinza Kelly recta', category: 'Pinzas', price: null, image: './assets/kellyrecta.jpg' },
  { id: 'p003', name: 'Pinza Kelly curva', category: 'Pinzas', price: null, image: './assets/kellycurva.jpg' },
  { id: 'p004', name: 'Pinza Rochester recta', category: 'Pinzas', price: null, image: './assets/rochesterrecta.jpg' },
  { id: 'p005', name: 'Pinza Rochester curva', category: 'Pinzas', price: null, image: './assets/rochestercurva.webp' },
  { id: 'p006', name: 'Pinza mosquito recta', category: 'Pinzas', price: null, image: './assets/mosquitorecta.png' },
  { id: 'p007', name: 'Pinza mosquito curva', category: 'Pinzas', price: null, image: './assets/mosquitocurva.jpg' },
  { id: 'p008', name: 'Pinza de campo', category: 'Pinzas', price: null, image: './assets/campo.jpg' },
  { id: 'p009', name: 'Pinza Allis', category: 'Pinzas', price: null, image: './assets/allis.webp' },
  { id: 'p010', name: 'Pinza disección garra', category: 'Pinzas', price: null, image: './assets/diseccioncongarra.jpg' },
  { id: 'p011', name: 'Pinza disección sin garra', category: 'Pinzas', price: null, image: './assets/diseccionsingarra.jpg' },
  { id: 'p012', name: 'Mango bisturí 3', category: 'Corte', price: null, image: './assets/mangobisturi3.jpg' },
  { id: 'p013', name: 'Mango bisturí 4', category: 'Corte', price: null, image: './assets/mangobisturi4.webp' },
  { id: 'p014', name: 'Tijeras Mayo recta', category: 'Corte', price: null, image: './assets/tijeramayorecta.jpg' },
  { id: 'p015', name: 'Separador Farabeuf', category: 'Retractores', price: null, image: './assets/separadorfarabeuf.webp' },
  { id: 'p016', name: 'Tijeras Metzenbaum recta', category: 'Corte', price: null, image: './assets/tijerametzenbaumrecta.webp' },
  { id: 'p017', name: 'Sonda acanalada', category: 'Instrumental general', price: null, image: './assets/sondaacanalada.webp' },
  { id: 'p018', name: 'Tijera sutura', category: 'Corte', price: null, image: './assets/tijerasutura.webp' },
  { id: 'p019', name: 'Cuchillas bisturí caja', category: 'Corte', price: null, image: './assets/cuchillabisturi.webp' },
  { id: 'p020', name: 'Caja guantes látex', category: 'Descartables', price: null, image: './assets/cajalatex.jpeg' },
  { id: 'p021', name: 'Par látex', category: 'Descartables', price: null, image: './assets/parlatex.webp' },
  { id: 'p022', name: 'Kit disección 9 piezas', category: 'Sets', price: null, image: './assets/kitdiseccion.webp' },
  { id: 'p023', name: 'Tapabocas', category: 'Descartables', price: null, image: './assets/tapabocas.png' },
  { id: 'p024', name: 'Aguja de sutura', category: 'Descartables', price: null, image: './assets/agujasutura.jpg' },
  { id: 'p025', name: 'Forceps 150', category: 'Instrumental quirúrgico', price: null, image: './assets/forceps.jpg' },
  { id: 'p026', name: 'Pinza gubia', category: 'Pinzas', price: null, image: './assets/pinzagubia.png' },
  { id: 'p027', name: 'Elevador de raices 301', category: 'Elevador', price: null, image: './assets/raiz301.jpg' },
  { id: 'p028', name: 'Elevador de raices 304', category: 'Elevador', price: null, image: './assets/raiz304.png' }
];

function formatPrice(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value);
}

let currentSearch = '';
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const totalCount = document.getElementById('totalCount');
const noResults = document.getElementById('noResults');


function renderProducts() {
  const filtered = products.filter(p =>
    currentSearch ? p.name.toLowerCase().includes(currentSearch) : true
  );

  grid.innerHTML = '';
  totalCount.textContent = `${filtered.length} producto(s)`;
  noResults.classList.toggle('hidden', filtered.length > 0);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-[1.02] transition flex flex-col';

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    img.className = 'w-full h-52 object-contain bg-white';
    card.appendChild(img);

    const info = document.createElement('div');
    info.className = 'p-4 flex flex-col flex-1';

    const title = document.createElement('h3');
    title.textContent = p.name;
    title.className = 'text-lg font-semibold mb-1';

    const cat = document.createElement('p');
    cat.textContent = p.category;
    cat.className = 'text-xs uppercase text-indigo-600 mb-2 font-semibold';

    const price = document.createElement('p');
    price.textContent = p.price ? formatPrice(p.price) : 'Precio no disponible';
    price.className = 'text-xl font-bold mb-2 text-green-600';

    info.appendChild(title);
    info.appendChild(cat);
    info.appendChild(price);

    card.appendChild(info);
    grid.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.trim().toLowerCase();
  renderProducts();
});

const modalPago = document.getElementById('modalPago');
const abrirPago = document.getElementById('abrirPago');
const closePago = document.getElementById('closePago');

abrirPago.addEventListener('click', () => modalPago.classList.remove('hidden'));
closePago.addEventListener('click', () => modalPago.classList.add('hidden'));
modalPago.addEventListener('click', (e) => { 
  if (e.target === modalPago) modalPago.classList.add('hidden'); 
});

renderProducts();

