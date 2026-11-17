import "./style.css";

function DashboardInfoCard({
  title,
  description,
  variant = "default",
  children,
}) {
  return (
    <div className={`dashboard-info-card ${variant}`}>
      <h2>{title}</h2>
      <p>{description}</p>

      {children && (
        <div className="dashboard-info-actions">
          {children}
        </div>
      )}
    </div>
  );
}

export default DashboardInfoCard;