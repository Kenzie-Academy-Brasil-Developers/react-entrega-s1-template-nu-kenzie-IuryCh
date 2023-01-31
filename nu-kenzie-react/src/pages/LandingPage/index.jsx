import NuKenzie from "../../assets/imagens/NuKenzie.svg";
import illustration from "../../assets/imagens/Illustration.svg";
// import Button from "../../components/Button";
import "./landingpage.css";

function LandingPage({ Button, setIsDash }) {
  return (
    <>
      <div className="container_landingpage">
        <div className="container_leftside">
          <div className="box_nukenzie">
            <img src={NuKenzie} alt="Nu Kenzie" />
          </div>
          <div className="container_middle">
            <h2 className="container_middle--title">
              Centralize o controle das suas finanças
            </h2>
            <p className="container_middle--subtitle">
              de forma rápida e segura
            </p>
            {<Button setIsDash={setIsDash} />}
            {/* <Button setIsDash={setIsDash} /> */}
          </div>
        </div>
        <div className="box_illustratrion">
          <img src={illustration} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
