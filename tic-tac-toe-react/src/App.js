import './App.css';

import { Box } from './components/Box';

function App() {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
  return (
    <div className="App">
      <Box value="X" onclick={null}/>
    </div>
  );
}

export default App;
