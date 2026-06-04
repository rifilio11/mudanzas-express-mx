import Image from "next/image";
import businessData from "@/lib/businessData";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const negocio = businessData.negocio;

  return (
    <AnimatedSection>
    <section
      id="contacto"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase font-semibold tracking-wider">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Solicita tu cotización
          </h2>

          <p className="text-gray-400 mt-4">
            Estamos listos para ayudarte con tu próxima mudanza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <Image
              src="/images/contact-image.png"
              alt="Contacto"
              width={1200}
              height={800}
              className="rounded-3xl w-full object-cover"
            />
          </div>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">
                Teléfono
              </h3>

              <p className="text-gray-400">
                {negocio.telefono}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">
                WhatsApp
              </h3>

              <a
                href={`https://wa.me/${negocio.whatsapp}`}
                target="_blank"
                className="text-orange-500 hover:text-orange-400"
              >
                Enviar WhatsApp
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">
                Dirección
              </h3>

              <p className="text-gray-400">
                {negocio.direccion}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
}
