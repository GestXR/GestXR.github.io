import { Typography } from '@mui/material'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

export default function Paragraph({c}) {
  return (
    <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="relative text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.contenido) }}></Typography>
  )
}
