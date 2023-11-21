import { FaSearch } from "react-icons/fa";

const Checker = () => {
  return (
    <div className="bg-[url('/updatedcar.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-royal-red bg-opacity-90 text-center text-white pb-24">
        <div className="px-16 pt-14 pb-3 font-bold text-3xl">Check Registration Status</div>
        <div className="px-10 pb-7 font-semibold text-[13px]">Enter Car Registration Number to see registration status</div>
        <div className="rounded-md mt-20 mx-14 bg-pale-red">
          <form action="" className="p-6 flex flex-col gap-6">
            <input placeholder="ENTER REGISTRATION NUMBER" className="rounded-md py-2 text-black placeholder:text-slate-500 placeholder:text-sm placeholder:font-bolder placeholder:text-center" />
            <button className="flex justify-center bg-green-700 rounded-md font-extrabold p-2"> <FaSearch /></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checker