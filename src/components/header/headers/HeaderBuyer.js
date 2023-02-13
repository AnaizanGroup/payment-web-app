import { NavBarHome } from "../fragments/NavBarHome"
import { RightBtns } from "../fragments/RightBtns"
import { SearchBar } from "../fragments/SearchBar"
import { TopBar } from "../fragments/TopBar"
import Header from "../Header"

import "../Header.scss"

const HeaderBuyer = () => {
    return(
        <>
            <Header children1={<TopBar />}
                children2={null}
                children3={<RightBtns />}
                children4={null}
                />
        </>
    )
}

export default HeaderBuyer;