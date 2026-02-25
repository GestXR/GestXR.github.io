import { Stack, Typography } from '@mui/material'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

export default function MainTitle({c}) {
  return (
    <Stack className="relative mb-8" gap={1.5}>
      <div>
        <div className="absolute w-full h-full bg-black blur-xl opacity-25"></div>
        <div className="relative">
          <Typography sx={{ typography: { xs: "h2", sm: "h1" } }} className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.titulo) }}></Typography>
        </div>
        <div className="pl-2 relative">
          <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.subtitulo) }}></Typography>
        </div>
      </div>
      <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
    </Stack>
  )
}
