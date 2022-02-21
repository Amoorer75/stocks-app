import {useState} from 'react'
import ShowStockInfo from './ShowStockInfo'


export default function SearchStock(){
    const [stock,setStock] = useState('')

   console.log(stock)
const handelInput = (text) =>{
    setStock(text)
}

   {<ShowStockInfo input={stock} />}

    return(
        <div>
            <input onChange={(text) => handelInput(text.target.value)}></input>
        </div>
    )
}