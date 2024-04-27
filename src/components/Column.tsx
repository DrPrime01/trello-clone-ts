import ColumnContainer from "./ColumnContainer";

interface ColumnProp {
    title: string,
}

export default function Column({ children, title }: React.PropsWithChildren<ColumnProp>) {
    return <ColumnContainer>
    <h3 className="py-1.5 pl-4 pr-3 font-semibold">{title}</h3>
    {children}
    </ColumnContainer>
}