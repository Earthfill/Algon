import { FaCertificate, FaCheck, FaSearch } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
import Footer from "../components/Footer";
import Certificates from "../components/Certificates";

const Details = () => {
  return (
    <div className="overflow-hidden">
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
      <div className="pl-6 py-4">
        <div className="text-xl text-red font-bold">Vehicle Certificates</div>
        <div className="pt-5 mb-5">
          <input className="border h-10 w-11/12 px-5 rounded-3xl focus:outline-none" placeholder="Search for certificates" type="text" />
          <div className="border bg-royal-red text-white p-2 absolute right-9 top-16 mt-1 -mr-1 rounded-full">
            <FaSearch />
          </div>
        </div>
        
        <div>
          <Certificates name={'NORTHERN & SOUTHERN NIGERIA GEO-POLITICAL REGIONAL CLEARANCE CERTIFCATE'} />
          <Certificates name={'A SINGLE INTER STATE AND LOCAL GOVERNMENTS NATIONAL COVERAGE CLEARANCE CERTIFICATE'} />
          <Certificates name={'A SINGLE INTER STATE STICKER CONSOLIDATED VEHICLE ROAD TAX ANNUAL REVENUE PERMIT STATE COVERAGE CLEARANCE CERTIFICATE'} />
          <Certificates name={'A SINGLE INTER LOCAL GOVERNMENTS UNIFIED / CONSOLIDATED CLEARANCE CERTIFICATE'} />
          <Certificates name={'AMAC DAILY TICKET YEARLY RECEIPT'} />
          <Certificates name={'SOUTH EAST, SOUTH SOUTH, NIGER DELTA STICKER DISTRIBUTION AGENCY CONSOLIDATED & UNIFIED VEHICLE PERMIT CLEARANCE CERTIFICATE'} />
          <Certificates name={'VEHICLE REFORMED MIDYEAR OPERATIONAL PERMIT CLEARANCE CERTIFICATE'} />
          <Certificates name={'NIGER DELTA YOUTHS EMPOWERNMENT VEHICLE SUPPORT SCHEME CLEARANCE CERTIFICATE'} />
          <Certificates name={'MIDDLE BELT GATE WAY/BY-PASS CLEARANCE CERTIFICATE'} />
          <Certificates name={'NULGE NATIONAL COVRAGE CLEARANCE STICKER'} />
          <Certificates name={'A SINGLE CONSOLIDATED INTER-STATE STICKER ON ROAD TAXES ON MOTOR VEHICLES WITHIN NIGERIA NATIONAL COVERAGE CLEARANCE STICKER'} />
          <Certificates name={'AMAC MOBILE ADVERTS RECEIPT'} />
          <Certificates name={'AMAC LOADING & OFFLOADING CERTIFICATE'} />
          <Certificates name={'AMAC AMAC HAULAGE PERMIT'} />
          <Certificates name={'AMAC MOBILE ADVERT CERTIFICATE'} />
          <Certificates name={'AMAC ENVIRONMENTAL / SANITATION / SEWAGE DISPOSAL CERTIFICATE'} />
          <Certificates name={'AMAC HACKING PERMIT'} />
          <Certificates name={'AMAC GASEOUS EMISSION PERMIT'} />
          <Certificates name={'AMAC RADIO / TV CERTIFICATE'} />
          <Certificates name={'NFHA NATIONAL COVRAGE CERTIFICATE'} />
          <Certificates name={'SIDE STICKER OPERATIONAL PERMIT FOR HEAVY/LIGHT DUTY VEHICLE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT VEHICLE SIDE STICKER PERMIT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT HAULAGE PERMIT CERTIFICATE'} />
          <Certificates name={'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE MOBILE ADVERT DISPLAY PERMIT'} />
          <Certificates name={'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE REVENUE RECEIPT'} />
          <Certificates name={'LOCAL GOVERNMENT CONSOLIDATED APPROVE TARIFF FOR ALL VEHICLES EMBLEM APPROVED FOR THE VEHICLE'} />
          <Certificates name={'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE LOADING AND OFF-LOADING PERMIT'} />
          <Certificates name={`NASARAWA STATE GOVERNMENT DRIVER AND CONDUCTOR'S BADGE CLEARANCE PERMIT`} />
          <Certificates name={'NASARAWA STATE GOVERNMENT VEHICLE OPERATION PERMIT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT VEHICLE ROAD HACKNEY PERMIT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT CONSOLIDATED PERMIT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT VEHICLE ROAD TAX CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT ENVIRONMENTAL PROTECTION BOARD VEHICLE GASEOUS EMISSION CLEARANCE CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT PARKS AND GARAGES PERMIT CLEARANCE CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT ADDEDENDIUM - CONDICIL'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT FOT / BOT / MOT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT ECONOMIC DEVELOPMENT LEVY (EDL) CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT SIGNAGE / ADVERTISEMENT / BRANDING PERMIT'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT MOBILE WASTE BASKET / BAG PERMIT CLEARANCE CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT PERSENGER MAINFEST SCHEME CLEARANCE CERTIFCATE FOR ALL VEHICLE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT OPERATIONAL / CHANGE PERMIT CLEARANCE CERTIFCATE FOR ALL VEHICLE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT JOINT MINISTRY / PARASTALS (JMP) CLEARANCE CERTIFCATE'} />
          <Certificates name={'SOUTH EAST, SOUTH SOUTH NIGER DELTA YOUTH DEVELOPMENT & EMPOWERNMENT VEHICLE SUPPORTIVE SCHEME'} />
          <Certificates name={'IKUALA NKWU KUBAKWA NKWUOOO (PLANT PALM TREES) SUPPORT THE COMMUNITIES GOVT. COUNCIL STICKER PERMIT'} />
          <Certificates name={'NFHA NATIONAL FLEETS HAULAGE PERMIT'} />
          <Certificates name={'NOP NORTHERN & SOUTHERN NIGERIA ONENESS CLEARANCE EMBLEM / STICKERS PERMIT'} />
          <Certificates name={'COMMERCE & INDUSTRY MOTORCYCLE, TRICYCLE AND MOTOR VEHICLES YEARLY BUSINESS OPERATIONAL PERMIT CLEARANCE CERTIFCATE FOR ALL VEHICLES'} />
          <Certificates name={'INTER STATE & LOCAL GOVERNMENT CONSOLIDATED VEHICLE EMBLEM PARK & PARKING PERMIT'} />
          <Certificates name={'LOCAL GOVERNMENT CONSOLIDATED APPROVED TARIFF FOR ALL VEHICLE NATIONWIDE ALL IN ONE NATIONAL EMBLEM / STICKER CLEARACE CERTIFICATE'} />
          <Certificates name={'A SINGLE INTER LOCAL GOVERNMENTS UNIFIED / CONSOLIDATED VEHICLE ANNUAL PERMIT NATIONAL COVERAGE CLEARANCE STICKER'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT NS-HUT (COMMERCIAL & CORPORATE) CLEARANCE CERTIFCATE'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT STATE CARRIAGE PERMIT CLEARACE FOR CERTIFICATION (CFI)'} />
          <Certificates name={'NASARAWA STATE GOVERNMENT 3 IN ONE CLEARACE NS PIMSS'} />
        </div>
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
        
        {/* <div className="px-3">
          <table className="min-w-full bg-white rounded-md border-gray-300">
            <tbody className="whitespace-nowrap">
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">REG. NUMBER</th>
                <td className="text-sm font-slate-600">KUJ244AR</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">VEHICLE MAKE</th>
                <td className="text-sm font-slate-600">Volkswagen</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">VEHICLE MODEL</th>
                <td className="text-sm font-slate-600">Golf</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">VEHICLE COLOR</th>
                <td className="text-sm font-slate-600">Black</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">ENGINE NUMBER</th>
                <td className="text-sm font-slate-600">ADZ340800</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">CHASIS NUMBER</th>
                <td className="text-sm font-slate-600">WVWZZZ1HZTW191038</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">CONTACT INFO</th>
                <td className="text-sm font-slate-600">+234 805 658 4208</td>
              </tr>
              <tr className="border-b">
                <th className="py-5 px-3 text-red text-left">OWNER NAME</th>
                <td className="text-sm font-slate-600">Mr. O. Emmanuel</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  )
}

export default Details