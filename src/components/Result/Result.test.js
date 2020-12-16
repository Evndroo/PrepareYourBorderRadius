import React from 'react';
import Result from "./index";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

describe("Check if user...", ()=>{
    it("Has a copy button", ()=>{

        const selector = {
            bottom_right:0,
            bottom_left:0,
            top_right:0,
            top_left:0
        }

        const { container } = render(<Result selector={selector}/>);

        const copyBTN = container.querySelector("button.copy-button");

        expect(copyBTN).toBeInTheDocument();

    });

});