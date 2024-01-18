import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
