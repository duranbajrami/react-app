import { useContext, useState } from "react";
import { TravelContext } from "../context/TravelContext";
import { Link } from "react-router-dom";
import TravelList from "./TravelList";




function AddTravel(){
    const {travels, setTravels} = useContext(TravelContext);

    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [group, setGroup] = useState("");
  

    const addTravel = () => {
    const obj = {
      destination: destination,
      date: date,
      group: group
    };

    setTravels([...travels, obj]);
  }

  
    return(
        <div class="relative flex flex-col rounded-xl bg-transparent">
  <h4 class="block text-xl font-medium text-slate-800">
    Add Travel
  </h4>
  <p class="text-slate-500 font-light">
    NO MONEY, NO TRAVEL!
  </p>
  <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-1 flex flex-col gap-6">
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
          Destination
        </label>
        <input
        onChange={(e) => setDestination(e.target.value)}
         type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Destination" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
        Date
        </label>
        <input
       onChange={(e) => setDate(e.target.value)}
        type="date" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Date" />
      </div>
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-600">
          Group
        </label>
        <input
       onChange={(e) => setGroup(e.target.value)}
        type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Group" />
      </div>
    </div>
    <button
    onClick={addTravel}
    class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <Link to="/travelList">Add Travel</Link>
    </button>
    </form>
  </div>
    )
}

export default AddTravel;