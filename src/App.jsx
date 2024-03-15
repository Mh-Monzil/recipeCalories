import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default App;