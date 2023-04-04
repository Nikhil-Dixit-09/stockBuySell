import React from 'react'
import './portfolio.css'
import { useSelector } from 'react-redux';
const Portfolio = (props) => {
    const Stocks=useSelector((state)=>state.stocks);
    var pric;
    for(var i=0;i<Stocks.length;i++){
        if(Stocks[i].symbol===props.symbol){
            pric=Stocks[i].price;
            console.log(props.symbol,pric);
            break
        }
    }
  return (
    <div className='ele'>
        <div className='content1'>
            {props.symbol}
        </div>
        <div className='content1'>
            {props.quantity}
        </div>
        <div className='content1'>
            {pric}
        </div>
        <div className='content1'>
            {parseInt(props.quantity)*parseInt(pric)}
        </div>
    </div>
  )
}

export default Portfolio
