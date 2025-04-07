import {useState} from "react";


export default function game () {
    
    let [tktNo, setTktNo] = useState(0);

    let getTktNo = () => {
        let tktNo = Math.floor(Math.random() * 1000);
        setTktNo(tktNo);
        let sum = getSum(tktNo);
        if(sum === 15){
            alert("You won the lottery!");
        }
        
        
    }

    let getSum = (num) =>{
        let dgtSum = 0;
        while (num > 0) {
            let lstDgt = num % 10;
            dgtSum = dgtSum + lstDgt;
            num = Math.floor(num / 10);
            
        }
        return dgtSum;
    }

    return (

        <div>
            <h2>Lottery Game</h2>
            <h4>Lottery Ticket = {tktNo}</h4>
            <button onClick={getTktNo}>Get new ticket</button>
        </div>
    );

    
}