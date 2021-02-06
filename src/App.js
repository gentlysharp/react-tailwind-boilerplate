import logo from './logo.svg';
import './App.css';
import TestButton from './components/buttons/Button/TestButton';
import SearchInput from './components/inputs/SearchInput/SearchInput';
import Profile from './components/cards/Profile/Profile';

function App() {
  return (
    <div className="App">
      <TestButton />
      <SearchInput />
      <Profile username="Han" name="Hello" />
    </div>
  );
}

export default App;
