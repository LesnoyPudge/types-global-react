import R from "react";



declare module "react" {
    function createContext<T>(defaultValue?: T): R.Context<T>;

    function useRef<T = null>(initialValue: null): R.MutableRefObject<T | null>;
}