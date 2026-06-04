import businessData from "@/lib/businessData";

export default function Footer() {
  const negocio = businessData.negocio;

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {negocio.nombre}
            </h3>

            <p className="text-gray-400 mt-4">
              {negocio.slogan}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Navegación
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Contacto
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>{negocio.telefono}</li>
              <li>{negocio.direccion}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} {negocio.nombre}
          </p>

          <p className="text-orange-500 mt-2">
            Web hecha por Zindexia
          </p>

        </div>

      </div>
    </footer>
  );
}
