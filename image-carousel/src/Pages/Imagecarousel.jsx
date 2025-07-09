import React, { useEffect, useState } from 'react'
import './page.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'//you foget to write the .jpg in import
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

function Imagecarousel() {
  const [images,SetImages]=useState([image1,image2,image3,image4])
  const [index,SetIndex]=useState(0);
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div>
      {console.log('Current image:', images[index])}
      <div className='imagePage'>
        <div className='imageDiv'  style={{
          background: `url(${images[index]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.3s ease-in-out',
        }}>
          <div className='left-right'>
            <button disabled={index==0} onClick={()=>SetIndex(index-1)}>⬅️</button>
            <button disabled={index==images.length-1} onClick={()=>SetIndex(index+1)}>➡️</button>
          </div>
          <div className='btn'>
            <ul className='list'>
              <li className='li' style={{color:(index==0)?'black':'white'}}></li>
              <li className='li'style={{color:(index==1)?'black':'white'}}></li>
              <li className='li' style={{color:(index==2)?'black':'white'}}></li>
              <li className='li' style={{color:(index==3)?'black':'white'}}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imagecarousel
