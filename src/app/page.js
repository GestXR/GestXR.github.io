import React from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import { promises as fs } from 'fs';
import path from 'path';
import renderContent from "./components/renderContent";

export default async function Home() {
  const contenidoDir = path.join(process.cwd(), '/src/app');
  const contenidoPath = path.join(contenidoDir, 'contenido.json');
  const contenidoJSON = await fs.readFile(contenidoPath, 'utf8');
  const c = JSON.parse(contenidoJSON);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-zinc-950">
      {/* dummy div, para generar las clases personalizadas de tailwind */}
      <div>
        <div className="animate-[pulse_3000ms_ease-in-out_infinite] w-[4%]"></div>
        <div className="animate-[pulse_2500ms_ease-in-out_infinite] w-[24%]"></div>
        <div className="animate-[pulse_3123ms_ease-in-out_infinite] w-[42%]"></div>
        <div className="animate-[pulse_3623ms_ease-in-out_infinite]"></div>
      </div>
      <div id="bg-images">
        <div id="bg1" className="absolute w-full left-0 top-0 flex-grow overflow-clip">
          <Image src="/img/screen1.jpeg" alt="banner" priority width={1599} height={834} className="w-full h-[50vh] md:h-auto object-cover opacity-80 animate-[breathe_6000ms_ease-in-out_infinite,fade-in_2500ms_ease-in-out_both]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent"></div>
        </div>
        <div id="bg2" className="absolute w-full left-0 top-[110vh] md:top-[850px] flex-grow overflow-clip">
          <Image src="/img/gest1.jpeg" alt="banner" priority width={1122} height={584} className="w-full h-[75vh] md:h-auto object-cover opacity-80 animate-[breathe_6000ms_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div id="bg3" className="absolute w-full left-0 top-[230vh] md:top-[1700px] flex-grow overflow-clip">
          <Image src="/img/screen1.jpeg" alt="banner" priority width={1599} height={834} className="w-full h-[75vh] md:h-auto object-cover opacity-80 animate-[breathe_6000ms_ease-in-out_infinite,fade-in_2500ms_ease-in-out_both]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div id="bg4" className="absolute w-full left-0 top-[350vh] md:top-[2600px] flex-grow overflow-clip">
          <Image src="/img/gest1.jpeg" alt="banner" priority width={1122} height={584} className="w-full h-[75vh] md:h-auto object-cover opacity-80 animate-[breathe_6000ms_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
      </div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 md:py-32 px-8 md:py-16 sm:items-start animate-[fade-in_500ms_ease-in-out_1]">
        <Stack id="ppal" className="flex flex-col" gap={0}>
          {c.inicio.map((item, i) => (
            renderContent(item, i)
          ))}
          {/* <Stack id="cabeza" className="relative" gap={1.5}>
            <div>
              <div className="absolute w-full h-full bg-black blur-xl opacity-25"></div>
              <div className="relative">
                <Typography sx={{ typography: { xs: "h2", sm: "h1" } }} className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.inicio.titulo) }}></Typography>
              </div>
              <div className="pl-2 relative">
                <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.inicio.subtitulo) }}></Typography>
              </div>
            </div>
            <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
          </Stack>
          <div id="cuerpo" className="relative flex flex-col gap-9">
            <div id="descripcion">
              <Typography className="text-shadow-lg/70">
                {c.inicio.descripcion}
              </Typography>
            </div>
            <div id="video1" className="flex flex-col items-center">
              <AnimationOnScroll
                className="w-full group transition-all duration-[500ms] ease-out"
                classNameInView="opacity-100"
                classNameNotInView="opacity-0"
                percentage={0}
              >
                <iframe className="rounded-xl w-full aspect-video outline-[1px] outline-zinc-950" src="https://www.youtube.com/embed/1X8CLH9xg5o?si=9p4p6ztgjEfEnfkn" title="Demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </AnimationOnScroll>
            </div>
            <div id="lista-tecnica" className="py-5 px-4 bg-black/50 rounded-xl">
              <Stack spacing={2}>
                <div className="h-[2px] w-[4%] self-center bg-blue-500/50 animate-[pulse_3500ms_ease-in-out_infinite]"></div>

                {c.inicio.lista_1_items.map((item, i) => {
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
                    <React.Fragment key={i}>
                      <div className="flex flex-col gap1 text-center md:text-left">
                        <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.titulo) }}></Typography>
                        <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.descripcion) }}></Typography>
                      </div>
                      <div className={`h-[2px] w-[${w}] self-center bg-blue-500/50 animate-[pulse_${i % 5 == 0 ? "3000" : i % 5 == 1 ? "2500" : i % 5 == 2 ? "3123" : i % 5 == 3 ? "3623" : i % 5 == 4 && "3500"}ms_ease-in-out_infinite]`}></div>
                    </React.Fragment>
                  )
                })}
              </Stack>
              <div>
                <div className="animate-[pulse_3000ms_ease-in-out_infinite] w-[4%]"></div>
                <div className="animate-[pulse_2500ms_ease-in-out_infinite] w-[24%]"></div>
                <div className="animate-[pulse_3123ms_ease-in-out_infinite] w-[42%]"></div>
                <div className="animate-[pulse_3623ms_ease-in-out_infinite]"></div>
              </div>
            </div>
            <div id="inmersion" className="flex flex-col gap-2">
              <AnimationOnScroll
                className="group overflow-clip md:overflow-visible"
                classNameInView="in-view"
                classNameNotInView="not-in-view"
                percentage={0.5}
              >
                <div className="flex flex-col gap-2 transition-all duration-[1000ms] ease-out group-[.in-view]:opacity-100 group-[.in-view]:translate-x-[calc(0)] group-[.not-in-view]:opacity-0 group-[.not-in-view]:translate-x-[calc(-50vw-51%)]">
                  <div>
                    <Image src="/img/innova_slider.jpeg" alt="casco_vr" priority width={1066} height={406} className="rounded-xl" />
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="text-center text-shadow-lg/70 italic" dangerouslySetInnerHTML={{ __html: sanitize(c.inicio.epigrafe_foto_1) }}></Typography>
                  </div>
                </div>
              </AnimationOnScroll>
              <div className="mt-4 flex flex-col gap-3 py-5 px-3 bg-black/50 rounded-xl">
                <Typography fontWeight="bold" className="text-center text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(c.inicio.lista_2.titulo) }}></Typography>
                <Stack gap={1}>
                  {c.inicio.lista_2.items.map((item, i) => (
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
            </div>
            <div id="video2" className="flex flex-col items-center">
              <AnimationOnScroll
                className="w-full group transition-all duration-[500ms] ease-out"
                classNameInView="opacity-100"
                classNameNotInView="opacity-0"
                percentage={0.5}
              >
                <iframe className="rounded-xl w-full aspect-video outline-[1px] outline-zinc-950" src="https://www.youtube.com/embed/FbBA3j8sBTo?si=hDtJvSHVtuThBvoV" title="Demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </AnimationOnScroll>
            </div>
            <div id="about">
              <Stack gap={3}>
                <Stack gap={1.5}>
                  <Typography sx={{ typography: { xs: "h4", sm: "h3" } }} className="text-shadow-lg/70">{c.acerca_de.titulo}</Typography>
                  <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
                </Stack>
                <Stack gap={2}>
                  <Stack>
                    {c.acerca_de.parrafos.map((item, i) => {
                      const sanitizedHTML = sanitize(item);
                      return (
                        <React.Fragment key={i}>
                          <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></Typography>
                        </React.Fragment>
                      )
                    })}
                  </Stack>
                  <div className="h-[2px] w-[50%] self-center bg-blue-500/50 animate-[pulse_3500ms_ease-in-out_infinite]"></div>
                  <Stack gap={0.5}>
                    <Typography variant="h6" className="text-shadow-lg/70">{c.acerca_de.equipo.titulo}:</Typography>
                    <Stack>
                      {c.acerca_de.equipo.items.map((item, i) => {
                        return (
                          <React.Fragment key={i}>
                            <Typography className="text-shadow-lg/70"><span className="font-bold">{item.rol}</span>: {item.nombre}</Typography>
                          </React.Fragment>
                        )
                      })}
                    </Stack>
                  </Stack>
                  <div className="h-[2px] w-[50%] self-center bg-blue-500/50 animate-[pulse_3623ms_ease-in-out_infinite]"></div>
                  <Stack gap={0.5}>
                    <Typography variant="h6" className="text-shadow-lg/70">{c.acerca_de.empresas.titulo}:</Typography>
                    <Stack>
                      {c.acerca_de.empresas.items.map((item, i) => {
                        return (
                          <React.Fragment key={i}>
                            <Typography className="text-shadow-lg/70"><span className="font-bold">{item.rol}</span>: {item.nombre}</Typography>
                          </React.Fragment>
                        )
                      })}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          </div> */}
        </Stack>
      </main>
    </div>
  );
}
