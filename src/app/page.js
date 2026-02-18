import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-zinc-950">
      <div id="banner" className="absolute w-full left-0 top-0 flex-grow">
        <Image src="/img/screen1.jpeg" alt="banner" priority width={1599} height={834} className="w-full h-[50vh] md:h-auto object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent"></div>
      </div>
      <div id="banner" className="absolute w-full left-0 top-[100vh] md:top-[800px] flex-grow">
        <Image src="/img/gest1.jpeg" alt="banner" priority width={1122} height={584} className="w-full h-[75vh] md:h-auto object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
      </div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 md:py-32 px-8 md:py-16 sm:items-start">
        <div id="ppal" className="flex flex-col">
          <div id="cabeza" className="pb-8 relative">
            <div className="pb-3">
              <div className="absolute w-full h-full bg-black blur-xl opacity-25"></div>
              <div className="relative">
                <Typography sx={{ typography: { xs: "h2", sm: "h1" } }} className="text-shadow-lg/30">GEST<span className="text-blue-600">-</span>XR</Typography>
              </div>
              <div className="pl-2 relative">
                <Typography className="text-shadow-lg/30">Instrumento musical inmersivo basado en Realidad Extendida</Typography>
              </div>
            </div>
            <div className="h-[2px] w-full bg-fuchsia-500 relative"></div>
          </div>
          <div id="cuerpo" className="relative flex flex-col gap-9">
            <div id="descripcion">
              <Typography className="text-shadow-lg/30">
                GEST-XR es un instrumento musical inmersivo basado en Realidad Extendida (XR) que integra interacción gestual en tiempo real, síntesis sonora digital y respuesta algorítmica inteligente dentro de un entorno espacial virtual envolvente.
              </Typography>
            </div>
            <div id="lista-tecnica" className="py-5 px-4 bg-black/50 rounded-xl">
              <Stack spacing={2}>
                <div className="h-[2px] w-[4%] self-center bg-blue-500/40 animate-[pulse_3500ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-left">
                  <Typography variant="h6" fontWeight="bold">Interfaz performativa tridimensional</Typography>
                  <Typography>El gesto corporal (principalmente manos en seguimiento óptico) actúa como controlador continuo y discreto de eventos musicales</Typography>
                </div>

                <div className="h-[2px] w-[24%] self-center bg-blue-500/40 animate-[pulse_3000ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-right">
                  <Typography variant="h6" fontWeight="bold">Motor de síntesis y espacialización sonora</Typography>
                  <Typography>Es capaz de generar, transformar y distribuir sonido en un campo audiovisual inmersivo</Typography>
                </div>

                <div className="h-[2px] w-[42%] self-center bg-blue-500/40 animate-[pulse_2500ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-left">
                  <Typography variant="h6" fontWeight="bold">Entorno perceptivo expandido</Typography>
                  <Typography>La escena virtual (domo, objetos sonoros, visuales reactivos) constituye parte constitutiva del instrumento, no un mero soporte visual</Typography>
                </div>

                <div className="h-[2px] w-[24%] self-center bg-blue-500/40 animate-[pulse_3123ms_ease-in-out_infinite]"></div>

                <div className="flex flex-col gap1 text-center md:text-right">
                  <Typography variant="h6" fontWeight="bold">Sistema interactivo adaptativo</Typography>
                  <Typography>Registra la ejecución del intérprete, la formaliza como datos musicales y puede responder mediante procesos algorítmicos o de IA en diálogo temporal con el ejecutante</Typography>
                </div>

                <div className="h-[2px] w-[4%] self-center bg-blue-500/40 animate-[pulse_3623ms_ease-in-out_infinite]"></div>
              </Stack>
            </div>
            <div id="inmersion" className="flex flex-col gap-2">
              <div>
                <Image src="/img/innova_slider.jpeg" alt="casco_vr" priority width={1066} height={406} className="rounded-xl" />
              </div>
              <div>
                <Typography className="text-center text-shadow-lg/30">GEST-XR no es sólo un objeto instrumental, sino un <span className="text-fuchsia-400">ecosistema perceptivo-musical</span>.</Typography>
              </div>
              <div className="mt-4 flex flex-col gap-3 py-2 px-5 bg-black/50 rounded-xl">
                <Typography fontWeight="bold" className="text-center">La experiencia se define por:</Typography>
                <Stack gap={1}>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography>
                      Co-presencia del espacio físico (passthrough XR) y el espacio virtual reactivo
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography>
                      Integración entre gesto, sonido y visualización en tiempo real
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography>
                      Continuidad entre acción corporal y transformación del entorno audiovisual
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center m-2">
                      <div className="w-[6px] h-[6px] shrink-0 rounded-full bg-blue-600"></div>
                      <div className="absolute w-[10px] h-[10px] translate-x-[-25%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <Typography>
                      Sensación de “habitar” el instrumento: el intérprete se sitúa dentro del campo sonoro y visual que él mismo genera
                    </Typography>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
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
