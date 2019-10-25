const Exponential = require("./exponential");

test("test exponential", () => {
  const rows = 3;
  const cols = 3;
  let ex = new Exponential(rows, cols);

  // console.table(ex.data);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const expectValue = Math.pow(2 + col, row);
      const actualValue = ex.data[row][col];
      expect(actualValue).toEqual(expectValue);
    }
  }
});
