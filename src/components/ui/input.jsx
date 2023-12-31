"use client"
import * as React from "react"
import { cn } from "@/lib/utils"


const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const handleInput = () => {
    const value = document.getElementById("searchbar").value.toLowerCase()
    const allPokemon = document.getElementsByClassName("pokemon");
    var pokemon = document.querySelectorAll('div[id*="' + value + '"]');

    var displayVal = "none"

    if (value === "") {
      displayVal = ""
    }
    for (let i = 0; i < allPokemon.length; i++) {
      allPokemon.item(i).style.display = displayVal
    }
    for (let i = 0; i < pokemon.length; i++) {
      pokemon.item(i).style.display = ""
    }
  }
  return (
    (<input
      onInput={handleInput}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
