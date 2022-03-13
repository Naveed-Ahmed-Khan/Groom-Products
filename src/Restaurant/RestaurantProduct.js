import React from "react";
import DeliveryOptions from "../Components/Delivery/Delivery";
import MyOrder from "../Components/Order/MyOrder";
import Navbar from "../Components/UI/Navbar";
import classes from "./Restaurant.module.css";

const RestaurantProduct = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>
        <DeliveryOptions />
        <MyOrder />
      </main>
    </div>
  );
};

export default RestaurantProduct;
