import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checker = () => {
  return (
    <div className="bg-[url('/updatedcar.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-royal-red bg-opacity-90 text-center text-white xl:pb-14 pb-24">
        <div className="xl:text-5xl xl:pt-10 px-16 pt-14 pb-3 font-bold text-3xl">Check Registration Status</div>
        <div className="xl:text-lg px-10 pb-7 font-semibold text-[13px]">Enter the Vehicle Registration Number to see the registration status</div>
        <div className="xl:w-[600px] xl:mx-auto rounded-md mt-20 mx-14 bg-pale-red">
          <form action="" className="xl:p-10 p-6 flex flex-col gap-6">
            <input placeholder="ENTER REGISTRATION NUMBER" className="xl:outline-none xl:pl-2 rounded-md py-2 text-black placeholder:text-slate-500 placeholder:text-xs placeholder:font-bolder placeholder:text-center outline-orange-400 px-2" />
            <Link to='/details' className="xl:cursor-pointer hover:scale-105 hover:transform transition:transform duration-300 flex justify-center bg-green-700 rounded-md font-extrabold p-2"> <FaSearch /></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checker