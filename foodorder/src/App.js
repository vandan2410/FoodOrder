
import './App.css';
import Navbar from './Components/Navbar'
import HomeContent from './Components/HomeContent';

function App() {
  return (
    <div className="App bg-screen w-full p-0 m-0">
      <div className='home h-screen w-full'>
        <Navbar/>
        <HomeContent/>
      </div>
    </div>
  );
}

export default App;
