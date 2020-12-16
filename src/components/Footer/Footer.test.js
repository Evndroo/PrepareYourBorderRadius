import React from 'react';
import Footer from "./index";
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

describe("testing if the footer has...", function(){
    it("A loving message", function(){
        const { container } = render(<Footer />);

        const footerText = container.querySelector("p")
        const footerEmoji = container.querySelector("p span")

        expect(footerText.innerHTML).toMatch(/Made with/i);

        expect(footerEmoji.innerHTML).toBe("💜");
    });

    it("A link for @Evndroo Github profile", function(){
        const { getByText } = render(<Footer />);
        const link = getByText("@Evndroo").closest('a');

        expect(link).toBeInTheDocument();

        expect(link).toHaveAttribute("href","https://github.com/Evndroo");

    });
});