
import "./style.css";

function Container({ children, className = "" }) {
  return (
    <div className={`ui-container ${className}`}>
      {children}
    </div>
  );
}

export default Container;
