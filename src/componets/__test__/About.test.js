import { render,screen } from "@testing-library/react";
import About from '../About';
import "@testing-library/jest-dom";

test("render the About component", ()=>{
    render(<About/>)
})

test("heading in the About Component",()=>{
    render(<About/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})