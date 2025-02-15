import { useState, useEffect } from "react";
import { Advert } from "./types";
import { getLatestAdverts } from "./service";

function AdvertsPage() {
    const [adverts, setAdverts] = useState<Advert[]>([]);
    
    useEffect(() => {
        async function getAdverts() {
            const adverts = await getLatestAdverts();
            setAdverts(adverts);
        }
        getAdverts();
    }, []);
    

    return (
        <div>
            <h1>Página de anuncios</h1>
            <div className="container mt-4">
                <div className="row g-4">
                    {adverts.map((advert) => (
                        <div key={advert.id} className="col-md-4">
                            <div className="card p-3 shadow-sm border-0">
                                <img
                                    src={advert.img}
                                    alt={advert.title}
                                    className="card-img-top mb-3"
                                    style={{
                                        height: "300px",
                                        objectFit: "cover",
                                    }}
                                />
                                <h5>{advert.title}</h5>
                                <p>{advert.description}</p>
                                <p>
                                    <strong>{advert.price}</strong>
                                </p>
                                <span className="badge bg-secondary">
                                    {advert.type}
                                </span>
                                <div className="mt-2">
                                    {advert.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-info me-2"
                                        >
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
