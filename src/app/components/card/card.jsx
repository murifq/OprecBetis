import React from "react";
import ImageShip from "./image";
import "./card.css";

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

function Card({name, capacity, color, is_sailing, id}) {

  if(is_sailing == false ){
    is_sailing = 'Berlabuh';
    return (

      <a  href={`detail/${id}`} className="border border-solid border-2 border-red-500 shadow-md flex flex-col aspect-w-9 aspect-h-18 w-44 m-5 rounded-lg">
          <ImageShip></ImageShip>
  
          <div className="product-information">   
              <div className="product-information2"> 
                  <p className="book-title">{name}</p>
                  <p  className="book-authors">{capacity}</p>
              </div>
              <div className="review-container">
                      {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}
                  <p  className="book-review-count">{color} </p>
                  <p  >{is_sailing.toString()}</p>
              </div>
          </div>
  </a>
  
    );
  }else{
    is_sailing = 'Berlayar';
    return (

      <a href={`detail/${id}`} className="border border-solid border-2 border-green-500 shadow-md flex flex-col aspect-w-9 aspect-h-18 w-44 m-5 rounded-lg">
          <ImageShip></ImageShip>
  
          <div className="product-information">   
              <div className="product-information2"> 
                  <p className="book-title">{name}</p>
                  <p  className="book-authors">{capacity}</p>
              </div>
              <div className="review-container">
                      {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}
                  <p  className="book-review-count">{color} </p>
                  <p >{is_sailing.toString()}</p>
              </div>
          </div>
  </a>
  
    );
  }


}
export default Card;
