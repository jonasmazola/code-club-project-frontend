import React, { useEffect, useState } from "react";
import {
    ErrorMessageStyle
} from "./style";





export function ErrorMessage({children}) {


    return (
        <ErrorMessageStyle>
            {children}
        </ErrorMessageStyle>
    )
}
