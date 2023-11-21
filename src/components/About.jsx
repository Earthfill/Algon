import { FaCheck, FaSearchengin } from "react-icons/fa"
import { GiSandsOfTime } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <div className="text-red text-center">
        <div className="flex gap-3 justify-center py-5">
          <span className="border-t mt-4 border-solid border-red w-4 transform rotate-45"></span>
          <span className="border-l border-solid border-red h-6"></span>
          <span className="border-t mt-4 border-solid border-red w-4 transform -rotate-45"></span>
        </div>
        <div className="font-bold text-2xl">ABOUT THIS SERVICE</div>
        <div className="flex gap-3 justify-center py-5">
          <span className="border-t mb-4 border-solid border-red w-4 transform -rotate-45"></span>
          <span className="border-l -mt-2 border-solid border-red h-6"></span>
          <span className="border-t mb-4 border-solid border-red w-4 transform rotate-45"></span>
        </div>
      </div>
      <div className="px-12 text-sm text-slate-600">
        <div className="text-center">Check the registration status of your large vehicle. Simply input your vehicle registration number in the form above or scan the QR code on the vehicle.</div>
        <div className="flex gap-4 text-slate-600 pt-7">
          <span className="text-red text-4xl"><FaSearchengin /></span>
          <span className="justify-start">Searches the vehicle registration number in the database</span>
        </div>
        <div className="flex gap-4 text-slate-600 pt-7">
          <span className="text-red text-4xl"><FaCheck /></span>
          <span className="justify-start">Shows the vehicles registration status</span>
        </div>
        <div className="flex gap-4 text-slate-600 pt-7">
          <span className="text-red text-4xl"><GiSandsOfTime /></span>
          <span className="justify-start">Works 24 hours a day, 7 days a week. Even on holidays!</span>
        </div>
      </div>
    </div>
  )
}

export default About