import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Title({c}) {
  return (
    <Stack gap={1.5} className='mb-8 relative'>
      <Typography sx={{ typography: { xs: "h4", sm: "h3" } }} className="text-shadow-lg/70">{c.contenido}</Typography>
      <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
    </Stack>
  )
}
