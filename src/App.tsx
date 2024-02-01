import './App.css';
import Application from './components/application/Application';
import Users from './components/user/user';

function App() {
  return (
    <div className="App">
      <Application />
      <Users users={["John Doe", "Jane Doe"]} />
    </div>
  );
}

export default App;
