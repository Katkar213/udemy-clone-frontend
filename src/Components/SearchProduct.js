import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchProduct = () => {
const [state]=useLocation().state
console.log(state)
  return (
    <div>SearchProduct</div>
  )
}

export default SearchProduct