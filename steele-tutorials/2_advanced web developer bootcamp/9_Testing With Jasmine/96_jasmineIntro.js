console.log("connected !");

////------------------object to test---------------------////

let earth = {
    isRound: true,
    numberFromSun: 3
}

////------------------testing with Jasmine---------------------////

describe('Earth', function () {
    it('is round', function () {
        expect(earth.isRound).toBe(true)
    });
    it('is the third plannet from the sun', function () {
        expect(earth.numberFromSun).toBe(3)
    });
})
 
// Jasmine has a lto more more matchers , these are just few examples
/* 
.toBe() / Notification.toBe()
.toBeCloseTo()
.toBeDefined()
.toBeFalsey() / .toBeTruthy() 
.toBeGreaterThan() / .toBeLessThan() 
.toContain()
.toEqual()
.jasmine.any()
*/

describe("Other Jasmine Matchers examples", function () {
    it("allows for === and deep equality", function () {
        expect(1 + 1).toBe(2);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it("allows for easy precision checking", function () {
        expect(3.1415).toBeCloseTo(3.14, 2);
    });
    it("allows for easy truthy / falsey checking", function () {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
    });
    it("allows for easy type checking", function () {
        expect([]).toEqual(jasmine.any(Array));
        expect(function () { }).toEqual(jasmine.any(Function));
    });
    it("allows for checking contents of an object", function () {
        expect([1, 2, 3]).toContain(1);
        expect({ name: 'Elie', job: 'Instructor' }).toEqual(jasmine.objectContaining({ name: 'Elie' }));
    });
});