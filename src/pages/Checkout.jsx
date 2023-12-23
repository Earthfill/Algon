import { useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const Checkout = () => {
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
    <div className="p-6">
      <div className="text-red font-bold text-3xl">Payment</div>
      <div className="border rounded-lg shadow flex justify-between items-center text-red mt-6 p-4">
        <div className="font-medium">TOTAL</div>
        <div className="font-semibold">&#8358;</div>
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
          <div className="text-gray-400 text-sm pt-4">Card Number</div>
          <input
            name="number"
            value={state.number}
            className="border-b outline-none w-10/12 pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="text-gray-400 text-sm pt-4">CVC</div>
          <input
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            className="border-b outline-none w-10/12 pt-1"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    </div>
  )
}

export default Checkout