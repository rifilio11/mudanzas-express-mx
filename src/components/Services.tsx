import businessData from "@/lib/businessData";
import AnimatedSection from "./AnimatedSection";

export default function Services() {
  const servicios = businessData.negocio.servicios;

  return (
  <AnimatedSection>
    <section
      id="servicios"
      className="py-24 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Servicios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Soluciones para cada necesidad
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Servicios diseñados para realizar tu mudanza de forma rápida,
            segura y profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-bold text-white">
                {servicio}
              </h3>

              <p className="text-gray-400 mt-3">
                Servicio profesional realizado por personal capacitado.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
</AnimatedSection>
);
}
