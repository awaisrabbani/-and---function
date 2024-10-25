import { useState } from "react";

function App() {

  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(quantity);

  // Function to handle manual input
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and prevent negative values
    if (value === "" || (!isNaN(value) && Number(value) >= 0)) {
      setInputValue(value);
    }
  };

  // Increment quantity
  const incrementQuantity = () => {
    const newQuantity = (Number(inputValue) || 0) + 1;
    setInputValue(newQuantity);
    setQuantity(newQuantity);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    if (Number(inputValue) > 1) {
      const newQuantity = Number(inputValue) - 1;
      setInputValue(newQuantity);
      setQuantity(newQuantity);
    }
  };

  // Reset input field to quantity on blur if input is empty
  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(quantity); // Reset to quantity if input is empty
    }
  };

  return (
    <>

    <div className="flex items-center justify-center mt-6">
    <div className="border border-blue-500 border-l-0 border-r-0 rounded">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={decrementQuantity}>-</button>
      <input className=" outline-none bg-transparent text-center font-semibold font-sans"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur} // Reset to quantity on blur if input is empty
        placeholder="Qty"
      />
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={incrementQuantity}>+</button>
    </div>
    </div>

    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-sans font-bold ml-11 mt-11 "> <span> Total Quanitity</span> {inputValue}</h1>
    </div>

    </>
  );
  
}
export default App;
