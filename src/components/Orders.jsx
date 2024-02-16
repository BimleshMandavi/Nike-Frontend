import React, { useState } from "react";

function Orders() {
  // State to store order number
  const [orderNumber, setOrderNumber] = useState("");
  // State to store order status
  const [orderStatus, setOrderStatus] = useState("");

  // Function to handle changes in input field
  const handleInputChange = (e) => {
    setOrderNumber(e.target.value);
  };

  // Function to simulate fetching order status from server
  const fetchOrderStatus = () => {
    // Simulated logic to fetch order status
    // This could be replaced with an actual API call
    // For simplicity, we'll just simulate a few random statuses
    const statuses = ["Processing", "Shipped", "Out for delivery", "Delivered"];
    const randomStatusIndex = Math.floor(Math.random() * statuses.length);
    const randomStatus = statuses[randomStatusIndex];
    setOrderStatus(randomStatus);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch order status when form is submitted
    fetchOrderStatus();
  };

  return (
    <div>
      <h1>Order Status Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="orderNumber">Order Number:</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={orderNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Check Status</button>
      </form>
      {orderStatus && (
        <div>
          <h2>Order Status:</h2>
          <p>{orderStatus}</p>
        </div>
      )}
    </div>
  );
}

export default Orders;
