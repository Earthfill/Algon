const CartItems = ({ cart }) => {
  const maxLength = 20; // Set your desired maximum length

  const truncateName = (name) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between p-4 rounded-md mb-3 text-white bg-royal-red">
          <div className="flex-1/3 truncate ... text-sm">{truncateName(item.name)}</div>
          <div>&#8358; {item.price}</div>
        </div>
      ))}
    </div>
  )
}

export default CartItems