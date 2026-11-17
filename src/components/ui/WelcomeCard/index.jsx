
import "./style.css";

function WelcomeCard({ name, message }) {
  return (
    <div className="welcome-card">
      <h2>Hi {name},</h2>
      <p>{message}</p>
    </div>
  );
}

export default WelcomeCard;
