export default function CardContainer({children}: React.PropsWithChildren) {
    return (
        <div className="bg-white shadow mb-2 max-w-[300px] rounded-[3px] cursor-pointer py-2 px-4">
            <p>{children}</p>
        </div>
    )
}