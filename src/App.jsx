import { useReducer } from 'react'
import TipButton from './TipButton';

export const ACTION = {
  BILL : 'bill',
  PEOPLE : 'people',
  TIP : 'tip',
  RESET : 'reset'
}



function App() {
  const [{bill, people, tip}, dispatch] = useReducer(reducer, {bill:0, people:0, tip:0});
  const TPP = bill * tip; //Tip Per Person
  const totalTip = TPP * people; 

  function reducer(state, {type,payload}){
    switch (type) {
      case ACTION.BILL:
        return {...state, bill: payload}
      case ACTION.PEOPLE:
        return {...state, people: payload}
      case ACTION.TIP:
        return {...state, tip: payload}
      case ACTION.RESET:
        return {bill:0, people:0, tip:0}
      default:
        return state
    }
  }

  
  return (
    <div className='grid place-items-center h-screen '>
      <form className="grid grid-cols-2 gap-10 " action="">
        <section className="flex flex-col">
          <label htmlFor="bill">Bill</label>
          <input type="number" step="any" name="bill" id="bill" className="w-60" onChange={(e) => {dispatch({ type: ACTION.BILL, payload: parseFloat(e.target.value) })}}/>

          <label htmlFor="tip">Tips</label>
              <div className="grid grid-cols-3 gap-2 w-60">
              <TipButton dispatch={dispatch} tipValue={5}/>
              <TipButton dispatch={dispatch} tipValue={10}/>
              <TipButton dispatch={dispatch} tipValue={15}/>
              <TipButton dispatch={dispatch} tipValue={25}/>
              <TipButton dispatch={dispatch} tipValue={50}/>
              <input type="number" step="any" name="tip" id="tip" className="text-center" placeholder="Custom" onChange={(e) => {dispatch({ type: ACTION.TIP, payload: e.target.value/100 })}}/>
              </div>
          <label htmlFor="number">Number</label>
          <input type="number" name="number" id="number" className="w-60" onChange={(e) => {dispatch({ type: ACTION.PEOPLE, payload: parseInt(e.target.value)})}}/>


        </section>
        <section>
          <div className='flex justify-between w-48 '>
            <h1>Amount<span className='block text-gray-300'>/person</span></h1>
            <p className='text-emerald-400'>{TPP.toFixed(2)}</p>
          </div>
          <div className='flex justify-between w-48'>
            <h1>Total<span className='block text-gray-300'>/person</span></h1>
            <p className='text-emerald-400'>{totalTip.toFixed(2)}</p>
          </div>
          <button className="w-48 bg-emerald-400 py-1 " type="reset" onClick={() => dispatch({type: ACTION.RESET})}>RESET</button>
        </section>
      
      </form>
      
    </div>
  )
}

export default App
