import {BiEdit, BiSolidTrashAlt} from "react-icons/bi"

const UnorderedList = ({list,setterStatus,SetList,setEditItem,editItem,setIsEdit,isEdit,openPopUp,filter}) => {

  // deleteFunc
  const deleteItemHandler = (id)=>{
    let taskList = list.filter((ele)=> ele.id !== id)
    SetList(()=>{
      return (taskList !== undefined ? taskList : [])
    })
  }

  // edit
  const editItemHandler = (id)=>{
    let editTaskItem = list.find((ele)=> ele.id === id);
    setEditItem(()=>{
      return editTaskItem;
    })
    setIsEdit(true);
    openPopUp();
  }


  return ( 
    <ul className="w-[45rem] bg-[#ecedf6] px-4 py-2 rounded-[5px] flex flex-col justify-center items-center gap-2 text-[#585858]">
      {
        (list.length > 0 && list != undefined) ? 
        (
          (list.map((listItem,index)=>{
            if(filter === "all"){
              return(
                <li 
                className="w-[100%] px-4 py-2 bg-[#ffffff] rounded-[5px] flex flex-row justify-between" key={index}>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    {/* <input 
                      type="checkbox" 
                      id={listItem.id}
                      value={listItem.status}
                      onClick={()=>statusHandler(listItem.id)}
                      /> */}
                    <label htmlFor={listItem.id} className={`text-black ${(listItem.status === "completed") ? "line-through" : ""}`}>{listItem.title}</label>
                  </div>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <button onClick={()=> (editItemHandler(listItem.id))}>
                      <BiEdit></BiEdit>
                    </button>
                    <button onClick={()=> deleteItemHandler(listItem.id)}>
                      <BiSolidTrashAlt></BiSolidTrashAlt>
                    </button>
                  </div>
                </li>
              )
            }else if(filter === listItem.status){
              return(
                <li className="w-[100%] px-4 py-2 bg-[#ffffff] rounded-[5px] flex flex-row justify-between" key={index}>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    {/* <input 
                      type="checkbox" 
                      id={listItem.id}
                      value={listItem.status}
                      /> */}
                    <label htmlFor={listItem.id} className={`text-black ${(listItem.status === "completed") ? "line-through" : ""}`}>{listItem.title}</label>
                  </div>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <button onClick={()=> (editItemHandler(listItem.id))}>
                      <BiEdit></BiEdit>
                    </button>
                    <button onClick={()=> deleteItemHandler(listItem.id)}>
                      <BiSolidTrashAlt></BiSolidTrashAlt>
                    </button>
                  </div>
                </li>
              )
            }
          }))
          
        ): 
        (
          <li className="w-[8rem] px-4 py-2 bg-[#dedfe1] rounded-[5px] text-center">No Todos</li>
        )
      }
      
      
    </ul>
   );
}
 
export default UnorderedList;