import { useEffect, useState } from "react";
import { certificateData } from "../data/cerificateData";
import Card from "../components/Card";
import ViewModal from "../modals/ViewModal";
import { FaFilter } from "react-icons/fa";
import { ImCancelCircle, ImCart } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";

const Details = () => {
  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

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
    setFilter(!filter);
  };

  const handleClearFilter = () => {
    setSelectedStatus(null);
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const navigate = useNavigate();

  const handleCart = () => {
    if (cart.length > 0) {
      navigate('/cart', {
        state: {
          cart: cart,
          name: cart.name,
          price: cart.price,
          status: cart.status
        },
      });  
    }
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
    <div className="xl:flex xl:justify-center xl:pl-36 2xl:pl-96 overflow-hidden">
      <div className="pl-6 py-4 xl:px-48">
        <div className="fixed -top-1 left-2 w-full bg-white p-4 flex items-center justify-between z-50">
          <div className="text-xl xl:pl-80 2xl:ml-56 text-red font-bold">Vehicle Documents</div>
          <Link to='/cart'>
            <button onClick={handleCart}>
              <div className="pr-6 xl:pr-80 2xl:mr-64 rounded-full"><ImCart /></div>
              {/* {cart.map((item, index) => (
                <div key={index}>
                  <div>{item.count}</div>
                </div>
              ))} */} 
              <div className="absolute top-4 right-8 xl:right-80 2xl:right-96 bg-red text-white rounded-full text-[10px] px-1 xl:mr-2 2xl:mr-48">{cart.length}</div>
            </button>
          </Link>
        </div>
        <div className="flex gap-3 pt-12 pb-6">
          <div>
            <input 
              className="border h-10 xl:w-[595px] w-[280px] md:w-[450px] lg:w-[360px] 2xl:w-[730px] px-5 rounded-3xl focus:outline-none" 
              placeholder="Search for certificates"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            {searchInput && (
              <button
                className="absolute top-12 right-16 mt-7 mr-2 text-gray-400 cursor-pointer"
                onClick={() => setSearchInput("")}
              >
                <MdClear />
              </button>
            )}
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="text-red" onClick={() => setFilter(!filter)}>
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
            addToCart={addToCart}
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