function createRow(list) {
  let row = "|";
  for (let value of list) {
    row += createBlock(String(value));
  }
  row += "\n";
  return row;
}

function createBlock(str): string {
  if (str.length > 10) {
    throw new RangeError("입력 문자열이 너무 길어요");
  }
  const block = str + new Array(10 - str.length).join(" ") + "|";
  return block;
}

export default createRow;
