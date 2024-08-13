import { sum } from "../sum"

test("test case for sum of two numbers",()=>{
    const result = sum(2,4);
    expect(result).toBe(6)
})