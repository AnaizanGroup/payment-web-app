import React from "react"


const ChoiceContact = ({option, setOption}) => {
    const active = {
        background: "var(--orange-400)",
        color: "var(--white-500)"
    }
    
    return(
        <div className="option-created">
                <li style={option == 0 ? active : null}
                    onClick={() => setOption(0)}>
                    Email
                </li>
                <li style={option == 1 ? active : null}
                    onClick={() => setOption(1)}>
                    Phone Number
                </li>
            </div>
    )
}

export default ChoiceContact