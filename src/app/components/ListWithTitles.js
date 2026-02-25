import { Stack, Typography } from '@mui/material';
import { sanitize } from 'isomorphic-dompurify';
import React from 'react';
import { v4 } from 'uuid';

export default function ListWithTitles({c}) {
  return (
    <div className="relative py-5 px-4 bg-black/50 rounded-xl">
      <Stack spacing={2}>
        <div className="h-[2px] w-[4%] self-center bg-blue-500/50 animate-[pulse_3500ms_ease-in-out_infinite]"></div>

        {c.items.map((item, i) => {
          let w;
          switch (i % 4) {
            case 0:
              w = "24%";
              break;
            case 1:
              w = "42%";
              break;
            case 2:
              w = "24%";
              break;
            case 3:
              w = "4%";
              break;
            default:
              w = "4%";
          }

          return (
            <React.Fragment key={v4()}>
              <div className="flex flex-col gap1 text-center md:text-left">
                <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.titulo) }}></Typography>
                <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.descripcion) }}></Typography>
              </div>
              <div className={`h-[2px] w-[${w}] self-center bg-blue-500/50 animate-[pulse_${i % 5 == 0 ? "3000" : i % 5 == 1 ? "2500" : i % 5 == 2 ? "3123" : i % 5 == 3 ? "3623" : i % 5 == 4 && "3500"}ms_ease-in-out_infinite]`}></div>
            </React.Fragment>
          )
        })}
      </Stack>
    </div>
  )
}
