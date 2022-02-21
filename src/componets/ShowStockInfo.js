

export default function ShowStockInfo(props){
    
    const backGroundColor = (num) => {
        if(num < 0){
           return 'red'
        }else if (num > 0){
            return 'green'
        }
    }

    const search = (name) => {
        name = props.input
        
        if (name === props.stocks.symbol){
            return(
                <div className='stock-info'>
                        <div className='name'>
                        <h3>{props.stocks.symbol}</h3>
                        <p>{props.stocks.companyName}</p>
                        </div>

                        <div className='price'>
                            <p>{props.stocks.latestPrice}</p>
                            <div className='up-down' style={{backgroundColor:backGroundColor(props.stocks.changePercent)}}>
                            <p>{props.stocks.changePercent}%</p>
                            </div>
                        </div>    
                    </div>
            )

        }
    }

    return(
        <div className="stocks">
            <div className="title">
            <h1>STOCKS</h1>
            </div>
            
            {props.stocks.map((stock) => {
                 return(
                    <div className='stock-info'>
                        <div className='name'>
                        <h3>{stock.symbol}</h3>
                        <p>{stock.companyName}</p>
                        </div>

                        <div className='price'>
                            <p>{stock.latestPrice}</p>
                            <div className='up-down' style={{backgroundColor:backGroundColor(stock.changePercent)}}>
                            <p>{stock.changePercent}%</p>
                            </div>
                        </div>    
                    </div>
                    
                 )
            })}

            <div>
                <button onClick={search()}>search</button>
            </div>
        </div>
    )
}