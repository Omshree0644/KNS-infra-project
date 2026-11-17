
import "./infocard.css";

function InfoCard({ title, value, children, variant = "default", icon }) {
  return (
    <div className={`info-card ${variant}`}>
      {variant === "overview" ? (
        <>
          {icon && <div className="info-card-icon">{icon}</div>}
          
          <h3 className="info-card-value">{value}</h3>

          <p className="info-card-title">{title}</p>
          
        </>
      ) : (
        <>
          <p className="info-card-title">{title}</p>
          <h3 className="info-card-value">{value}</h3>
          {children}
        </>
      )}
    </div>
  );
}

export default InfoCard;
