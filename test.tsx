import R, { createContext, useRef } from "react";



const Some = createContext<number>();

const Component = () => {
    const qwe = useRef<number>(null)
    qwe.current = 5;
    return (
        <>
            <If condition={true}>
                <>test</>
            </If>
        </>
    )
}