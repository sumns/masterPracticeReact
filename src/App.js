import React, { useState } from 'react';
import "./App.css"

function App() {
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState([]);
  const [date, setDate] = useState('');
  

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };
  
  const handleItemChange = (e, index) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;
    setItems(newItems);
  };
  
  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1 }]);
  };
  
  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  

  return (
    
    <form className='App' onSubmit={handleSubmit}>
      <h2 style={{color:"tomato"}}>Billing Form :</h2>
      <hr/>
      <div>
        <label htmlFor="customer-name">Customer Name:</label>
        <input
          id="customer-name"
          name="customerName"
          type="text"
          value={customerName}
          onChange={handleCustomerNameChange}
        />
      </div>
      <div>
        <label htmlFor="billing-date">Billing Date:</label>
        <input
          id="billing-date"
          name="billingDate"
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label style={{color:"tomato"}}>Items:</label>
        <hr/>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                name="name"
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(e, index)}
              />
              <input
                name="quantity"
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleItemChange(e, index)}
              />
              <button type="button" onClick={() => handleRemoveItem(index)}>
                Remove Item
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <button type="submit">Create Bill</button>
    </form>
  );
}

export default App;