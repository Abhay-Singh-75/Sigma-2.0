import {useState} from "react";

export default function ludoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});

    let updateBlue = () => {
        // moves.blue += 1;
        // console.log(moves.blue);
        // setMoves({ ...moves,blue: moves.blue + 1});
        // note: Updated Method

        setMoves((prevMove) => {
            return { ...prevMove, blue: prevMove.blue + 1}
        });
    }

    let updateYellow = () => {
        setMoves((prevMove) => {
            return { ...prevMove, yellow: prevMove.yellow + 1}
        });
    }

    let updateGreen = () => {
        setMoves((prevMove) => {
            return { ...prevMove, green: prevMove.green + 1}
        });
    }

    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1}  //note: '...' represemt the spreading of the object and then we are updating the value of red.
        });
    }

  return (
    <div>
      <h4>Game Begins</h4>

      <div className="Board">
        <p>Blue Moves = {moves.blue}</p>
        <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>

        <p>Yellow Moves = {moves.yellow}</p>
        <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>

        <p>Green Moves = {moves.green}</p>
        <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>

        <p>Red Moves = {moves.red}</p>
        <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
      </div>
    </div>
  );
}
