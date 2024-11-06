import AppRoutes from "./routes/routes";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";

const App = () => {
  return (

    <div className='containerOne'>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;
