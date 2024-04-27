import { useState, useRef, useEffect } from "react";

interface NewItemFormProps {
    handleAdd(text: string): void
}

export default function NewItemFormContainer({ handleAdd }: NewItemFormProps ) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    
    return <div className="max-w-[300px] flex flex-col gap-y-2 w-full items-start">
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} className="rounded-[3px] border-none w-full py-2 px-4" />
        <button onClick={() => handleAdd(value)} className="bg-[#5aac44] text-center rounded-[3px] border-none text-white py-1.5 px-3">Create</button>
    </div>
}