
import './App.css';
import Navbar from './Components/Navbar'
import HomeContent from './Components/HomeContent';
import Category from './Components/Category'


function App() {
  return (
    <div className="App h-full w-full p-0 m-0">
      <div className='home h-full w-full'>
        <Navbar/>
        <HomeContent/>
      </div>
      <div className='menu min-h-screen w-full ' >
        <Category/>
      </div>
    </div>
  );
}

export default App;
