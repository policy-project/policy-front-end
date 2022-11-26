import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Loader } from './components/Loader';
import { Policies } from './components/Policies';

function App() {
  return (
    <Box className="App">
      <Loader/>
      <Policies/>
    </Box>
  );
}

export default App;
