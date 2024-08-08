import "./IndexHome.css";

const IndexHome = () => {
  return (
    <div className="containerIndexHome">
      <h1 className="title-home-h1">ARAKUAA</h1>
      <div className="section1">
        <p>
          Bienvenido a Arakuaa, una innovadora solución para transformar
          botellas de plástico en fibras textiles, inspirada en las ricas
          tradiciones de la etnia Guaraní Isoseña de Bolivia. Aquí, fusionamos
          técnicas ancestrales con la tecnología moderna para crear moda
          sostenible y accesible para todos.
        </p>
        <img src="./MACHINE.png" alt="MACHINEImg" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="section2">
        <img src="./GALLERY1.png" alt="MACHINEImg" />
        <p>
          Las fibras creadas con Arakuaa ya están siendo utilizadas en proyectos
          de moda sostenible alrededor del mundo. Desde pequeñas comunidades
          hasta diseñadores innovadores, la versatilidad de estas fibras permite
          crear desde ropa hasta accesorios únicos.
        </p>
      </div>
    </div>
  );
};

export default IndexHome;
