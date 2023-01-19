import React from 'react'

const Restraurant = ({ strCategoryThumb, strCategory }) => {
  return (
    <div className="restro-card">
      <img width='200px' height='200px' src={strCategoryThumb} alt="food" />
      <h1>{strCategory}</h1>
    </div>
  )
}

export default Restraurant
