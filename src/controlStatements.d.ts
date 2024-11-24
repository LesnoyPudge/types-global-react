


declare function If(props: {
    children: React.ReactNode;
    condition: boolean;
}): React.ReactNode;

// https://github.com/AlexGilleran/jsx-control-statements?tab=readme-ov-file#for-tag---alternative-syntax
declare function For<T>(props: {
    of: T[];                        
    body: (item: T, index: number, arr: T[]) => React.ReactNode;
}): React.ReactNode;

declare function Choose(props: {
    children: React.ReactNode;
}): React.ReactNode;

declare function When(props: {
    children: React.ReactNode;
    condition: boolean;
}): React.ReactNode;

declare function Otherwise(props: {
    children: React.ReactNode;
}): React.ReactNode;