
import "./style.css";

function Button({ children, href = "#", className = "" }) {
  return (
    <a href={href} className={`ui-button ${className}`}>
      {children}
    </a>
  );
}

export default Button;
