import { useState, useEffect } from "react";
import { FETCH_RESTRO_MENU } from "../config"
const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {
        getRestaurantMenu();
    },);

    const getRestaurantMenu = async () => {
        const data = await fetch(FETCH_RESTRO_MENU + resId);
        const json = await data.json();

        setRestaurant(json.data)
    }
    return restaurant;
}

export default useRestaurant;