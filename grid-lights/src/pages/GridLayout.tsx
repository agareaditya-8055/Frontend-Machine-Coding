import { useEffect, useState } from "react";
import { boxes } from "../data/const";

type BOX = {
  id: number;
  bgColor: string;
}

const GridLayout = () => {
  const [storedIds, setStoredIds] = useState<number[]>([])

  const handleReverse = () => {
    if (boxes.length === storedIds.length) {
      let intervalId = setInterval(() => {
        setStoredIds(prevIds => {
          const newIds = [...prevIds];
          newIds.pop();
          if (newIds.length === 0) {
            clearInterval(intervalId);
          }

          return newIds;
        });
      }, 300)
    }
  }

  useEffect(() => {
    handleReverse()
  }, [storedIds])



  const handleClick = (box: BOX) => {
    if (storedIds.length === boxes.length) return
    if (storedIds.includes(box.id)) return
    const id = box.id
    setStoredIds(prev => (prev ? [...prev, id] : [id]))
  }

  return (
    <div className="border p-3">

      <div className="grid grid-cols-3 gap-2">
        {boxes.map((box) => (
          <div key={box.id} role="button" onClick={() => handleClick(box)} className={` h-28 w-28 flex justify-center ${storedIds.includes(box.id) ? "bg-green-600" : "bg-transparent"} items-center border ${box.id ? "hover:bg-green-600" : "bg-transparent"}`}>{box.id}</div>
        ))}
      </div>
    </div>
  )
}

export default GridLayout