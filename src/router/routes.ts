export interface IRoute {
    path: string,
    label: string,
}

export const routes: IRoute[] = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/contact", label: "Contact"}
]