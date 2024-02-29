import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './pages/welcome';
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
          </Routes>
        </Router>
      </>
    
  );
}

export default App;
