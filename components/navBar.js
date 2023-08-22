"use client"
import { Button} from "@/components/ui/button"
import { ChevronsRight, ChevronRight, Menu  } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemChanger } from "./them"
export default function NavBar(){
    const [value,setValue] = useState('hidden')
    function navList(){
        if (value == 'hidden'){
            setValue('flex')
        }else{
            setValue('hidden')
        }
    }
    return(
        <div className="container mt-4 flex flex-row justify-between items-center ">
            <h1>Round</h1>
            <div className={`flex  flex-col items-center md:flex-row-revers justify-center md:justify-center md:w-full w-5/5`} >
                <div className="p-2 flex flex-row md:items-center items-end justify-end w-5/5 md:w-auto ">
                    <Button variant="ghost" size="icon" className="w/5/5" onClick={navList}>
                        <Menu className="w-6 sm:w-7 h-6"/>
                    </Button>
                        <ChevronsRight className="w-6 h-6 mr-4 hidden md:block " color="#FF6F61"/>
                </div>
                <div className={`${value} md:flex-row items-center justify-center flex-col w-5/5 z-10`}>
                    <ul className={`w-full container flex flex-col md:flex-row justify-between items-center`}>
                        <li className="mx-2 w-auto "><Link href="/">Home</Link></li>
                        <li className="mx-2 w-auto "><Link href="/">Home</Link></li>
                        <li className="mx-2 w-auto "><Link href="/">Home</Link></li>
                    </ul>
                    <div className="flex flex-row items-center justify-between md:hidden w-full">
                        <ThemChanger className="mx-4" />
                        <Button className="hidden md:flex flex-row ml-4">
                            explore now 
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:flex flex-row items-center justify-evenly hidden w-1/3">
                <ThemChanger className="mx-4 md:block hidden" />
                <Button className="hidden md:flex flex-row ml-4">
                    explore now 
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}