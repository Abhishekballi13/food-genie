import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//you can group test cases inside describe
describe("Contact us page test cases",()=>{
    //you can write it instead of test here also
    test("Should load contact us component",()=>{
        render(<Contact/>)  
        //it will find all headings inside contact component
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside Contact component",()=>{
        render(<Contact/>)
        
        const button = screen.getByRole("button");
        // const button = screen.getByName("submit");
        //Assertion
        // expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside Contact component",()=>{
        render(<Contact/>)
        
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
        // expect(heading).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes on the Contact component",()=>{
        render(<Contact/>)
        
        //if mutltiple items use getAllByRole
        const inputBoxes = screen.getAllByRole("textbox");
        //it will return array of objects that is our input boxes
        // console.log(inputBoxes.length);
    
        expect(inputBoxes.length).toBe(2);
    })
})

