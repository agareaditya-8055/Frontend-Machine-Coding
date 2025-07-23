import { useEffect, useState } from "react";
import { generateColorSet } from "./utils/generateColors";
import ColorBox from "./components/ColorBox";
import Message from "./components/Message";

function App() {
  const [correctColor, setCorrectColor] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const setupGame = () => {
    const { correctColor, options } = generateColorSet();
    setCorrectColor(correctColor);
    setOptions(options);
    setSelected("");
    setFeedback("");
  };

  useEffect(() => {
    console.log('component mount ====>>>> ');
    setupGame();
  }, []);

  const handleSelect = (color: string) => {
    setSelected(color);
    setFeedback(color === correctColor ? "Correct!" : "Incorrect!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Guess the Color Code</h1>
        <p className="text-3xl font-mono">{correctColor.toUpperCase()}</p>
      </div>

      <div className="flex gap-6 mb-6">
        {options.map((color) => (
          <ColorBox
            key={color}
            color={color}
            onSelect={handleSelect}
            isDisabled={!!feedback}
            isSelected={selected === color}
          />
        ))}
      </div>

      {feedback && (
        <>
          <Message message={feedback} />
          <button
            onClick={setupGame}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default App;
