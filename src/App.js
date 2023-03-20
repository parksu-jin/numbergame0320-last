
import { useState, useEffect } from 'react';
import Button from './Button.js';
import Build from './Build.js';

import './App.css';

function random(n){
  // ceil
  return Math.ceil(Math.random()*n)
}

function App(){
const [count,setCount] = useState([])
const [otherCount,setOtherCount] = useState([])
const [clickNum, setClickNum] = useState(0);
//클릭 가능 여부 true: 클릭 불가능, false: 클릭 가능
const [click, setClick] = useState(false);
//A팀 총합
const [sumA, setSumA] = useState(0);
//B팀 총합
const [sumB, setSumB] = useState(0);

function start(){
  const Nextthing = random(5)
  const NextOtherthing = random(5)

  setClickNum(clickNum+1);
  //prev를 사용하는 방식이 더 권장하는 방식입니다. 
  // setCount([...count,Nextthing])
  setCount((prev) => 
    [...prev, Nextthing]
  )
  setOtherCount([...otherCount,NextOtherthing])
}

function reset(){
  setCount([])
  setOtherCount([])
  setClickNum(0);
  setClick(false);
  setSumA(0);
  setSumB(0);
}

//클릭수를 체크하여 클릭수가 5 이상일때 click을 false로 만듭니다.
useEffect(() => {
  if (clickNum < 5) {
    setClick(false);
  } else {
    setClick(true);
  }
},[clickNum])

//총합을 계산하는 함수. 특정 숫자 이상일 때 click을 false로 변경
//1. A와 B 중 한개만 20을 넘으면 승자 alert
//2. A와 B 둘다 20을 넘을 경우 더 높은 팀이 승자 alert

useEffect(() => {
  if (sumA >= 15 || sumB >= 15) {
    if (sumA > sumB) {
      alert(`A팀이 ${sumA} 점으로 이겼습니다.`);
    } else if (sumA < sumB) {
      alert(`B팀이 ${sumB} 점으로 이겼습니다.`);
    } else {
      alert(`A팀과 B팀은 ${sumA} 점으로 동점입니다.`);
    }
    setClick(true);
    return;
  } 
},[sumA, sumB])

  return (
     <div id='class01'>
      <div>
       <h1 id='head'>Dice Game</h1>
      <div className='container'>
        <div>
     <Build name="A" color="green" numText={count} setSum={setSumA}/>
     <Build name="B" color="pink" numText={otherCount} setSum={setSumB} />
     </div>
      </div>
      <div id='class02'>
     <Button onClick={() => {start();}} click={click}>start</Button>
     <Button onClick={reset}>reset</Button>
      </div>
      </div>
     </div>
     
  )
}

export default App;
