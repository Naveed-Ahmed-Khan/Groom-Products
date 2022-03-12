import React from "react";
import DeliveryOptions from "../Components/Delivery/DeliveryOptions";
import MyOrder from "../Components/Order/MyOrder";
import Navbar from "../Components/UI/Navbar";
import classes from "./Restaurant.module.css";

const RestaurantProduct = () => {
  return (
    <div className={classes.outerContainer}>
      <Navbar />
      <main className={classes.main}>
        <DeliveryOptions />
        <MyOrder />
      </main>
    </div>
  );
};

export default RestaurantProduct;
