declare function If(props: { 
    condition: unknown;
    children: React.ReactNode;
}): React.ReactNode;

declare function For<T>(props: {
    of: Iterable<T>;
    body: (item: T, index?: number) => React.ReactNode;
}): React.ReactNode;