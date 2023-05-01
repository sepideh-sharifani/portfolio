import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

import React from 'react'

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink href={`#${SelectedPage.ContactMe}`} className="flex items-center justify-center bg-orange-10 w-28 h-10 font-bold rounded-md hover:bg-gray-2 hover:text-white transition delay-150 duration-300" onClick={() => { setSelectedPage(SelectedPage.ContactMe) }}>{children}</AnchorLink>
    )
}

export default ActionButton