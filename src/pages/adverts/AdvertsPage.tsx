const adverts = [
    {
      id: 1,
      userId: 101,
      name: "Portátil Lenovo ThinkPad T14",
      price: 800,
      type: "venta",
      tags: ["tecnología", "portátil", "Linux", "ThinkPad"],
      content: "Lenovo ThinkPad T14 con procesador AMD Ryzen, ideal para desarrolladores y entusiastas de Linux."
    },
    {
      id: 2,
      userId: 102,
      name: "Teclado mecánico Keychron K8",
      price: 100,
      type: "venta",
      tags: ["accesorios", "teclado", "mecánico", "Linux"],
      content: "Teclado mecánico inalámbrico Keychron K8 con switches rojos, compatible con Linux."
    },
    {
      id: 3,
      userId: 103,
      name: "Busco Raspberry Pi 4",
      price: 80,
      type: "compra",
      tags: ["hardware", "miniPC", "Raspberry Pi", "Linux"],
      content: "Estoy buscando una Raspberry Pi 4 para proyectos de domótica y servidores caseros."
    },
    {
      id: 4,
      userId: 104,
      name: "Servidor HP ProLiant DL380",
      price: 1200,
      type: "venta",
      tags: ["servidor", "hardware", "Linux"],
      content: "Servidor HP ProLiant DL380 con procesador Xeon, perfecto para virtualización con Linux."
    },
    {
      id: 5,
      userId: 105,
      name: "Monitor ultrawide 34”",
      price: 500,
      type: "venta",
      tags: ["pantalla", "monitor", "ultrawide", "productividad"],
      content: "Monitor ultrawide de 34” con resolución 3440x1440, excelente para multitarea y desarrollo."
    },
    {
      id: 6,
      userId: 106,
      name: "Busco distribución Linux en USB",
      price: 20,
      type: "compra",
      tags: ["software", "Linux", "USB", "sistemas operativos"],
      content: "Necesito una USB booteable con Ubuntu o Debian ya configurada y lista para instalar."
    },
    {
      id: 7,
      userId: 107,
      name: "Cámara Canon EOS R5",
      price: 2500,
      type: "venta",
      tags: ["fotografía", "Canon", "cámara"],
      content: "Cámara Canon EOS R5 con sensor full frame de 45MP, ideal para fotografía profesional y video en 8K."
    },
    {
      id: 8,
      userId: 108,
      name: "Bicicleta de montaña",
      price: 450,
      type: "venta",
      tags: ["deporte", "bicicleta", "montaña"],
      content: "Bicicleta de montaña con cuadro de aluminio y suspensión delantera, perfecta para rutas exigentes."
    }
];
  
  
  

function AdvertsPage(){
    return (
        <div>
            <h1>Página de anuncios</h1>
            <ul>
                {adverts.map((advert) => (
                    <li key={advert.id}>{advert.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdvertsPage;