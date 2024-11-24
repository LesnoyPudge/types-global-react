import type { 
    RT 
} from "@lesnoypudge/types-utils-react/namespace";



declare function If(props: (
    RT.PropsWithRequiredChildren &
    {
        condition: boolean;
    }
)): React.ReactNode;

// https://github.com/AlexGilleran/jsx-control-statements?tab=readme-ov-file#for-tag---alternative-syntax
declare function For<T>(props: {
    of: T[];                        
    body: (item: T, index: number, arr: T[]) => React.ReactNode;
}): React.ReactNode;

declare function Choose(
    props: RT.PropsWithRequiredChildren
): React.ReactNode;

declare function When(props: (
    RT.PropsWithRequiredChildren &
    {
        condition: boolean;
    }
)): React.ReactNode;

declare function Otherwise(props: (
    RT.PropsWithRequiredChildren
)): React.ReactNode;