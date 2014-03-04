/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers){
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function() {
    var sumSquare = 0;
    for (var i = 1; i < this.naturalNumbers + 1; i++) {
        sumSquare += Math.pow(i, 2);

    }
    console.log(sumSquare);
    return sumSquare;
  };

  this.squareOfTheSums = function() {
    var squareSum = 0;
    var sum = 0;
    for (var i = 1; i < this.naturalNumbers +1; i++) {
        sum += i;
    }
    squareSum = Math.pow(sum, 2);
    console.log(squareSum);
    return squareSum;
  }
}

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
