import { useState } from "react"


const Counter = () => {

const [count, setCount] = useState<number>()

const handleIncreament = () =>{
  
}

const handleDecreament = () =>{

}


  return (
    <div className=" flex flex-col items-center justify-center gap-6">

    
        <button onClick={handleIncreament} className="border border-white rounded-lg px-4 py-2 cursor-pointer ">Increament</button>



        <h2 className="">{0}</h2>
   
        <button onClick={handleDecreament} className="border border-white rounded-lg px-4 py-2 cursor-pointer">Decreament</button>


    </div>
  )
}

export default Counter