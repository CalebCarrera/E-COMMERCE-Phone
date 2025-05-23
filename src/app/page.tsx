import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24
      xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div
              className="relative mx-auto text-center lg:text-left 
        flex flex-col items-center lg:items-start"
            >
              <div className="absolute w-20 left-0 -top-20 hidden lg:block">
                <img
                  src="./snake-1.png"
                  className="w-full"
                  alt="Serpiente feliz"
                />
              </div>
              <h1
                className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight 
          text-gray-900 text-5xl md:text-6xl lg:text-7xl"
              >
                Tu imagen en una{" "}
                <span className="bg-green-600 px-2 text-white">funda</span>{" "}
                personalizada
              </h1>
              <p
                className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left
          text-balance md:text-wrap "
              >
                Captura tus recuerdos favoritos, {""}
                <span className="font-semibold"> con tu propia funda </span>
                casecobra te permite proteger tus recuerdos, no solo la funda de
                tu teléfono
              </p>
              <ul
                className="mt-8 space-y-8 text-left font-medium flex
          flex-col items-center sm:items-start"
              >
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Material duradero y de alta calidad.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    garantía de impresión
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modelos de iPhone modernos compatibles
                  </li>
                </div>
              </ul>

              <div
                className="mt-12 flex flex-col sm:flex-row items-center 
          sm:items-start gap-5"
              >
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2
              ring-slate-100"
                    src="./user/user-1.png"
                    alt="Foto de perfil de usuario 1"
                  ></img>
                  <img
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2
              ring-slate-100"
                    src="./user/user-2.png"
                    alt="Foto de perfil de usuario 2"
                  ></img>
                  <img
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2
              ring-slate-100"
                    src="./user/user-3.png"
                    alt="Foto de perfil de usuario 3"
                  ></img>
                  <img
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2
              ring-slate-100"
                    src="./user/user-4.jpg"
                    alt="Foto de perfil de usuario 4"
                  ></img>
                  <img
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2
              ring-slate-100"
                    src="./user/user-5.jpg"
                    alt="Foto de perfil de usuario 5"
                  ></img>
                </div>
                <div
                  className="flex flex-col justify-between 
            items-center sm:items-start"
                >
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> clientes
                    felices
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-full lg:col-span-1 w-full flex justify-center 
      px-8 sm:px-0 md:mt-32 lg:mx-0 lg:mt-20 h-fit"
          >
            <div className="relative md:max-w-xl">
              <img
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                src="/your-image.png"
                alt="Funda de teléfono personalizada"
              />
              <img
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
                alt="Funda de teléfono personalizada"
              />
              <Phone className="w-64" imgSrc="/Fondos/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
