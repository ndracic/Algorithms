var expect = chai.expect;

describe("add", function() {
  it("should add two numbers", function() {
    var num1 = 10;
    var num2 = 34;

    var result = add(num1, num2);

    expect(result).to.eql(44);
  });
});

describe("subtract", function() {
  it("should subtract the second number from the first number", function() {
    var num1 = 10;
    var num2 = 9;

    var result = subtract(num1, num2);

    expect(result).to.eql(1);
  });
});

describe("multiply", function() {
  it("should multiply the two numbers", function() {
    var num1 = 4;
    var num2 = 4;

    var result = multiply(num1, num2);

    expect(result).to.eql(16);
  });
});

describe("divide", function() {
  it("should divide the first number by the second number", function() {
    var num1 = 10;
    var num2 = 2;

    var result = divide(num1, num2);

    expect(result).to.eql(5);
  });
});