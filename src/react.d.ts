import R from "react";



declare namespace React {
    interface RefObject<T> {
        current: T | null;
    }
}

declare module "react" {
    function createContext<T>(defaultValue?: T): R.Context<T>;

    function useRef<T>(initialValue: T | null): React.RefObject<T>;
}