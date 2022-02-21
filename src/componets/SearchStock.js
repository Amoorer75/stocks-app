import {useState} from 'react'
import ShowStockInfo from './ShowStockInfo'


export default function SearchStock(){
    const [stock,setStock] = useState('')

   console.log(stock)


   {<ShowStockInfo input={stock} />}

    return(
        <div>
            <input onChange={(text) => setStock(text.target.value)}></input>
        </div>
    )
}