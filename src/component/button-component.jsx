const ButtonComponent = ({addedFeature}) => {
  return (
    <div className="w-[45rem] flex flex-row justify-between">
      <button className="px-[0.9rem] py-[0.5rem] bg-[#646ff0] text-white rounded-[5px]" onClick={addedFeature}>Add Task</button>
      <select name="" className="w-[9rem] pl-2 bg-[#cccdde] rounded-[5px]">
      <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default ButtonComponent;
