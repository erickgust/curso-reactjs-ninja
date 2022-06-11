import React from "react"

export const color = 'purple'

export const ColorContext = React.createContext({
  color,
  changeColor: () => { }
})
