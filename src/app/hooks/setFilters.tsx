import { books } from "@/constants/mockData"
import { useState } from "react"

export function useFilters() {

    const [filters, setFilters] = useState({
        title: ""
    })

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFilters({
            title: e.target.value
        })
    }

    const filtersBooks = (books: {title: string, description: string, image: string, id: number}[]) =>{
        return books.filter((book)=>{
            return book.title.toLowerCase().includes(filters.title.toLowerCase())
        })
    }

    const filteredBooks = filtersBooks(books)


   return {handleFilter,  filteredBooks}
}