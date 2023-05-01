import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({
    page,
    selectedPage,
    setSelectedPage
}: Props) {
    // we use regExp to say that whenever we had a space, avoid it 
    //we use as SelectedPage cause we want it to act as the selectedpage enum
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <div>
            {/* href is used here to know where to go */}
            <AnchorLink className={`${selectedPage === lowerCasePage ? "text-gray-2 border-b-2 border-gray-2 py-2 focus:animate-bounce" : "text-black"} transition duration-500 hover:text-gray-2`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
                {page}
            </AnchorLink>
        </div>
    )
}

export default Link