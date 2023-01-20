import React from 'react'
import {IMG_CDN_URL} from "../config"
const Restraurant = ({name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,}) => {
  return (
    <div className="restro-card">
    <img width='100%' height="100%" src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

export default Restraurant
