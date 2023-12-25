const CartItems = ({ cart }) => {
  const maxLength = 32;

  const truncateName = (name) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  return (
    <div className="xl:mt-12 mt-12 2xl:mr-60">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-center p-4 rounded-md mb-3 text-white bg-royal-red">
          <div className="flex-1/3 text-sm">{truncateName(item.name)}</div>
          <div>&#8358; {item.price}</div>
        </div>
      ))}
    </div>
  )
}

export default CartItems