import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL} from "../config"
const RestaurantMenu = () => {
    const [restaurant,setRestaurant]=useState({});
    const {id}=useParams();
    console.log(id);

    useEffect(()=>
    {
       getRestaurantMenu();
    },);

    const getRestaurantMenu=async()=>
    {
          const data=await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${id}`);
          const json= await data.json();
        
          setRestaurant(json.data)
          // console.log("restaurant",restaurant)
    }
  return (
    <div>
    <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="" />
      <h1>{restaurant.name}</h1>
    </div>
  )
}

export default RestaurantMenu;
