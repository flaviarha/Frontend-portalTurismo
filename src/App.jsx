/*biblioteca react-router-dom*/
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
/*importando a pagina principal do projeto*/
import Home from "./pages/home";
import ServicePage from "./pages/servicepage";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage"; 
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Router>
      <Routes>
        {/*rota rais do projeto e estrutura padrao de escrita*/}
        <Route path="/" element={<Home />} />
        <Route path= "/service" element={<ServicePage />} />
        <Route path= "/contact" element= {<ContactPage/>}/>
        <Route path= "/about" element= {<AboutPage/>}/>
        <Route path= "/login" element= {<LoginPage/>}/>
        <Route path= "/register" element= {<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
