import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import AnimationOnScroll from "./animationOnScroll";
import { promises as fs } from 'fs';
import path from 'path';
import { sanitize } from "isomorphic-dompurify";

export default async function Home() {
  const contenidoDir = path.join(process.cwd(), '/src/app');
  const contenidoPath = path.join(contenidoDir, 'contenido.json');
  const contenidoJSON = await fs.readFile(contenidoPath, 'utf8');
  const c = JSON.parse(contenidoJSON);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-zinc-950">
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
        <Stack id="ppal" className="flex flex-col" gap={4}>
          <Stack id="cabeza" className="relative" gap={1.5}>
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
                      w = 24;
                      break;
                    case 1:
                      w = 42;
                      break;
                    case 2:
                      w = 24;
                      break;
                    case 3:
                      w = 4;
                      break;
                    default:
                      w = 4;
                  }
                  return (
                    <React.Fragment key={i}>
                      <div className="flex flex-col gap1 text-center md:text-left">
                        <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.titulo) }}></Typography>
                        <Typography className="text-shadow-lg/70" dangerouslySetInnerHTML={{ __html: sanitize(item.descripcion) }}></Typography>
                      </div>
                      <div className={`h-[2px] w-[${w}%] self-center bg-blue-500/50 animate-[pulse_${i % 5 == 0 ? "3000" : i % 5 == 1 ? "2500" : i % 5 == 2 ? "3123" : i % 5 == 3 ? "3623" : i % 5 == 4 && "3500"}ms_ease-in-out_infinite]`}></div>
                    </React.Fragment>
                  )
                })}

              </Stack>
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
                    {/* <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">GEST-XR surge como fruto de un proyecto de investigación impulsado a través del <a href="https://artes.unc.edu.ar/centros/centros-de-transferencia/laboratorio-de-electroacustica-e-informatica-musical-l-e-i-m/" target="_blank">LEIM</a>, en la Facultad de Artes de la Universidad Nacional de Córdoba.</Typography>
                    <br></br> */}
                    {/* <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">El equipo interdisciplinario de investigación, conformado por estudiantes y docentes de la institución, se dedica a explorar las posibilidades de las tecnologías de realidad virtual y extendida para el desarrollo de experiencias narrativas interactivas, interfaces innovadoras y sistemas de audio en tiempo real orientados a la composición e interpretación musical.</Typography> */}
                  </Stack>
                  {/* <AnimationOnScroll
                    className="group overflow-clip md:overflow-visible"
                    classNameInView="in-view"
                    classNameNotInView="not-in-view"
                    percentage={0.3}
                  >
                    <div className="flex flex-col gap-2 transition-all duration-[1000ms] ease-out group-[.in-view]:opacity-100 group-[.in-view]:translate-x-[calc(0)] group-[.not-in-view]:opacity-0 group-[.not-in-view]:translate-x-[calc(50vw+51%)]">
                      <div>
                        <Image src="/img/unc_premio.jpeg" alt="casco_vr" priority width={1066} height={406} className="rounded-xl" />
                      </div>
                      <div>
                        <Typography variant="subtitle2" className="text-center text-shadow-lg/70 italic">La primera versión de GEST fue <span className="text-fuchsia-400">ganadora del segundo premio</span> de la novena edición de Exposición de proyectos de investigación aplicada y productos innovadores (UNC Innova).</Typography>
                      </div>
                    </div>
                  </AnimationOnScroll> */}
                  {/* <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">El proyecto continuó su desarrollo, sumando el apoyo de particulares y empresas fuera de la institución, e incorporando el uso de la realidad extendida (en su primera versión era un desarrollo exlusivamente VR).</Typography> */}
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
          </div>
        </Stack>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
