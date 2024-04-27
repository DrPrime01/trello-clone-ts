import { useState } from "react";

import NewItemFormContainer from "./NewItemFormContainer";
import AddItemButton from "./AddItemButton";

interface AddNewItemProps {
    handleAdd(text: string): void,
    dark?: boolean
}

export default function AddNewItem({handleAdd, dark}: AddNewItemProps) {
    const [showForm, setShowForm] = useState(false);
    return showForm ? <NewItemFormContainer handleAdd={(text) => {
        handleAdd(text);
        setShowForm(false)
    }} /> : <AddItemButton openForm={() => setShowForm(true)} dark={dark} />
}