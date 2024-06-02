import R, { createContext } from "react";



const Some = createContext<number>();

const Component = () => {
    return (
        <>
            <If condition={true}>
                <>test</>
            </If>
        </>
    )
}