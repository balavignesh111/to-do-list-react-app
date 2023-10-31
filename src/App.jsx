import { useState } from 'react'
import Header from './component/header.jsx';
import ButtonComponent from './component/button-component.jsx';
import UnorderedList from "./component/list-item-component.jsx";
import Popup from "./component/add-todo-popup.jsx";
import data from "./constant/index.js"

function App() {
  // to show and hide the popup
  const [added, isAdded] = useState(false);

  // function
  const addPopup = ()=>{
    isAdded(()=> true);
  }

  const closePopup = ()=>{
    isAdded(()=> false);
  }

  return (
    <div className="bg-[#f8f8ff] w-full h-[100vh] flex flex-col place-items-center pt-4 gap-4">
      <Header></Header>
      <ButtonComponent
        addedFeature = {addPopup}
      ></ButtonComponent>
      <UnorderedList
        data={data}
      ></UnorderedList>
      <Popup
        closeFeature = {closePopup}
        added = {added}
      ></Popup>
    </div>
  )
}

export default App
