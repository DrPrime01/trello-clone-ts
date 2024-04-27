interface AddItemButtonProps {
    dark?: boolean,
    openForm(): void
}

export default function AddItemButton({ dark, openForm }: AddItemButtonProps) {
    return (
        <button onClick={openForm} className={`flex items-center gap-x-2 bg-[#ffffff3d] hover:bg-[#ffffff52] rounded-[3px] cursor-pointer max-w-[300px] text-left py-2.5 px-3 w-full border-none ${dark ? "text-[#000]" : "text-[#fff]"}`}><svg xmlns="http://www.w3.org/2000/svg" fill={dark ? "#000" : "#fff"} x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
        </svg>{dark ? "Add another task" : "Add another list"}</button>
    )
}