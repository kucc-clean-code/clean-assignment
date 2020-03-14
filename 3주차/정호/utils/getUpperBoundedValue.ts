function getUpperBoundedValue(value, upperBound) {
  if (value > upperBound) return upperBound;
  return value;
}

export default getUpperBoundedValue;
