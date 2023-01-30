import React from 'react'
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL} from "../config"
import useRestaurant from '../hooks/useRestaurant';
const RestaurantMenu = () => {
    const {id}=useParams();
    const restaurant=useRestaurant(id)     
    
  return (
    <div>
    <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="img" />
      <h1>{restaurant.name}</h1>
    </div>
  )
}

export default RestaurantMenu;
