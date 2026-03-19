const contenedor = document.getElementById("recetas")

const recetas = [

{nombre:"Ensalada de pollo saludable",img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"},
{nombre:"Bowl de quinoa con verduras",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"},
{nombre:"Avena con frutas",img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061"},
{nombre:"Smoothie verde detox",img:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543"},
{nombre:"Wrap integral de pollo",img:"https://images.unsplash.com/photo-1505576399279-565b52d4ac71"},
{nombre:"Ensalada mediterránea",img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352"},
{nombre:"Bowl vegano de garbanzos",img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"},
{nombre:"Tostadas con aguacate",img:"https://images.unsplash.com/photo-1603046891744-1f76eb10aec6"},
{nombre:"Ensalada detox verde",img:"https://images.unsplash.com/photo-1511690656952-34342bb7c2f2"},
{nombre:"Bowl fitness con arroz integral",img:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"},

{nombre:"Yogur con granola y fruta",img:"https://images.unsplash.com/photo-1488477181946-6428a0291777"},
{nombre:"Ensalada de salmón y aguacate",img:"https://images.unsplash.com/photo-1466637574441-749b8f19452f"},
{nombre:"Bowl de lentejas saludable",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601"},
{nombre:"Desayuno de frutas y avena",img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"},
{nombre:"Ensalada de quinoa y tomate",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"},
{nombre:"Bowl de pollo y verduras",img:"https://images.unsplash.com/photo-1481931098730-318b6f776db0"},
{nombre:"Tostadas integrales con huevo",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8"},
{nombre:"Ensalada de espinaca y fresas",img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288"},
{nombre:"Bowl de arroz y vegetales",img:"https://images.unsplash.com/photo-1512058564366-c9e3e046f19a"},
{nombre:"Smoothie de mango saludable",img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888"},

{nombre:"Bowl de salmón y quinoa",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"},
{nombre:"Ensalada de pepino y tomate",img:"https://images.unsplash.com/photo-1478144592103-25e218a04891"},
{nombre:"Avena con plátano y miel",img:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea"},
{nombre:"Bowl de verduras asadas",img:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543"},
{nombre:"Ensalada de garbanzos",img:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327"},
{nombre:"Bowl vegano saludable",img:"https://images.unsplash.com/photo-1466637574441-749b8f19452f"},
{nombre:"Tostada integral con aguacate",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8"},
{nombre:"Ensalada fresca de vegetales",img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288"},
{nombre:"Bowl saludable con pollo",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"},
{nombre:"Smoothie de frutos rojos",img:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc"},

{nombre:"Desayuno fitness",img:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"},
{nombre:"Bowl de quinoa y aguacate",img:"https://images.unsplash.com/photo-1512058564366-c9e3e046f19a"},
{nombre:"Ensalada de espinaca saludable",img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352"},
{nombre:"Avena proteica",img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061"},
{nombre:"Smoothie tropical",img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888"},
{nombre:"Ensalada ligera fitness",img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"},
{nombre:"Bowl de verduras y arroz",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601"},
{nombre:"Tostadas con aguacate y tomate",img:"https://images.unsplash.com/photo-1603046891744-1f76eb10aec6"},
{nombre:"Ensalada fresca saludable",img:"https://images.unsplash.com/photo-1466637574441-749b8f19452f"},
{nombre:"Bowl energético",img:"https://images.unsplash.com/photo-1481931098730-318b6f776db0"},

{nombre:"Ensalada fitness verde",img:"https://images.unsplash.com/photo-1511690656952-34342bb7c2f2"},
{nombre:"Bowl vegano con quinoa",img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"},
{nombre:"Desayuno saludable con frutas",img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"},
{nombre:"Smoothie verde energizante",img:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543"},
{nombre:"Ensalada ligera de verano",img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288"},
{nombre:"Bowl proteico fitness",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"},
{nombre:"Avena con semillas",img:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea"},
{nombre:"Tostada integral saludable",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8"},
{nombre:"Ensalada de vegetales frescos",img:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327"},
{nombre:"Bowl saludable final",img:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"}

]


function cargarRecetas(){

contenedor.innerHTML=""

recetas.forEach((receta)=>{

contenedor.innerHTML += `

<div class="card">

<img src="${receta.img}">

<h3>${receta.nombre}</h3>

<div class="estrellas">
⭐⭐⭐⭐⭐
</div>

<button onclick="verReceta('${receta.nombre}')">
Ver receta
</button>

</div>

`

})

}

cargarRecetas()


function verReceta(nombre){

alert("Receta: "+nombre)

}