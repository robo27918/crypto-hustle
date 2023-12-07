import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
const API_KEY = "40828f6623a246233b579aa60148e9dac95d282f6b6052b65646b322c9a81549"

function App() {
  const [list,setList] = useState(null);
  
  useEffect ( () =>{
    const fetchAllCoinData = async () =>{
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" 
        + API_KEY);
      const json = await response.json();
      console.log('before printin json')
      console.log(json)
      console.log('after printin json')
      setList(json);

     
      
    };
    fetchAllCoinData().catch(console.error);
  },[]);
  console.log("API-KEY is", API_KEY)
  if (list && list.Data){
    console.log('printing inside if statment',list.Data)
  }
  //console.log('printing contents of list',list.Data)
  return(
    <div className="whole-page">
      <h1>My Crypto List</h1>
        <ul>
          {list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain" ? (
          <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
           ) : null
          )}
        </ul>
    </div>
  )
}

export default App
