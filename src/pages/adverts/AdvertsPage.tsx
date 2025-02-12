const adverts = [
    {
      id: 2,
      userId: 102,
      name: "Teclado mecánico Keychron K8",
      price: 100,
      type: "venta",
      tags: ["accesorios", "teclado", "mecánico", "Linux"],
      content: "Teclado mecánico inalámbrico Keychron K8 con switches rojos, compatible con Linux.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zdnet.com%2Fa%2Fimg%2F2022%2F04%2F15%2F09ad146b-9cec-41c4-bd4c-9e492ddd36e8%2Fkeychron-k8-pro-1.jpg&f=1&nofb=1&ipt=da1024d07828582d722d7337bb51a95c217d212064619b3442dac726d90a5ad0&ipo=images"
    },
    {
      id: 3,
      userId: 103,
      name: "Busco Raspberry Pi 4",
      price: 80,
      type: "compra",
      tags: ["hardware", "miniPC", "Raspberry Pi", "Linux"],
      content: "Estoy buscando una Raspberry Pi 4 para proyectos de domótica y servidores caseros.",
      image: "https://hackaday.com/wp-content/uploads/2019/07/Raspberry_Pi_4_Hero.jpg"
    },
    {
      id: 4,
      userId: 104,
      name: "Servidor HP ProLiant DL380",
      price: 1200,
      type: "venta",
      tags: ["servidor", "hardware", "Linux"],
      content: "Servidor HP ProLiant DL380 con procesador Xeon, perfecto para virtualización con Linux.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.serverwarehouse.co.uk%2Fsystem_files%2Fimages%2Fsystem_images%2Fcut%2Fdl380-16-front.jpg&f=1&nofb=1&ipt=22d7b16beee9e50bf04c3e18041176ce0ff759133599efb0b6b30b6fa8b6c7b1&ipo=images"
    },
    {
        id: 1,
        userId: 101,
        name: "Portátil Lenovo ThinkPad T14",
        price: 800,
        type: "venta",
        tags: ["tecnología", "portátil", "Linux", "ThinkPad"],
        content: "Lenovo ThinkPad T14 con procesador AMD Ryzen, ideal para desarrolladores y entusiastas de Linux.",
        image: "https://www.info-computer.com/409751-medium_default/lenovo-thinkpad-x13-g1-core-i5-10210u-16-ghz-8-gb-256-nvme-win-11-pro.jpg"
    },
    {
      id: 5,
      userId: 105,
      name: "Monitor ultrawide 34”",
      price: 500,
      type: "venta",
      tags: ["pantalla", "monitor", "ultrawide", "productividad"],
      content: "Monitor ultrawide de 34” con resolución 3440x1440, excelente para multitarea y desarrollo.",
      image: "https://thumb.pccomponentes.com/w-530-530/articles/34/346802/1429-philips-346p1crh-00-34-led-ultrawide-quad-hd-100hz-curvo-usb-c.jpg"
    },
    {
      id: 6,
      userId: 106,
      name: "Busco distribución Linux en USB",
      price: 20,
      type: "compra",
      tags: ["software", "Linux", "USB", "sistemas operativos"],
      content: "Necesito una USB booteable con Ubuntu o Debian ya configurada y lista para instalar.",
      image: "http://www.kfish.org/linux/cartoons/images/pee-on-logo2.jpg"
    },
    {
      id: 7,
      userId: 107,
      name: "Cámara Canon EOS R5",
      price: 2500,
      type: "venta",
      tags: ["fotografía", "Canon", "cámara"],
      content: "Cámara Canon EOS R5 con sensor full frame de 45MP, ideal para fotografía profesional y video en 8K.",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420371ld.jpg"
    },
    {
      id: 8,
      userId: 108,
      name: "Bicicleta de montaña",
      price: 45000,
      type: "venta",
      tags: ["deporte", "bicicleta", "montaña"],
      content: "Bicicleta de montaña con cuadro de aluminio y suspensión delantera, perfecta para rutas exigentes.",
      image: "https://cdn.mammothbikes.com/product/Large/492772_04012024155620.jpg"
    }
  ];
  
  
  
  

function AdvertsPage(){
    return (
        <div>
          <h1>Página de anuncios</h1>
          <div className="container mt-4">
            <div className="row g-4">
              {adverts.map(advert => (
                <div key={advert.id} className="col-md-4">
                  <div className="card p-3 shadow-sm border-0">
                    <img 
                      src={advert.image} 
                      alt={advert.name} 
                      className="card-img-top mb-3" 
                      style={{ height: '300px', objectFit: 'cover' }} 
                    />
                    <h5>{advert.name}</h5>
                    <p>{advert.content}</p>
                    <p><strong>{advert.price}</strong></p>
                    <span className="badge bg-secondary">{advert.type}</span>
                    <div className="mt-2">
                      {advert.tags.map((tag, index) => (
                        <span key={index} className="badge bg-info me-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
          
}

export default AdvertsPage;