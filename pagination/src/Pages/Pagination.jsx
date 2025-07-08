import React, { useEffect, useState } from 'react'
import './Pagination.css';
function Pagination() {
    const [data,SetData]=useState([]);
    const [pageInd,SetPageInd]=useState(0);
    const [currInd,setCurrInd]=useState(0);
    const [showData,SetShowData]=useState([]);
    const handlePages=(move)=>{
       const newPage = currInd + move;//this is also our learning cause we optimized our logic
    const start = newPage * 10;
    const end = start + 10;

    if (start >= 0 && end <= data.length) {
        SetShowData(data.slice(start, end));
        setCurrInd(newPage);
    }
    }

useEffect(()=>{
const fetchData=async()=>{
try {
    const res=await fetch ('https://jsonplaceholder.typicode.com/photos',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
    if(res.ok){
      const data = await res.json();
      console.log('Data get',data);
    SetPageInd(data.length / 10);

      console.log('total pages',pageInd)
      SetData(data);
    SetShowData(data.slice(0,10));  
    }
} catch (error) {
    console.log(error);
}
}
fetchData();
},[])
  return (
     <div className="pagination-container">
      <div className="grid-container">
        {showData.map((el) => (
          <div key={el.id} className="card">
            <img src={el.thumbnailUrl} alt={el.title} />
            <p>{el.title}</p>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={() => handlePages(-1)} disabled={currInd === 0}>
          ⬅ Prev
        </button>
        <span>Page {currInd + 1}</span>
        <button onClick={() => handlePages(1)} >
          Next ➡
        </button>
      </div>
    </div>
  )
}

export default Pagination