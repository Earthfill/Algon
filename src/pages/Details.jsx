import { useState } from "react";
import { certificateData } from "../data/cerificateData";
import Card from "../components/Card";
import ViewModal from "../modals/ViewModal";
import { FaFilter } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const Details = () => {
  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const openViewModal = () => {
    setModalViewIsOpen(true);
  };

  const closeViewModal = () => {
    setModalViewIsOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleStatusFilter = () => {
    setSelectedStatus(!selectedStatus);
  };

  const handleClearFilter = () => {
    setSelectedStatus(null);
  };

  const filteredCertificates = certificateData.filter((certificate) => {
    const lowerSearchInput = searchInput.toLowerCase();
    const lowerName = certificate.name?.toLowerCase() || '';
    const lowerLicense = certificate.license?.toLowerCase() || '';
    const lowerPermit = certificate.permit?.toLowerCase() || '';
  
    const matchesSearchInput =
      lowerName.includes(lowerSearchInput) ||
      lowerLicense.includes(lowerSearchInput) ||
      lowerPermit.includes(lowerSearchInput);

    const matchesStatus = selectedStatus === null || certificate.registered === selectedStatus;

    return matchesSearchInput && matchesStatus;
  });

  return (
    <div className="xl:flex xl:justify-center xl:pl-32 2xl:pl-96 overflow-hidden">
      <div className="pl-6 py-4">
        <div className="text-xl text-red font-bold">Vehicle Documents</div>
        <div className="flex gap-3 py-5">
          <div>
            <input 
              className="border h-10 w-[280px] md:w-[450px] lg:w-[360px] 2xl:w-[730px] px-5 rounded-3xl focus:outline-none" 
              placeholder="Search for certificates"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="flex items-center cursor-pointer">
            <div onClick={() => setFilter(!filter)}>
              <FaFilter />
            </div>
            {filter && 
              <div className="border bg-white absolute xl:right-auto right-6 top-16 text-sm p-3 mt-9 cursor-pointer">
                <ul>
                  <li className="hover:bg-gray-100 py-2 px-3" onClick={() => handleStatusFilter()}>{selectedStatus ? 'Unregistered certs' : 'Registered certs'}</li>
                </ul>
              </div>
            }
          </div>  
        </div>

        {filteredCertificates.map((certificate, index) => (
          <Card 
            key={index} 
            open={openViewModal} 
            name={certificate.name} 
            license={certificate.license} 
            permit={certificate.permit} 
            price={certificate.price}
            status={certificate.registered}
          />
        ))}
        <ViewModal
          isOpen={modalViewIsOpen} 
          onRequestClose={closeViewModal}
        >
          <div>
            <img className="pl-1 pt-1" src="/algoncert.jpg" alt="" />
          </div>
        </ViewModal>
      </div>

      {selectedStatus !== null &&
        <div className="fixed xl:hidden cursor-pointer top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 border rounded-3xl inline-flex items-center justify-center gap-2 text-red" onClick={handleClearFilter}>
          <div><ImCancelCircle /></div>
          <div>Clear Filter</div>
        </div>
      }
    </div>
  )
}

export default Details