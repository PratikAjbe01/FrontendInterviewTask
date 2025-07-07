import React, { useState } from 'react'

function StarRating() {
    const [stars,setStars]=useState(new Array(5).fill(null));
    const [hoverInd,SetHoverInd]=useState(-1);
    const [onUserClick,SetOnUserClick]=useState(-1);
  return (
    <div style={{minWidth:'50vh',display:'flex', alignItems:'center',justifyContent:'space-between'}}>
    {stars.map((el,ind)=>(
        <div key={ind} style={{
display:'flex',textAlign:'center',alignItems:'center',justifyContent:'space-between',flexDirection:'column-reverse'
        }}>
        <div key={ind} style={{  fontSize: '2rem',cursor:'pointer', color:(onUserClick >= 0 && ind <= onUserClick) || (hoverInd >= 0 && ind <= hoverInd)
                ? 'gold'
                : 'gray',}} onClick={()=>SetOnUserClick(ind)} onMouseLeave={()=>SetHoverInd(-1)} onMouseEnter={()=>SetHoverInd(ind)}>
          
            ★
      
        </div>
        {ind+1}
        </div>
    ))}
    </div>
  )
}

export default StarRating
