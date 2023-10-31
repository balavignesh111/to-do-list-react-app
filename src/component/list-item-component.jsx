import {BiEdit, BiSolidTrashAlt} from "react-icons/bi"

const UnorderedList = ({data}) => {
  return ( 
    <ul className="w-[45rem] bg-[#ecedf6] px-4 py-2 rounded-[5px] flex flex-col justify-center items-center gap-2 text-[#585858]">
      <li className="w-[8rem] px-4 py-2 bg-[#dedfe1] rounded-[5px] text-center">No Todos</li>
      <li className="w-[100%] px-4 py-2 bg-[#ffffff] rounded-[5px] flex flex-row justify-between">
        <div className="flex flex-row gap-4 justify-center items-center">
          <input type="checkbox" id="inp-radio"/>
          <label htmlFor="inp-radio" className="text-black">To do</label>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <BiEdit></BiEdit>
          <BiSolidTrashAlt></BiSolidTrashAlt>
        </div>
      </li>
    </ul>
   );
}
 
export default UnorderedList;