import { ReactElement } from "react";

export interface Cards {
    title: string,
    detail: string,
    icon: ReactElement
}

export interface Links {
    title: string,
    path: string,
    icon: ReactElement
}
