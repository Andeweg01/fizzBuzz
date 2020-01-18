
describe("FizzBuzz test function", function () {
    var fb;
    
    beforeEach(function() {
        fb = new fizzBuzz();
    });

    describe("Checks various divisions and what is returned", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return FizzBuzz when called fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz when called fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        it("should return Buzz when called fizzBuzz(20)", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });
        it("should return 17 when called fizzBuzz(17)", function() {
            var result = fizzBuzz(17)
            expect(result).toBe(17);
        });
   });
});
