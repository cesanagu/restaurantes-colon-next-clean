import Image from 'next/image';

export default function CafeColon() {
  return (
    <main className="bg-white text-gray-900">
      {/* Encabezado */}
      <section className="relative w-full h-96">
        <Image
          src="https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Café Colón"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">Café Colón</h1>
        </div>
      </section>

      {/* Sección de descripción intercalada */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        {/* Bloque 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <p className="text-lg leading-relaxed">
              Café Colón ofrece un espacio elegante para disfrutar de buffets internacionales, desayunos completos y cenas temáticas. Su ambiente cálido y atención personalizada lo hacen el lugar ideal para cada comida.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-48">
            <Image
              src="https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Buffet internacional"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="md:w-1/2 md:pl-6 mb-6 md:mb-0">
            <p className="text-lg leading-relaxed">
              Cada plato combina ingredientes frescos y locales, fusionando tradición e innovación. Desayunos, almuerzos y cenas temáticas que te transportan por sabores de todo el mundo.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-48">
            <Image
              src="https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Desayuno completo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Bloque 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <p className="text-lg leading-relaxed">
              Ideal para reuniones de negocio, familias o momentos especiales, Café Colón garantiza una experiencia culinaria inolvidable en un entorno acogedor y moderno.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-48">
            <Image
              src="https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cena temática"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

