import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hawaii Awaits!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;