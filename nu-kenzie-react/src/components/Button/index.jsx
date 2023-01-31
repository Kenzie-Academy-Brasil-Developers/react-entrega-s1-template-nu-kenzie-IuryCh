import "./button.css";

function Button({ setIsDash }) {
  return (
    <button
      type="button"
      className="container_middle--btn"
      onClick={() => setIsDash(true)}
    >
      Iniciar
    </button>
  );
}

export default Button;
