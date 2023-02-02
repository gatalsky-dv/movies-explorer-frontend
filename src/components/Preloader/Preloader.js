import React from 'react'

const Preloader = ({ isOpen }) => {
  
  return (
    <div className={`preloader ${isOpen ? "" : "preloader_close"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader
