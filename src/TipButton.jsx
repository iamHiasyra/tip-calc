import { ACTION } from "./App";

export default function TipButton({dispatch, tipValue}){
    const handleClick = (event) => {
      event.preventDefault();
      dispatch({type: ACTION.TIP, payload: tipValue/100});
    };
  
    return (
      <button className="y-6" onClick={handleClick} > 
      {tipValue}%
      </button>
    )
  }
  