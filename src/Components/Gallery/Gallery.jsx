import React from "react";
//import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import './Gallery.css'

const Gallery = () => {
  React.useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close",
      ],
      loop: false,
      protect: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const images = [
    "https://cdn.pixabay.com/photo/2023/05/22/10/49/houses-8010401_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/13/05/36/mountains-8123933_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/12/21/35/stream-7651969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/10/24/20/22/muhlviertel-7544316_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/09/13/11/47/mountains-4473760_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/29/20/01/sunset-4238445_1280.jpg",
  ];

  return (
    <main className="main">
      <div className="container-gallery">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <a
                href={image}
                data-fancybox="gallery"
                data-caption={`Caption Images ${index + 1}`}
              >
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
