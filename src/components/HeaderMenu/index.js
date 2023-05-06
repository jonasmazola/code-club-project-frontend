import React from "react";
import PropType from "prop-types";

import { HeaderTitulo, Label } from './style'


export function HeaderMenu({ ...children }) {

    return <HeaderTitulo>

        {children.title}

    </HeaderTitulo>
}



// export default Button