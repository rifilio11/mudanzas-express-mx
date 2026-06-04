export default function StorySection() {
  return (
    <section
      id="proceso"
      className="relative py-24 bg-[#0B1120] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Cómo trabajamos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Mudanzas sin estrés
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-4">
            Nos encargamos de todo el proceso para que tu mudanza sea rápida,
            segura y organizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/story-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="space-y-8">

            <div>
              <div className="text-orange-500 text-sm font-bold uppercase mb-2">
                Problema
              </div>

              <h3 className="text-2xl font-bold text-white">
                Mudanzas improvisadas y riesgosas
              </h3>

              <p className="text-gray-400 mt-3">
                Muebles dañados, retrasos y falta de organización generan
                estrés y pérdidas de tiempo.
              </p>
            </div>

            <div>
              <div className="text-orange-500 text-sm font-bold uppercase mb-2">
                Solución
              </div>

              <h3 className="text-2xl font-bold text-white">
                Equipo profesional y logística eficiente
              </h3>

              <p className="text-gray-400 mt-3">
                Nuestro personal capacitado protege, transporta y entrega
                tus pertenencias con total seguridad.
              </p>
            </div>

            <div>
              <div className="text-orange-500 text-sm font-bold uppercase mb-2">
                Resultado
              </div>

              <h3 className="text-2xl font-bold text-white">
                Mudanza segura, rápida y sin preocupaciones
              </h3>

              <p className="text-gray-400 mt-3">
                Llega a tu nuevo hogar u oficina con la tranquilidad de
                saber que todo llegó intacto.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
