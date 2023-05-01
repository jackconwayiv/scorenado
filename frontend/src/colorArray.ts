const brightArrayOnce: string[] = [
  "red.100",
  "orange.100",
  "yellow.100",
  "green.100",
  "blue.100",
  "purple.100",
  "pink.100",
  "cyan.100",
];

const colorArrayOnce: string[] = [
  "red.300",
  "orange.300",
  "yellow.300",
  "green.300",
  "blue.300",
  "purple.300",
  "pink.300",
  "cyan.300",
];

const gradientArrayOnce: string[] = [
  "red.500",
  "orange.500",
  "yellow.500",
  "green.500",
  "blue.500",
  "purple.500",
  "pink.500",
  "cyan.500",
];

const brightArray = [
  ...brightArrayOnce,
  ...brightArrayOnce,
  ...brightArrayOnce,
  ...brightArrayOnce,
  ...brightArrayOnce,
  ...brightArrayOnce,
];
const colorArray = [
  ...colorArrayOnce,
  ...colorArrayOnce,
  ...colorArrayOnce,
  ...colorArrayOnce,
  ...colorArrayOnce,
  ...colorArrayOnce,
];
const gradientArray = [
  ...gradientArrayOnce,
  ...gradientArrayOnce,
  ...gradientArrayOnce,
  ...gradientArrayOnce,
  ...gradientArrayOnce,
  ...gradientArrayOnce,
];

export default colorArray;
export { gradientArray, brightArray };
