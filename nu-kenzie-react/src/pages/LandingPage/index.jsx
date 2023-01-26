import "./landingpage.css";

function LandingPage() {
  return (
    <>
      <div className="container_landingpage">
        <div className="container_leftside">
          <div className="box_nukenzie">
            <img src="./src/assets/imagens/NuKenzie.svg" alt="Nu Kenzie" />
          </div>
          <div className="container_middle">
            <h2 className="container_middle--title">
              Centralize o controle das suas finanças
            </h2>
            <p className="container_middle--subtitle">
              de forma rápida e segura
            </p>
            <button className="container_middle--btn" /*onClick={x}*/>
              Iniciar
            </button>
          </div>
        </div>
        <div className="box_illustratrion">
          <img src="./src/assets/imagens/Illustration.svg" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
