import { useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { MdClear } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || 0;
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'number' && (!/^\d*$/.test(value) || value.length > 16)) {
      return;
    }
      
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (event) => {
    setState((prev) => ({ ...prev, focus: event.target.name }));
  }

  return (
    <div className="p-6 xl:pl-80 2xl:ml-60 xl:px-80 xl:mr-2 2xl:mr-64">
      <div className="flex items-center justify-between text-red font-bold text-xl">
        <div>Payment</div>
        <div onClick={() => navigate(-1)} className="text-gray-400 bg-white rounded-full"><MdClear /></div>
      </div>
      <div className="rounded-lg shadow flex justify-between items-center bg-royal-red text-white mt-6 p-4">
        <div className="font-medium">TOTAL</div>
        <div className="font-semibold">&#8358; {total}.00</div>
      </div>
      <div></div>
      <div className="pt-6">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="pt-3">
          <div className="text-red text-sm pt-4">Card Holder</div>
          <input
            name="name"
            value={state.name}
            className="border-b border-red outline-none w-full pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            autoComplete="cc-name" // Add this attribute
          />
          <div className="text-red text-sm pt-4">Card Number</div>
          <input
            name="number"
            value={state.number}
            className="border-b border-red outline-none w-full pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="text-red text-sm pt-4">Expiry Date</div>
          <input
            name="expiry"
            placeholder="MM/YY"
            value={state.expiry}
            className="border-b border-red outline-none w-full pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="text-red text-sm pt-4">CVC</div>
          <input
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            className="border-b border-red outline-none w-full pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    </div>
  )
}

export default Checkout