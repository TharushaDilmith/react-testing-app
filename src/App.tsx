import './App.css';
import Application from './components/application/Application';
import Users from './components/user/user';

function App() {
  return (
    <div className="App">
      <Users users={["John Doe", "Jane Doe"]} />
      <Application />
    </div>
  );
}

export default App;
