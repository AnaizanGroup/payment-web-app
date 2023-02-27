import logo from './logo.svg';
import "./globals/globals.scss"
import "./globals/variables.scss"
import ROUTES from './router';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="parent-body">
      <AuthProvider>
        <ROUTES />
      </AuthProvider>
    </div>
  );
}

export default App;
