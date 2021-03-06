import { StyledContainerLarge } from "../../components/common_styles/Container.styled";
import Header from "../../components/Header/header.component";
import MarketPlaceHeader from "../../components/MarketPlace/Header/MarketPlaceHeader.component";
import MarketPlaceHome from "../../components/MarketPlace/Home/MarketPlace.component";

export default function MarketPlace() {
    return(
        <>
            <Header />
            <StyledContainerLarge bg="#fff" size="10px">
                <MarketPlaceHeader />
                <MarketPlaceHome />
            </StyledContainerLarge>
        </>
    )
}