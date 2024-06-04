import R from "react";


declare module "react" {
    function createContext<T>(defaultValue?: T): R.Context<T>;
}