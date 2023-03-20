
import {useEffect } from 'react';
import Box from "./Box";
import './App.css'

function Build({name,color,numText, setSum}){
    // length
const str = numText[numText.length - 1]
    // reduce
const sum = numText.reduce((a,b)=>a + b , 0)

useEffect(() => {
setSum(sum)
}, [sum])

return(
        <div>
       <h1 id="team">{name}</h1>
       <figure>
         <Box color={color} str={str}/>
         <figcaption id="main">
             <ul>
                 <li>합 :</li> 
                 <li>{sum}</li>
                 </ul>
                 <ul>
                 {/* join */}
                 <li>기록 :</li>
                 <li>{numText.join(',')}</li>
                 </ul>
         </figcaption>
       </figure>
       </div>
       
    )
}

export default Build;