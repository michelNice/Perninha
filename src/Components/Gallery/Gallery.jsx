import React from "react";
import { Fancybox } from "@fancyapps/ui";
import { useTranslation } from 'react-i18next';
import './Gallery.css'
import image1 from '../img/gallery2.jpg'
import image2 from '../img/gallery3.jpg'
import image3 from '../img/gallery9.jpg'
import image4 from '../img/gallery6.jpg'
import image5 from '../img/gallery10.jpg'
import image6 from '../img/gallery4.jpg'

const Gallery = () => {
  const {t} = useTranslation()
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
     image1,
     image2,
     image3,
     image4,
     image5,
     image6,
  ];

  return (
    <main className="main" id="gallery">
        <div className="starcontainer">
      <h2>{t("gallery")}</h2>
      <div className="star-line">
        <hr className="line" />
        <i className="fa fa-images star-icon"></i>
        <hr className="line" />
      </div>
    </div>

      <div className="container-gallery">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <a
                href={image}
                data-fancybox="gallery"
                data-caption={`Caption  ${index + 1}`}
              >
                <img src={image} alt={`Gallery  ${index + 1}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
