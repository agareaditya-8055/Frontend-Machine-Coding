import GridLayout from "./pages/GridLayout"

const App = () => {
  return (
     <div className="grid grid-rows-5  w-full min-h-screen bg-[#121212] text-white">
      <div className="row-span-1 flex justify-center items-center ">
        Grid Lights
      </div>
      <div className=" row-span-4 flex justify-center items-center">
      <GridLayout/>
      </div>
    </div>
  )
}

export default App