import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

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
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
