export default function ColumnContainer({ children }: React.PropsWithChildren) {
    return <div className="bg-[#ebecf0] w-[300px] min-h-10 p-2 rounded-[3px] grow-0">
        {children}
    </div>
}