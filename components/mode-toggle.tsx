"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { theme,setTheme } = useTheme()
  const toggleTheme = () => { 
    setTheme(theme==='dark'?'light':'dark')
   }
  return (
  
        <Button onClick={toggleTheme} variant="outline" size="icon">
          {theme === "dark" ? <Sun/> : <Moon/>}
        </Button>
     
  )
}
