import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header} from "../component/Header/Header";
import {Footer} from "../component/Footer/Footer";
import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";
import {Category} from "../pages/Category";
import {Recipe} from "../pages/Recipe";

function App() {
  return (
    <>
    <Router>
      <Header />
      <main className="container content">
              <Routes>
                  <Route path="/" element={<Home/>} ></Route>
                  <Route path="/category/:name" element={<Category/>}></Route>
                  <Route path="/mealItem/:id" element={<Recipe/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
