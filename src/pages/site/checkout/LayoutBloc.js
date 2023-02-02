import { FaRegAddressCard } from "react-icons/fa"

import "./Checkout.scss"

export const LayoutBloc = ({ children, children2, title, icon }) => {
    return (
        <>
            <div className="div-bloc">
                <h2>
                    <span>
                        {icon} {title}
                    </span>
                   {children2}
                </h2>
                <div className="div-child">
                    {children}
                </div>
            </div>
        </>
    )
}