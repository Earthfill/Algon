import { ImArrowLeft2 } from "react-icons/im"
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cartFromQuery = JSON.parse(queryParams.get("cart")) || [];

  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const cart = [...storedCart, ...cartFromQuery];
  
  const total = cart.reduce((accumulator, item) => accumulator + parseFloat(item.price), 0);

  const handlePrice = () => {
    
    navigate('/checkout', {
      state: {
        total: total
      },
    });
  };


  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 xl:pl-80 2xl:ml-60 xl:px-80">
      <div className="fixed -top-1 left-3 z-50 2xl:pl-64 w-full bg-white p-4 flex gap-3 items-center pb-5">
        <div onClick={handleBack} className="border rounded-full p-2 xl:ml-72 cursor-pointer"><ImArrowLeft2 /></div>
        <div className="font-bold">My Cart</div>
        <div className="text-gray-400">&#40;{cart.length}&#41;</div>
        <div className="border rounded-xl absolute right-8 xl:right-80 xl:mr-2 2xl:mr-64 p-2 text-white bg-royal-red flex gap-2 items-center">
          <Link to='/checkout' className="flex items-center gap-3 hover:scale-105 hover:transform transition:transform duration-300">
            <button onClick={handlePrice} className="font-bold">Checkout</button>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <CartItems cart={cart} />
    </div>
  )
}

export default Cart