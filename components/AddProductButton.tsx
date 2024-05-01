"use client"

import { addProductToDatabase } from "@/actions/serverActions"
import { useTransition } from "react"

export default function AddProductButton() {
    const[isPending, startTransition] = useTransition()

    const formData = new FormData()
    formData.append("product", "Macbook Pro")
    formData.append("price", "1999")

  return (
    <button onClick={() => startTransition(() => addProductToDatabase(formData))}
    className="fixed bottom-10 right-10 bg-green-400 text-white rounded-md w-48 p-2">
        {isPending ? "Adding..." : "Add Macbook Pro"}
        </button>
  )
}
