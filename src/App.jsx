import { useState } from 'react'
import Header from './component/header.jsx';
import ButtonComponent from './component/button-component.jsx';
import UnorderedList from "./component/list-item-component.jsx";
import Popup from "./component/add-todo-popup.jsx";
import data from "./constant/index.js"

function App() {
  // title
  const [title,setTitle] = useState('');
  // status
  const [status,setStatus] = useState('Incomplete');
  // list
  const [list,SetList] = useState([]);
  // editID
  const [editItem, setEditItem] = useState({});
  const [isEdit,setIsEdit] = useState(false);
  // filter Btn
  const [filter,setFilter] = useState("all")

  // function to add task
  function addTask(title,status,isEdit){
    if(isEdit){
      SetList(()=>{
        return list.map((ele,ind)=>{
          if(ele.id === editItem.id){
            return {
              title,
              status,
              id: editItem.id
            }
          }else{
            return ele;
          }
        })
      })
      setEditItem({});
      setIsEdit(false)
    }else{
      if(title && status){
        let obj = {
          id: Date.now(),
          title,
          status
        }
        SetList((prev)=>[...prev,obj]);
      }else{
        alert('Input is missing');
      }
    }
  }

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
        filter = {filter}
        setFilter = {setFilter}
      ></ButtonComponent>
      <UnorderedList
        list = {list}
        setterStatus = {setStatus}
        SetList = {SetList}
        editItem = {editItem}
        setEditItem = {setEditItem}
        setIsEdit = {setIsEdit}
        isEdit = {isEdit}
        openPopUp = {addPopup}
        filter = {filter}
      ></UnorderedList>
      <Popup
        closeFeature = {closePopup}
        added = {added}
        title = {title}
        setTitle = {setTitle}
        status = {status}
        setStatus = {setStatus}
        SetList = {SetList}
        addTask = {addTask}
        isEdit = {isEdit}
        editItem = {editItem}
        setIsEdit = {setIsEdit}
      ></Popup>
    </div>
  )
}

export default App
