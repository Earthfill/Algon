import { FaCertificate, FaCheck, FaSearch } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ViewModal from "../modals/ViewModal";
import { useState } from "react";

const Details = () => {
  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const openViewModal = () => {
    setModalViewIsOpen(true);
  };

  const closeViewModal = () => {
    setModalViewIsOpen(false);
  };

  const certificateData = [
    { name: 'NORTHERN & SOUTHERN NIGERIA GEO-POLITICAL REGIONAL CLEARANCE CERTIFICATE' },
    { name: 'A SINGLE INTER STATE AND LOCAL GOVERNMENTS NATIONAL COVERAGE CLEARANCE CERTIFICATE' },
    { name: 'A SINGLE INTER STATE STICKER CONSOLIDATED VEHICLE ROAD TAX ANNUAL REVENUE PERMIT STATE COVERAGE CLEARANCE CERTIFICATE' },
    { name: 'A SINGLE INTER LOCAL GOVERNMENTS UNIFIED / CONSOLIDATED CLEARANCE CERTIFICATE' },
    { name: 'SOUTH EAST, SOUTH SOUTH, NIGER DELTA STICKER DISTRIBUTION AGENCY CONSOLIDATED & UNIFIED VEHICLE PERMIT CLEARANCE CERTIFICATE' },
    { name: 'VEHICLE REFORMED MIDYEAR OPERATIONAL PERMIT CLEARANCE CERTIFICATE' },
    { name: 'NIGER DELTA YOUTHS EMPOWERNMENT VEHICLE SUPPORT SCHEME CLEARANCE CERTIFICATE' },
    { name: 'MIDDLE BELT GATE WAY/BY-PASS CLEARANCE CERTIFICATE' },
    { name: 'AMAC LOADING & OFFLOADING CERTIFICATE' },
    { name: 'AMAC MOBILE ADVERT CERTIFICATE' },
    { name: 'AMAC ENVIRONMENTAL / SANITATION / SEWAGE DISPOSAL CERTIFICATE' },
    { name: 'AMAC RADIO / TV CERTIFICATE' },
    { name: 'NFHA NATIONAL COVRAGE CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT HAULAGE PERMIT CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT VEHICLE ROAD TAX CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT ENVIRONMENTAL PROTECTION BOARD VEHICLE GASEOUS EMISSION CLEARANCE CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT PARKS AND GARAGES PERMIT CLEARANCE CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT ECONOMIC DEVELOPMENT LEVY (EDL) CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT MOBILE WASTE BASKET / BAG PERMIT CLEARANCE CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT PERSENGER MAINFEST SCHEME CLEARANCE CERTIFICATE FOR ALL VEHICLE' },
    { name: 'NASARAWA STATE GOVERNMENT OPERATIONAL / CHANGE PERMIT CLEARANCE CERTIFICATE FOR ALL VEHICLE' },
    { name: 'NASARAWA STATE GOVERNMENT JOINT MINISTRY / PARASTALS (JMP) CLEARANCE CERTIFICATE' },
    { name: 'COMMERCE & INDUSTRY MOTORCYCLE, TRICYCLE AND MOTOR VEHICLES YEARLY BUSINESS OPERATIONAL PERMIT CLEARANCE CERTIFICATE FOR ALL VEHICLES' },
    { name: 'LOCAL GOVERNMENT CONSOLIDATED APPROVED TARIFF FOR ALL VEHICLE NATIONWIDE ALL IN ONE NATIONAL EMBLEM / STICKER CLEARACE CERTIFICATE' },
    { name: 'NASARAWA STATE GOVERNMENT NS-HUT (COMMERCIAL & CORPORATE) CLEARANCE CERTIFICATE' },
    { license: 'AMAC DAILY TICKET YEARLY RECEIPT' },
    { license: 'AMAC MOBILE ADVERTS RECEIPT' },
    { license: 'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE REVENUE RECEIPT' },
    { permit: 'NASARAWA STATE GOVERNMENT STATE CARRIAGE PERMIT CLEARACE FOR CERTIFICATION (CFI)' },
    { permit: 'AMAC AMAC HAULAGE PERMIT' },
    { permit: 'AMAC HACKING PERMIT' },
    { permit: 'AMAC GASEOUS EMISSION PERMIT' },
    { permit: 'SIDE STICKER OPERATIONAL PERMIT FOR HEAVY/LIGHT DUTY VEHICLE' },
    { permit: 'NASARAWA STATE GOVERNMENT VEHICLE SIDE STICKER PERMIT' },
    { permit: 'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE MOBILE ADVERT DISPLAY PERMIT' },
    { permit: 'AKWANGA WEST DEVELOPMENT AREA, RINZE - NASARAWA STATE LOADING AND OFF-LOADING PERMIT' },
    { permit: `NASARAWA STATE GOVERNMENT DRIVER AND CONDUCTOR'S BADGE CLEARANCE PERMIT` },
    { permit: 'NASARAWA STATE GOVERNMENT VEHICLE OPERATION PERMIT' },
    { permit: 'NASARAWA STATE GOVERNMENT VEHICLE ROAD HACKNEY PERMIT' },
    { permit: 'NASARAWA STATE GOVERNMENT CONSOLIDATED PERMIT' },
    { permit: 'NASARAWA STATE GOVERNMENT SIGNAGE / ADVERTISEMENT / BRANDING PERMIT' },
    { permit: 'IKUALA NKWU KUBAKWA NKWUOOO (PLANT PALM TREES) SUPPORT THE COMMUNITIES GOVT. COUNCIL STICKER PERMIT' },
    { permit: 'NFHA NATIONAL FLEETS HAULAGE PERMIT' },
    { permit: 'NOP NORTHERN & SOUTHERN NIGERIA ONENESS CLEARANCE EMBLEM / STICKERS PERMIT' },
    { permit: 'INTER STATE & LOCAL GOVERNMENT CONSOLIDATED VEHICLE EMBLEM PARK & PARKING PERMIT' },
    { permit: 'NASARAWA STATE GOVERNMENT 3 IN ONE CLEARACE NS PIMSS' },
    { permit: 'NULGE NATIONAL COVRAGE CLEARANCE STICKER' },
    { permit: 'A SINGLE CONSOLIDATED INTER-STATE STICKER ON ROAD TAXES ON MOTOR VEHICLES WITHIN NIGERIA NATIONAL COVERAGE CLEARANCE STICKER' },
    { permit: 'NASARAWA STATE GOVERNMENT ADDEDENDIUM - CONDICIL' },
    { permit: 'NASARAWA STATE GOVERNMENT FOT / BOT / MOT' },
    { permit: 'SOUTH EAST, SOUTH SOUTH NIGER DELTA YOUTH DEVELOPMENT & EMPOWERNMENT VEHICLE SUPPORTIVE SCHEME' },
    { permit: 'A SINGLE INTER LOCAL GOVERNMENTS UNIFIED / CONSOLIDATED VEHICLE ANNUAL PERMIT NATIONAL COVERAGE CLEARANCE STICKER' },
    { permit: 'LOCAL GOVERNMENT CONSOLIDATED APPROVE TARIFF FOR ALL VEHICLES EMBLEM APPROVED FOR THE VEHICLE' }
  ];

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCertificates = certificateData.filter((certificate) => {
    const lowerSearchInput = searchInput.toLowerCase();
    const lowerName = certificate.name?.toLowerCase() || '';
    const lowerLicense = certificate.license?.toLowerCase() || '';
    const lowerPermit = certificate.permit?.toLowerCase() || '';
  
    return (
      lowerName.includes(lowerSearchInput) ||
      lowerLicense.includes(lowerSearchInput) ||
      lowerPermit.includes(lowerSearchInput)
    );
  });  

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
        <div className="text-xl text-red font-bold">Vehicle Documents</div>
        <div className="pt-5 mb-5">
          <input 
            className="border h-10 w-11/12 px-5 rounded-3xl focus:outline-none" 
            placeholder="Search for certificates"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <div className="border bg-royal-red text-white p-2 absolute right-9 top-16 mt-1 -mr-1 rounded-full">
            <FaSearch />
          </div>
        </div>
        {filteredCertificates.map((certificate, index) => (
          <Card key={index} open={openViewModal} name={certificate.name} license={certificate.license} permit={certificate.permit} />
        ))}
        <div>
      </div>
      <ViewModal
        isOpen={modalViewIsOpen} 
        onRequestClose={closeViewModal}
      >
        <div>
          <img className="pl-1 pt-1" src="/algoncert.jpg" alt="" />
        </div>
      </ViewModal>
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
            <div className="text-half-tra
            nsparent border-b pb-3">Golf</div>
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