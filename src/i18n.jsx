import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          gallery: "gallery",
          about: "About me",
          crews:"crews",
          contactNav:"Contact Me",
          parnership:"Partnership",
          resileH:"welcome to my world",
          contact:"Get in Touch",
          buttonAbout:"Read More...",
          buttonContact:"Sent",
          nameContact:"Your Name",
          emailContact:"Your Email",
          phoneContact:"Your Phone",
          massegemContact:"Your Massagem",
          videoHero: "See the video",
          relise:"B-Boy Perninha is a Brazilian breakdancer known for his high-energy footwork and dynamic, creative style. Hailing from Brazil, Perninha has become a significant figure in the breaking scene, with a reputation for his fast footwork, complex patterns, and unique moves. He has competed in various international battles, showcasing his skills in competitions like Red Bull BC One and other notable events."
        },
      },
      pt: {
        translation: {
          home: "Início",
          gallery: "Galeria",
          about: "Sobre mim",
          crews:"equipes",
          contact:"entre em contato",
          contactNav:"entre em contato",
          parnership:"Parceria",
          resileH:"Bem vindo ao meu mundo",
          buttonAbout:"Leia mais...",
          buttonContact:"Enviado",
          nameContact: "Seu Nome",  
          emailContact: "Seu E-mail",  
          phoneContact: "Seu Telefone",  
          massegemContact: "Sua Mensagem",
          videoHero: "Veja o vídeo",
          relise:"B-Boy Perninha é um breakdancer brasileiro conhecido por seu footwork enérgico e estilo dinâmico e criativo. Natural do Brasil, Perninha se tornou uma figura importante na cena do breaking, com uma reputação por seus movimentos rápidos, padrões complexos e movimentos únicos. Ele competiu em várias batalhas internacionais, mostrando suas habilidades em competições como o Red Bull BC One e outros eventos notáveis."
        },
      },
      es: {
        translation: {
          home: "Inicio",
          gallery: "Galería",
          about: "Acerca de mí ",
          crews:"Equipes",
          contactNav:"Contáctame",
          parnership:"Colaboración",
          resileH:"Bienvenido a mi mundo",
          contact:"Ponerse en contacto",
          buttonAbout:"Leer más...",
          buttonContact:"Enviada",
          nameContact: "Tu Nombre",  
          emailContact: "Tu Correo Electrónico",  
          phoneContact: "Tu Teléfono",  
          massegemContact: "Tu Mensaje",
          videoHero: "Ver el vídeo",
          relise:"B-Boy Perninha es un breakdancer brasileño conocido por su footwork enérgico y su estilo dinámico y creativo. Originario de Brasil, Perninha se ha convertido en una figura importante en la escena del breaking, con una reputación por sus movimientos rápidos, patrones complejos y movimientos únicos. Ha competido en varias batallas internacionales, demostrando sus habilidades en competiciones como Red Bull BC One y otros eventos destacados."
        },
      },
    },
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
