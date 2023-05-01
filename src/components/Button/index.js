import React from "react";
import PropType from "prop-types";

import { ButtonContainer } from './style'


export function Button  ({ ...children} )  {
    
    return <ButtonContainer>

{children.title}


    </ButtonContainer>
}

Button.propTypes = {
    children: PropType.string
}


// export default Button