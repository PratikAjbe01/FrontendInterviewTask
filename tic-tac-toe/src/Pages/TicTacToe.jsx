import { useEffect, useState } from "react";
import "./TicTacToe.css"

function TicTacToe() {
const [array,setArray]=useState(new Array(9).fill(null));
const [turn,setTurn]=useState('X');
const [play,setPlay]=useState(true);
const [winner,SetWinner]=useState();
const toggleValue=(ind)=>{
  if(!play)return;
  const newArray=[...array];
  newArray[ind]=(turn=='X')?'X':'O';
   setArray(newArray);
    setTurn((turn=='X')?'O':'X');
  checkWinner(newArray);

 
}
const checkWinner=(array)=>{
  const winnerCondition=[   [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
    for(let condition of winnerCondition){
      let[a,b,c]=condition
      if(array[a]==array[b]&&array[b]==array[c]&& array[c]==array[a]&&(array[a]!=null&&array[b]!=null&&array[c]!=null)){
        setPlay(false);
        SetWinner(array[0]);
        return;
        
      }
    }
   
}
useEffect(()=>{
  if(winner){
setTimeout(()=>{
alert(`Winner is my Boy : ${winner}`);
},1000)
  }

},[winner])

  return (
    <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr'}} >
{
  array.map((ind,el)=>(
   <div  style={{height:"100px", width:"100px", display:'flex',alignItems:'center',justifyContent:'center' ,border:"1px solid black",textAlign:'center'}}
 className="cell" key={el} disabled={!play} onClick={()=>toggleValue(el)}>
     {ind}
    </div>
  ))
}
    </div>
  )
}

export default TicTacToe
