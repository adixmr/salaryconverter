import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <>
    <Navbar />
    <Main from='IN' to='US' amount='100000'/>
    <Footer />
    </>
  );
}

export default App;
