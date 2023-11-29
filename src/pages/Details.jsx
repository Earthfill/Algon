import { FaCheck } from "react-icons/fa"
import { IoClose } from "react-icons/io5";

const Details = () => {
  return (
    <div className="bg-royal-red h-screen overflow-hidden">
      {/* <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-green-700 text-8xl pb-5"><FaCheck /></div>
        <div>This vehicle is registered!</div>
        <button className="bg-green-700 px-4 py-2 text-white mt-20">OK</button>
      </div> */}
      {/* <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-red text-8xl pb-5"><IoClose /></div>
        <div>This vehicle is not registered!</div>
        <button className="bg-red px-4 py-2 text-white mt-20">CLOSE</button>
      </div> */}
      <div>
        <div className="pl-3 text-2xl text-white font-bold py-6">Vehicle Details</div>
        {/* <div className="flex">
          <div className="flex flex-col gap-5 pl-10 pt-10 pb-96">
            <div className="text-red font-bold border-b pb-3">REGISTRATION NUMBER</div>
            <div className="text-red font-bold border-b pb-3">VEHICLE MAKE</div>
            <div className="text-red font-bold border-b pb-3">VEHICLE MODEL</div>
            <div className="text-red font-bold border-b pb-3">VEHICLE COLOR</div>
            <div className="text-red font-bold border-b pb-3">ENGINE NUMBER</div>
            <div className="text-red font-bold border-b pb-3">CHASIS NUMBER</div>
            <div className="text-red font-bold border-b pb-3">CONTACT INFORMATION</div>
            <div className="text-red font-bold pb-3">OWNER NAME</div>
          </div>
          <div className="flex flex-col gap-5 pr-10 pt-10 pb-96">
            <div className="text-half-transparent border-b pb-3">KUJ244AR</div>
            <div className="text-half-transparent border-b pb-3">Volkswagen</div>
            <div className="text-half-transparent border-b pb-3">Golf</div>
            <div className="text-half-transparent border-b pb-3">Black</div>
            <div className="text-half-transparent border-b pb-3">ADZ340800</div>
            <div className="text-half-transparent border-b pb-3">WVWZZZ1HZTW191038</div>
            <div className="text-half-transparent border-b pb-3">+2348056584208</div>
            <div className="text-half-transparent border-b pb-3">Mr. O. Vincent</div>
          </div>
        </div> */}
        <div className="px-3">
          <table className="min-w-full bg-white rounded-md border-gray-300">
            <tbody className="whitespace-nowrap">
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">REG. NUMBER</th>
                <td className="text-sm">KUJ244AR</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">VEHICLE MAKE</th>
                <td className="text-sm">Volkswagen</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">VEHICLE MODEL</th>
                <td className="text-sm">Golf</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">VEHICLE COLOR</th>
                <td className="text-sm">Black</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">ENGINE NUMBER</th>
                <td className="text-sm">ADZ340800</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">CHASIS NUMBER</th>
                <td className="text-sm">WVWZZZ1HZTW191038</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">CONTACT INFO</th>
                <td className="text-sm">+2348056584208</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-4 text-red text-left">OWNER NAME</th>
                <td className="text-sm">Mr. O. Emmanuel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Details