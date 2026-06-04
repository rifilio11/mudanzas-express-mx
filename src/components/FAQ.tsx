import businessData from "@/lib/businessData";
import AnimatedSection from "./AnimatedSection";

export default function FAQ() {
  const preguntas = businessData.faq;

  return (
    <AnimatedSection>
    <section
      id="faq"
      className="py-24 bg-[#111827]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase font-semibold tracking-wider">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Preguntas Frecuentes
          </h2>

          <p className="text-gray-400 mt-4">
            Resolvemos las dudas más comunes de nuestros clientes.
          </p>
        </div>

        <div className="space-y-6">

          {preguntas.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.pregunta}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.respuesta}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
}
