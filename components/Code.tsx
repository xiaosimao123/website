"use client"

 
import clsx from "clsx"
import React from "react"

// There are probably better ways to do this 🥴
export const Code = ({ children }: { children: React.ReactNode }) => {
 

  return (
    <>
 
      <pre>      {children}</pre>
    </>
  )
}
