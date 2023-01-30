import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState({});
     useEffect(() => {
        getRestaurantMenu();
    },);

    const getRestaurantMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${resId}`);
        const json = await data.json();

        setRestaurant(json.data)
    }
    return restaurant;
}

export default useRestaurant;