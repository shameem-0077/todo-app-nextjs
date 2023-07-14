import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()

    if(typeof(title) !== "string" || title.length === 0) {
        return new Error("invalid title")
    } else {
        await prisma.todo.create({
            data: {
                title: title,
                complete: false
            }
        })
    }
    redirect("/")
}
export default function NewPage() {
    return (
        <div>
            <header className='flex justify-between items-center mb-4'>
                <h1 className="text-4xl">New</h1>
            </header>
            <form action={createTodo} className='flex flex-col gap-2'>
                <label htmlFor="title">Todo Title</label>
                <input type="text" name="title" className='border-slate-300 bg-transparent focus-within:border-slate-100 border rounded px-2 py-1 outline-none' />
                <div className='mt-5'>
                    <Link className='border p-1 mr-4 rounded' href={".."}>Cancel</Link>
                    <button className='border p-1 rounded' type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}