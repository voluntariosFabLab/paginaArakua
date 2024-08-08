import "./About.css";
import videoArakua from "./assets/about-video.mp4";
import gallery from "./assets/ARTESAN.png";

const About = () => {
  return (
    <div className="containerAbout">
      <div className="about-section">
        <section className="section1-what-is-arakuaa">
          <div>
            <h3>¿Qué es Arakuaa?</h3>
            <p>
              Arakuaa es más que una máquina; es un puente entre el pasado y el
              futuro. Diseñada para transformar botellas de plástico en fibras
              textiles, esta máquina se inspira en la sabiduría ancestral de la
              cultura Guaraní Isoseña. Creemos en un mundo donde el reciclaje no
              solo es una necesidad, sino una oportunidad para crear algo
              hermoso y funcional.
            </p>
          </div>
          <img src={gallery} alt="personimg" className="img-1-about" />
        </section>
        <br />
        <br />
        <br />
        <br />
        <div className="section2-div" >
          <h3>Nuestra Inspiración</h3>
          <h4>Raíces Guaraní Isoseñas</h4>
          <div>
            <p>
              La cultura Guaraní Isoseña de Santa Cruz de la Sierra, Bolivia, ha
              sido una fuente inagotable de inspiración para Arakuaa. Sus
              técnicas ancestrales, transmitidas de generación en generación,
              nos enseñan que la innovación puede nacer de lo tradicional. Al
              reutilizar materiales desechados como el plástico, honramos esta
              sabiduría ancestral, dándole un nuevo propósito.
            </p>
            <video
              src={videoArakua}
              autoPlay
              muted
              className="video-arakuaa"
              loop
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
