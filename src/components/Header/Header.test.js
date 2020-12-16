import React from 'react';
import Header from "./index";
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

describe("Checking if the header...", function(){
    it("Has a descritive title", function(){
        const { getByText } = render(<Header/>);

        expect(getByText("Prepare your border")).toBeInTheDocument();
    });
})