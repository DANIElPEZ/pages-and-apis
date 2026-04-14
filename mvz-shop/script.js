const products = [
  { id: 'p01', name: 'Kit disección 9 piezas', category: 'Sets', image: './assets/kitdiseccion.webp', price: 62000 },
  { id: 'p02', name: 'Mango bisturí 4', category: 'Corte', image: './assets/mangobisturi4.webp', price: 7000 },
  { id: 'p03', name: 'Mango bisturí 3', category: 'Corte', image: './assets/mangobisturi3.jpg', price: 7000 },
  { id: 'p04', name: 'Pinza Allis', category: 'Pinzas', image: './assets/allis.webp', price: 17000 },
  { id: 'p05', name: 'Pinza de campo', category: 'Pinzas', image: './assets/campo.jpg', price: 15000 },
  { id: 'p06', name: 'Pinza disección garra', category: 'Pinzas', image: './assets/diseccioncongarra.jpg', price: 9000 },
  { id: 'p07', name: 'Pinza disección sin garra', category: 'Pinzas', image: './assets/diseccionsingarra.jpg', price: 9000 },
  { id: 'p08', name: 'Pinza Kelly recta', category: 'Pinzas', image: './assets/kellyrecta.jpg', price: 13000 },
  { id: 'p09', name: 'Pinza Kelly curva', category: 'Pinzas', image: './assets/kellycurva.jpg', price: 13000 },
  { id: 'p10', name: 'Pinza mosquito recta', category: 'Pinzas', image: './assets/mosquitorecta.png', price: 12000 },
  { id: 'p11', name: 'Pinza mosquito curva', category: 'Pinzas', image: './assets/mosquitocurva.jpg', price: 12000 },
  { id: 'p12', name: 'Pinza Rochester recta', category: 'Pinzas', image: './assets/rochesterrecta.jpg', price: 14000 },
  { id: 'p13', name: 'Pinza Rochester curva', category: 'Pinzas', image: './assets/rochestercurva.webp', price: 14000 },
  { id: 'p14', name: 'Porta agujas', category: 'Instrumental quirúrgico', image: './assets/portagujas.jpg', price: 14000 },
  { id: 'p15', name: 'Separador Farabeuf', category: 'Retractores', image: './assets/separadorfarabeuf.webp', price: 28000 },
  { id: 'p16', name: 'Sonda acanalada', category: 'Instrumental general', image: './assets/sondaacanalada.webp', price: 5000 },
  { id: 'p17', name: 'Tijera sutura', category: 'Corte', image: './assets/tijerasutura.webp', price: 14000 },
  { id: 'p18', name: 'Tijeras Mayo recta', category: 'Corte', image: './assets/tijeramayorecta.jpg', price: 14000 },
  { id: 'p19', name: 'Tijeras Metzenbaum recta', category: 'Corte', image: './assets/tijerametzenbaumrecta.webp', price: 14000 },
  { id: 'p20', name: 'Termometro digital rigido', category: 'Instrumental general', image: './assets/termometro.jpg', price: 10000 },
  { id: 'p21', name: 'Fonendo Rappapore negro', category: 'Instrumental general', image: './assets/fonendo.webp', price: 45000 },
  { id: 'p22', name: 'Linterna led para examen', category: 'Instrumental general', image: './assets/linterna.jpg', price: 10000 },
  { id: 'p23', name: 'Caja Cuchillas de bisturí', category: 'Corte', image: './assets/cuchillabisturi.webp', price: 40000 },
  { id: 'p24', name: 'Caja guantes nitrilo', category: 'Descartables', image: './assets/cajalatex.jpeg', price: 25000 },
  { id: 'p25', name: 'Tapabocas', category: 'Descartables', image: './assets/tapabocas.png', price: 1000 },
  { id: 'p26', name: 'Aguja de sutura G7 paquete', category: 'Descartables', image: './assets/agujasutura.jpg', price: 14000 },
  { id: 'p27', name: 'Pinza gubia', category: 'Pinzas', image: './assets/pinzagubia.png', price: 60000 },
  { id: 'p28', name: 'Elevador de raices 301', category: 'Elevador', image: './assets/raiz301.jpg', price: 51000 },
  { id: 'p29', name: 'Elevador de raices 304', category: 'Elevador', image: './assets/raiz304.png', price: 56000 },
  { id: 'p30', name: 'Forceps 150', category: 'Instrumental quirúrgico', image: './assets/forceps.jpg', price: 55000 }
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

