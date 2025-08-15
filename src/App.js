import logo from './logo.svg';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
      <LoginForm/>
    </div>
  );
}

export default App;
