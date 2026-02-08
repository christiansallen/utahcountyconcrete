import Header from "./components/Header";
import HeroTitle from "./components/HeroTitle";
import EstimateCalculator from "./components/EstimateCalculator";
import FourCs from "./components/FourCs";
import Services from "./components/Services";

function App() {
  return (
    <div className="max-w-[402px] mx-auto min-h-screen bg-bg flex flex-col gap-12 py-4">
      {/* Group 1: Header + Hero + Calculator */}
      <div className="flex flex-col gap-8">
        <Header />
        <HeroTitle />
        <EstimateCalculator />
      </div>

      {/* Group 2: Our 4 C's */}
      <FourCs />

      {/* Group 3: Our Services */}
      <Services />
    </div>
  );
}

export default App;
