import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box width="400px" sx={{width: '1350px'}} lg={{width: '1500px'}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/execise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
