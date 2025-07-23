export const generateRandomHex = (): string => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  console.log("hex ====>>>> ", hex);
  return '#' + hex.padStart(6, '0');
};

export const generateColorSet = (): { correctColor: string; options: string[] } => {
  const correctColor = generateRandomHex();
  const options = new Set([correctColor]);

  while (options.size < 3) {
    options.add(generateRandomHex());
  }

  return { correctColor, options: Array.from(options).sort(() => Math.random() - 0.5) };
};
