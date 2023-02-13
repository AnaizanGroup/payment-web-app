import logo from './logo.svg';
import "./globals/globals.scss"
import "./globals/variables.scss"
import ROUTES from './router';

function App() {
  return (
    <div className="parent-body">
      <ROUTES />
    </div>
  );
}

export default App;
