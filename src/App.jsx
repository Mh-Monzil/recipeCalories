import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";

const App = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
};

export default App;