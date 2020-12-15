import React from "react";
import "./style.css"
import CopySVG from "../../assets/copy.svg";


const Result = ({ selector }) => {

    const textResult =
        `border-bottom-right-radius: ${selector.bottom_right}px;` +
        `\nborder-bottom-left-radius: ${selector.bottom_left}px;` +
        `\nborder-top-right-radius: ${selector.top_right}px;` +
        `\nborder-top-left-radius: ${selector.top_left}px;`;

    function copyText(){
        // Adding element to the DOM
        const textAreaElement = document.createElement("textarea");
        textAreaElement.innerHTML = textResult;
        document.body.appendChild(textAreaElement);

        //selecting the text to call the "copy" document action 
        textAreaElement.select();
        textAreaElement.setSelectionRange(0, 99999); //for Mobile devices.
    
        // copying selected text
        document.execCommand("copy");

        // removing the element from the DOM
        textAreaElement.remove()

    }


    return (
        <div className="result">
            <div className="result-title">
                <h2>Show me the code!</h2>
            </div>
            <div className="code">
                <pre>
                    <code lang="css">{textResult}</code>
                    <button className="copy-button" onClick={copyText}>
                        <img src={CopySVG} alt="Copy to clipboard" />
                    </button>
                </pre>
            </div>
        </div>
    )
}

export default Result;