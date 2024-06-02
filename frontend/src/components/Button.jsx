import React from 'react'

const Button = ({title,btnValue}) => {
  return (
    <button style={{width:"15rem", padding:"8px",border:"none", marginBottom:"10px"}}>
       {`${title} (${btnValue})`}
    </button>
  )
}

export default Button
