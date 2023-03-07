import React from "react"


const ChoiceContact = ({option, setOption}) => {
    const active = {
        background: "var(--dark)",
        color: "var(--white)"
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