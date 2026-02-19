import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AnimationOnScroll from "./animationOnScroll";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-zinc-950">
      <div id="bg-images">
        <div id="bg1" className="absolute w-full left-0 top-0 flex-grow overflow-clip">
          <Image src="/img/screen1.jpeg" alt="banner" priority width={1599} height={834} className="w-full h-[50vh] md:h-auto object-cover opacity-70 animate-[breathe_6000ms_ease-in-out_infinite,fade-in_2500ms_ease-in-out_both]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent"></div>
        </div>
        <div id="bg2" className="absolute w-full left-0 top-[110vh] md:top-[850px] flex-grow overflow-clip">
          <Image src="/img/gest1.jpeg" alt="banner" priority width={1122} height={584} className="w-full h-[75vh] md:h-auto object-cover opacity-70 animate-[breathe_6000ms_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div id="bg3" className="absolute w-full left-0 top-[230vh] md:top-[1700px] flex-grow overflow-clip">
          <Image src="/img/screen1.jpeg" alt="banner" priority width={1599} height={834} className="w-full h-[75vh] md:h-auto object-cover opacity-70 animate-[breathe_6000ms_ease-in-out_infinite,fade-in_2500ms_ease-in-out_both]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div id="bg4" className="absolute w-full left-0 top-[350vh] md:top-[2600px] flex-grow overflow-clip">
          <Image src="/img/gest1.jpeg" alt="banner" priority width={1122} height={584} className="w-full h-[75vh] md:h-auto object-cover opacity-70 animate-[breathe_6000ms_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
      </div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 md:py-32 px-8 md:py-16 sm:items-start animate-[fade-in_500ms_ease-in-out_1]">
        <Stack id="ppal" className="flex flex-col" gap={4}>
          <Stack id="cabeza" className="relative" gap={1.5}>
            <div>
              <div className="absolute w-full h-full bg-black blur-xl opacity-25"></div>
              <div className="relative">
                <Typography sx={{ typography: { xs: "h2", sm: "h1" } }} className="text-shadow-lg/70">GEST<span className="text-blue-600">-</span>XR</Typography>
              </div>
              <div className="pl-2 relative">
                <Typography className="text-shadow-lg/70">Instrumento musical inmersivo basado en Realidad Extendida</Typography>
              </div>
            </div>
            <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
          </Stack>
          <div id="cuerpo" className="relative flex flex-col gap-9">
            <div id="descripcion">
              <Typography className="text-shadow-lg/70">
                GEST-XR es un instrumento musical inmersivo basado en Realidad Extendida (XR) que integra interacción gestual en tiempo real, síntesis sonora digital y respuesta algorítmica inteligente dentro de un entorno espacial virtual envolvente.
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

                <div className="flex flex-col gap1 text-center md:text-left">
                  <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70">Interfaz performativa tridimensional</Typography>
                  <Typography className="text-shadow-lg/70">El gesto corporal (principalmente manos en seguimiento óptico) actúa como controlador continuo y discreto de eventos musicales</Typography>
                </div>

                <div className="h-[2px] w-[24%] self-center bg-blue-500/50 animate-[pulse_3000ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-right">
                  <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70">Motor de síntesis y espacialización sonora</Typography>
                  <Typography className="text-shadow-lg/70">Es capaz de generar, transformar y distribuir sonido en un campo audiovisual inmersivo</Typography>
                </div>

                <div className="h-[2px] w-[42%] self-center bg-blue-500/50 animate-[pulse_2500ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-left">
                  <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70">Entorno perceptivo expandido</Typography>
                  <Typography className="text-shadow-lg/70">La escena virtual (domo, objetos sonoros, visuales reactivos) constituye parte constitutiva del instrumento, no un mero soporte visual</Typography>
                </div>

                <div className="h-[2px] w-[24%] self-center bg-blue-500/50 animate-[pulse_3123ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-right">
                  <Typography variant="h6" fontWeight="bold" className="text-shadow-lg/70">Sistema interactivo adaptativo</Typography>
                  <Typography className="text-shadow-lg/70">Registra la ejecución del intérprete, la formaliza como datos musicales y puede responder mediante procesos algorítmicos o de IA en diálogo temporal con el ejecutante</Typography>
                </div>

                <div className="h-[2px] w-[4%] self-center bg-blue-500/50 animate-[pulse_3623ms_ease-in-out_infinite]"></div>
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
                    <Typography variant="subtitle2" className="text-center text-shadow-lg/70 italic">GEST-XR no es sólo un objeto instrumental, sino un <span className="text-fuchsia-400">ecosistema perceptivo-musical</span>.</Typography>
                  </div>
                </div>
              </AnimationOnScroll>
              <div className="mt-4 flex flex-col gap-3 py-5 px-3 bg-black/50 rounded-xl">
                <Typography fontWeight="bold" className="text-center text-shadow-lg/70">La experiencia se define por:</Typography>
                <Stack gap={1}>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography className="text-shadow-lg/70">
                      Co-presencia del espacio físico (passthrough XR) y el espacio virtual reactivo
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography className="text-shadow-lg/70">
                      Integración entre gesto, sonido y visualización en tiempo real
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography className="text-shadow-lg/70">
                      Continuidad entre acción corporal y transformación del entorno audiovisual
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography className="text-shadow-lg/70">
                      Sensación de “habitar” el instrumento: el intérprete se sitúa dentro del campo sonoro y visual que él mismo genera
                    </Typography>
                  </div>
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
                  <Typography sx={{ typography: { xs: "h4", sm: "h3" } }} className="text-shadow-lg/70">Acerca de</Typography>
                  <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
                </Stack>
                <Stack gap={2}>
                  <Stack>
                    {/* <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">GEST-XR surge como fruto de un proyecto de investigación impulsado a través del <a href="https://artes.unc.edu.ar/centros/centros-de-transferencia/laboratorio-de-electroacustica-e-informatica-musical-l-e-i-m/" target="_blank">LEIM</a>, en la Facultad de Artes de la Universidad Nacional de Córdoba.</Typography>
                    <br></br> */}
                    {/* <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">El equipo interdisciplinario de investigación, conformado por estudiantes y docentes de la institución, se dedica a explorar las posibilidades de las tecnologías de realidad virtual y extendida para el desarrollo de experiencias narrativas interactivas, interfaces innovadoras y sistemas de audio en tiempo real orientados a la composición e interpretación musical.</Typography> */}
                    <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">
                      GEST-XR es un desarrollo realizado por PerceptionXR Studio, una startup con base en Barcelona—España y Córdoba—Argentina conformada por un equipo interdisciplinario de artistas y desarrolladores.
                    </Typography>
                    <Typography sx={{ textIndent: { xs: "0", md: "2em" } }} className="text-shadow-lg/70">
                      La primera versión de GEST para VR fue <span className="text-fuchsia-400">ganadora del segundo premio</span> de la novena edición de Exposición de proyectos de investigación aplicada y productos innovadores (UNC Innova).
                    </Typography>
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
                    <Typography variant="h6" className="text-shadow-lg/70">
                      Equipo de trabajo:
                    </Typography>
                    <Stack>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Dirección general y programación</span>: Sergio Patricio Poblete Barbero</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Programación, diseño 3D, diseño web y comunicación</span>: Dylan Martin</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Diseño de sonido y UI/UX</span>: Dante Demarchi Oliveira</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Música y SFX</span>: Marty Rolan</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Música y sonorización general</span>: Nahir Dahbar</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Música</span>: Emiliano Díaz</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Asesoría técnico-musical</span>: David Gallello</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Planeación y control/testeo del sistema de audio</span>: Mara Blasco</Typography>
                    </Stack>
                  </Stack>
                  <div className="h-[2px] w-[50%] self-center bg-blue-500/50 animate-[pulse_3623ms_ease-in-out_infinite]"></div>
                  <Stack gap={0.5}>
                    <Typography variant="h6" className="text-shadow-lg/70">
                      Empresas colaboradoras:
                    </Typography>
                    <Stack>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Diseño gráfico en Unreal Engine</span>: RollBox Games - Barcelona - España</Typography>
                      <Typography className="text-shadow-lg/70"><span className="font-bold">Programación, diseño 3D, diseño web y comunicación</span>: BB Studio Games - Córdoba - Argentina</Typography>
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
