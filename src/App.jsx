import { ToastContainer } from "react-toastify";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";

const App = () => {
  return (
    <div className="max-w-[1320px] mx-auto p-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;