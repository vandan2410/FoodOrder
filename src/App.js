import React, { useEffect } from "react";
import {  Route , Routes} from "react-router-dom";
import { Header,CreateContainer, MainContainer, MenuContainer,Footer } from './Components';

import {AnimatePresence} from "framer-motion";
import { useStateValue } from "./context/StateProvide";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-white ">
        <Header/>
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
              <Route path="/*" element={<MainContainer />}/>
              <Route path="/createItem" element={<CreateContainer />}/>
              <Route path="/menu" element={<MenuContainer/>}/>
          </Routes>
        </main>
       
          
        
        
          
        
      </div>
    </AnimatePresence>
  );
}

export default App;
