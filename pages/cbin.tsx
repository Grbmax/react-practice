import { useState } from "react";

const cbin = () => {

    const options = ["cricket", "football", "hockey", "tennis"];
    const days = ["weekday", "weekend"];

    return (
        <div className="flex space-x-3 min-h-screen justify-center items-center">
            <div className="flex flex-col items-start justify-center border border-black p-4 rounded-xl">
                {
                    options.map((item, index) => {
                        return (
                            <div className="space-x-3 items-center" key={index}>
                                <input type="radio" id={item} name="sport" value={item}></input>
                                <label htmlFor={item}>{item}</label>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col items-start justify-center border border-black p-4 rounded-xl">
                {
                    days.map((item, index) => {
                        return (
                            <div className="space-x-3 items-center" key={index}>
                                <input type="radio" id={item} name="days" value={item}></input>
                                <label htmlFor={item}>{item}</label>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
}

export default cbin;