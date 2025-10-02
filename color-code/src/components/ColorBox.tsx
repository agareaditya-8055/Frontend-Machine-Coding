
type Props = {
  color: string;
  onSelect: (color: string) => void;
  isDisabled: boolean;
   isSelected: boolean;
};

const ColorBox = ({ color, onSelect, isDisabled, isSelected }: Props) => (
  <button
    className={`w-24 h-24 rounded shadow-lg border-4 transition cursor-pointer
                ${isSelected ? "border-black scale-105" : "border-transparent"}
                ${isDisabled ? "cursor-not-allowed opacity-70" : "hover:scale-105"}`}
    style={{ backgroundColor: color }}
    onClick={() => onSelect(color)}
    disabled={isDisabled}
  />
);

export default ColorBox;
