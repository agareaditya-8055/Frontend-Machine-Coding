import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(1)

  console.log('[USESTATE HOOK]', count);

   function handleClick() {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count);
    }, 1000);
  }

  // console.log(typeof(count));

  return (
    <div className="min-h-screen justify-center items-center flex bg-black">
      <button onClick={handleClick} className="border border-white text-white rounded-lg px-4 py-2" >Click</button>
    </div>
  )
}

export default App