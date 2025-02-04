import { sum } from "../sum";

//it will take the description and a callback function
test("Sum function should calculate the sum of two numbers",()=>{
    const result = sum(3,4);

    //Assertion,we are expecting our answer of above to be 7
    expect(result).toBe(7);
});