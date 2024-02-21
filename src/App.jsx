import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputContainer from './component/InputContainer'


function App() {
// useCurrencyInfo("usd")
const [amount,setAmount]=useState(0)
const[from,setFrom]=useState("usd")
const data=useCurrencyInfo(from)
const dataArr=Object.keys(data)
const [convertedAmount,setConvertedAmount]=useState(0)
const [to,setTo]=useState("inr")
console.log(data[to])

console.log(convertedAmount)

const convert=()=>{
  setConvertedAmount(amount*data[to])
  console.log(convertedAmount)
}
console.log(convertedAmount)



// return (<>
//           <div className="h-[8rem] w-[21rem] flex flex-col bg-gray-200 rounded-lg">
//             <div className="flex flex-row justify-between pt-5 px-5">
                
//             <span><h1>from</h1></span>
//              <span><h1>Select Currency</h1></span>
//             </div>
//             <div className="flex flex-row justify-between pt-5 px-5">
//                 <input type="number" placeholder="enter Amount" className="w-32 rounded-md" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
//                 <select value={from} onChange={(e)=>setFrom(e.target.value)}>
//                     {
//                       dataArr.map((place)=>{
//                         return (<>
//                           <option key={place} value={place}>{place}</option>
//                         </>)
//                       })
//                     }
//                 </select>
//             </div>
//         </div>



//         <div className="h-[8rem] w-[21rem] flex flex-col bg-gray-200 rounded-lg">
//             <div className="flex flex-row justify-between pt-5 px-5">
                
//             <span><h1>to</h1></span>
//              <span><h1>Select Currency</h1></span>
//             </div>
//             <div className="flex flex-row justify-between pt-5 px-5">
//                 <input type="number" placeholder="enter Amount" className="w-32 rounded-md" value={convertedAmount} />
//                 <select value={to} onChange={(e)=>setTo(e.target.value)}>
//                     {
//                       dataArr.map((place)=>{
//                         return (<>
//                           <option key={place} value={place}>{place}</option>
//                         </>)
//                       })
//                     }
//                 </select>
//             </div>
//         </div>

//         <button onClick={convert}>Click to convert</button>
// </>)




return(<>
<div className='h-screen w-screen grid place-content-center space-y-2'>
  <div className='h-96 w-96 grid place-content-center border-solid border-gray-950 space-y-3'>
<InputContainer label="From" option={dataArr} selectPlace={from} currencyChange={(e)=>setFrom(e)} amount={amount} amountChange={(e)=>setAmount(e)}/>
<InputContainer label="To" option={dataArr} selectPlace={to} currencyChange={(e)=>setTo(e)} amount={convertedAmount} amountChange={(e)=>setAmount(e)}/>
        <button onClick={convert} className='bg-gray-500 py-2 rounded-lg'>Click to convert</button>
  
</div>
  </div>
</>)
}

export default App
