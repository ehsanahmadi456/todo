import { ReactElement } from "react";

export interface Cards {
    title: string,
    detail: string | number,
    icon: ReactElement
}

export interface Links {
    title: string,
    path: string,
    icon: ReactElement
}

export interface Todos {
    _id?: string,
    title: string,
    detail: string,
    status: string
}

export type UserInfo = any