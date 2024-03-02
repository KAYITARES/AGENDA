import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Speakers from './components/speakers';
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/speaker' element = {<Speakers/>}></Route>
          </Routes>
        </Router>
      </>
    
  );
}

export default App;
