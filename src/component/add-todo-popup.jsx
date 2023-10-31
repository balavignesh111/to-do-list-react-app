import {AiOutlineClose} from "react-icons/ai"

const Popup = ({closeFeature, added}) => {

  return (
  <div className={`w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.6)] absolute top-0 z-[1] flex flex-col place-items-center place-content-center ${added ? 'flex' : 'hidden'}`}>
    <div className="w-[30rem] px-[1rem] py-[1.5rem] bg-[#ecedf6] flex flex-col gap-6 relative rounded-[8px]">
      <div className={`bg-[#ecedf6] hover:bg-[rgb(255,0,0)] hover:text-white absolute right-0 top-[-2.5rem] w-[2rem] h-[2rem] flex flex-col justify-center items-center text-[1.5rem] cursor-pointer rounded-[5px]`} onClick={closeFeature}>
        <AiOutlineClose></AiOutlineClose>
      </div>
      <h4 className="text-[1.25rem] text-[#646681] font-[800]">
        Add TODO
      </h4>
      <div className="flex flex-col gap-2">
        <label htmlFor="input-title">Title</label>
        <input type="text" id="input-title" className="w-[100%] py-[0.5rem]"/>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="input-title">Status</label>
        <select className="w-[100%] py-[0.5rem] bg-white pl-4">
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="flex flex-row gap-4">
        <button className="px-4 py-2 rounded-[5px] bg-[#646ff0] text-[white]">Add Task</button>
        <button className="px-4 py-2 rounded-[5px] bg-[#cccdde] text-[#646681]">Cancel</button>
      </div>
    </div>
  </div>
  );
}
 
export default Popup;