import React from "react";
import { useSelector, useDispatch } from "react-redux"
import "./styles.css"

const Main = () => {

    const selector = useSelector(state=> state);
    const dispatch = useDispatch();

    const setBorderRadius = (event, action) =>{
        dispatch({
            type:action,
            value: parseInt(event.target.value) || 0
        });
    };

    return (
        <section>

            <div className="all-content">
                <div className="content-numbers">
                    <input type="number" name="top_left" min={0} onChange={e => setBorderRadius(e, "SET-TOP-LEFT")} defaultValue={selector.top_left} id="top_left"/>
                    <input type="number" name="bottom_left" min={0} onChange={e => setBorderRadius(e, "SET_BOTTOM_LEFT")} defaultValue={selector.bottom_left} id="bottom_left"/>
                </div>
                <div className="content" style={{
                    borderBottomRightRadius: selector.bottom_right,
                    borderBottomLeftRadius: selector.bottom_left,
                    borderTopRightRadius: selector.top_right,
                    borderTopLeftRadius: selector.top_left
                }}>
                    Radius
                </div>
                <div className="content-numbers">
                    <input type="number" name="top_right" min={0} onChange={e => setBorderRadius(e, "SET_TOP_RIGHT")}  defaultValue={selector.top_right} id="top_right"/>
                    <input type="number" name="bottom_right" min={0} onChange={e => setBorderRadius(e, "SET_BOTTOM_RIGHT")} defaultValue={selector.bottom_right} id="bottom_right"/>
                </div>
            </div>

            <div className="result">
                <div className="result-title">
                    <h2>Show me the code!</h2>
                </div>
                <div className="code">
                    <pre>
                        <code lang="css">
                            border-bottom-right-radius: {selector.bottom_right}px; <br/>
                            border-bottom-left-radius: {selector.bottom_left}px; <br/>
                            border-top-right-radius: {selector.top_right}px; <br/>                            
                            border-top-left-radius: {selector.top_left}px; <br/>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    )
}

export default Main;