class Exponential {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    // y = f(x+1)
    for (let row = 0; row < this.rows; row++) {
      this.data[row] = [];
      for (let col = 0; col < this.cols; col++) {
        this.data[row][col] = Math.pow(2 + col, row);
      }
    }
  }
}

module.exports = Exponential;