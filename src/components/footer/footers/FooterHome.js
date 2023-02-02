import Footer from "../Footer"
import { CenterRow } from "../fragments/CenterRow"
import { Newsletter } from "../fragments/NewsletterForm"

import "../Footer.scss"

const FooterHome = () => {
    return (
        <>
            <Footer children1={<Newsletter />}
                children2={<CenterRow />}
                />
        </>
    )
}

export default FooterHome;