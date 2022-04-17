import Login from './login';
import MyJournals from './myjournals.js'
import MainPage from './mainpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/myjournals' element={<MyJournals/>} />
        </Routes>
	  </Router>
    </div>
  );
}

export default App;
