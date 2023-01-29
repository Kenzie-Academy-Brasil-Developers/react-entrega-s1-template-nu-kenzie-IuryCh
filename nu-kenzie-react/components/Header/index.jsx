import "./header.css";
import logo from "../../src/assets/imagens/NuKenzie2.svg";

function Header({ setIsDash }) {
  return (
    <header className="dash_header">
      <div className="dash_nukenzie">
        <img src={logo} alt="Nu kenzie" />
      </div>
      <button
        type="button"
        className="btn_logout"
        onClick={() => setIsDash(false)}
      >
        Inicio
      </button>
    </header>
  );
}

export default Header;
