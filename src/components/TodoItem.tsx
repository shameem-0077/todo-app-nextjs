"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
    return (
        <li  className='flex'>
            <input id={id} className='mr-5 cursor-pointer peer' type="checkbox" defaultChecked={complete} onChange={(e) => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className='peer-checked:line-through cursor-pointer peer-checked:text-slate-500'>{title}</label>
        </li>
    )
}