import { useLocation } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <>
      {!isDashboard && <Header />}

      <AppRoutes />

      {!isDashboard && <Footer />}
    </>
  );
}

export default App;