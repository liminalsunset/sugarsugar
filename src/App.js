import './App.css';
import TspsSugar from './TspsSugar';
import TspPerDay from './TspPerDay';
import DaysToYear from './DaysToYear';
import NameGenerator from './NameGenerator';

function App() {
  return (
    <div className="App">
      <header className="header">Sugar Calculators</header>
        <div className="calculators">
          <TspsSugar />
          <TspPerDay />
          <DaysToYear />
        </div>
        <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/added-sugars" class="link">
          AHA Regarding Added Sugars (new tab)
        </a>
        <div>
          <NameGenerator />
        </div>
    </div>
  );
}

export default App;
