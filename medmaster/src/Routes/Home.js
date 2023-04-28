import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Main from '../Components/Main';

function Home() {
  return (
    <div className = "flex flex-col bg-home-bg from-cyan-500 to-blue-500">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Home;