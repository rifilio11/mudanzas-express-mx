import Image from "next/image";
import businessData from "@/lib/businessData";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const negocio = businessData.negocio;

  return (
    <AnimatedSection>       
    <section
      id="nosotros"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <Image
              src="/images/about-image.png"
              alt="Nosotros"
              width={1200}
              height={800}
              className="rounded-3xl object-cover w-full"
            />
          </div>

          <div>

            <span className="text-orange-500 font-semibold uppercase tracking-wider">
              Nosotros
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              {negocio.nombre}
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              {negocio.descripcion}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              {negocio.ventajas.map(
                (ventaja: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4"
                  >
                    <span className="text-white">
                      ✓ {ventaja}
                    </span>
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
}
