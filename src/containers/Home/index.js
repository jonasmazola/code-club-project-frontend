import React from "react";
import HomeLogo from '../../assets/img/logo.png'

import { Container, HomeImg } from "./style";
import {CategoryCaroussel, OffersCarousel} from "../../components";

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCaroussel />
            <OffersCarousel />
        </Container>
    )
}

