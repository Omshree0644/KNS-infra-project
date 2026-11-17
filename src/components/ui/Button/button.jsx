
import "./button.css";

function Button({ children, variant = "gold" }) {
  return (
    <button className={`custom-button ${variant}`}>
      {children}
    </button>
    
  );
}

export default Button;
