import { Typography } from '@mui/material'
import React from 'react'

export default function Text({c}) {
  return (
    <Typography className="relative text-shadow-lg/70">
      {c.contenido}
    </Typography>
  )
}
