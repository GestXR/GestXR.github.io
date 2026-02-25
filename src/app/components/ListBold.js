import { Typography } from '@mui/material'
import React from 'react'

export default function ListBold({c}) {
  return (
    <div className='relative'>
      {c.items.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Typography className="text-shadow-lg/70"><span className="font-bold">{item.nombre}</span>: {item.descripcion}</Typography>
          </React.Fragment>
        )
      })}
    </div>
  )
}
