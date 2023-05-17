import './App.css';
import MainRoutes from './AllRoutes/MainRoutes';
import Navbar from './Components/Navbar.jsx/Navbar';
import { Text } from '@chakra-ui/react';

function App() {
 
  return (
    <div className="App" style={{ "backgroundColor": "white" }}>
     <Navbar/>
     <MainRoutes/>
     <Text fontSize={"14px"} color={"blue.700"} fontWeight={"bold"}>Powerd by Avitor Cloud</Text>
    </div>
  );
}

export default App;
