import { useState } from "react";

function InputField({name, validRegex, validationMsg, SetInput}){

    const [valid, SetValid] = useState(true);

    const change = (e) => {
        var input = e.target.value;

        if(!validRegex.test(input)){
            SetValid(false);
            SetInput("");

        } else {
            SetValid(true);
            SetInput(input)
        }
    }

    return (
        <>
        <p className="me-3 h4"><strong>{name}</strong></p>
        <div>
        <input className="flex-fill" onChange={change}></input>
        
        {
            !valid && (<p className="text-danger">{validationMsg}</p>)
        }
        </div>
        </>
    )
}

export default InputField;