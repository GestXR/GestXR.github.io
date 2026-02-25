import { Stack, Typography } from '@mui/material'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

export default function ListBullet({c}) {
  return (
    <div className="relative mt-4 flex flex-col gap-3 py-5 px-3 bg-black/50 rounded-xl">
      {c.titulo &&
        <Typography fontWeight="bold" className="text-center text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.titulo) }}></Typography>
      }
      <Stack gap={1}>
        {c.items.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex items-start">
              <div className="flex items-center m-2">
                <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
              </div>
              <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item) }}></Typography>
            </div>
          </React.Fragment>
        ))}
      </Stack>
    </div>
  )
}
