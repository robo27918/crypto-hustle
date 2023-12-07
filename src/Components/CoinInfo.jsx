import React, {useEffect, useState} from "react";
const API_KEY = "40828f6623a246233b579aa60148e9dac95d282f6b6052b65646b322c9a81549"
const CoinInfo = ({image,name, symbol})=>{
    
    const[price,setPrice] = useState(null);

    useEffect (() =>{
        const getCoinPrice = async()=>{
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`+
                API_KEY
            );
            const json = await response.json();
            setPrice(json);
        };
        getCoinPrice().catch(console.error);
    },[symbol]);

    return(
        <div>
            {price ? (
                <li className="main-list" key={symbol}>
                    <img className="icons" 
                    src={`https://www.cryptocompare.com${image}` }
                    alt={`Small icon for ${name} crypto coin`}
                    />
                    {name} <span className="tab"/> ${price.USD} USD
                </li>

            ): null
            }
        </div>
    );
};
export default CoinInfo;