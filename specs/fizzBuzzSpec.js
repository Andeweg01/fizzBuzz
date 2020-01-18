descibe("FizzBuzz tests", function () {
    beforeEach(function() {
        fb = new fizzBuzz();
    });

    describe("check various divisions in FizzBuzz", function() {
        it("should return FizzBuzz when called fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });
    });
})