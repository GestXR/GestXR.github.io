import { Typography } from '@mui/material'
import React from 'react'

export default function Subtitle({c}) {
  return (
    <Typography variant="h6" className="!mb-2 relative text-shadow-lg/70">{c.contenido}</Typography>
  )
}
