"use client"

import React, { useState } from "react"
import { Check, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface themeProps {
  label: string,
  value: string,
  active: boolean,
}

export function ThemeToggle() {
  const { setTheme } = useTheme()

  const [themes, setThemes] = useState<themeProps[]>([
    {
      label: "Light",
      value: "light",
      active: false,
    },
    {
      label: "Dark",
      value: "dark",
      active: false,
    },
    {
      label: "System",
      value: "system",
      active: true,
    }
  ])

  const handleActiveTheme = (theme: string, idx: number) => {
    setTheme(theme)
    setThemes(prevState => prevState.map((t, index) => {
      return { ...t, active: index === idx }
    }))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme, idx) => (
          <DropdownMenuItem className="flex justify-between items-center" key={idx} onClick={() => handleActiveTheme(theme.value, idx)}>
            {theme.label}
            {theme.active ?
              <Check className="w-4 h-4" /> :
              null
            }
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
