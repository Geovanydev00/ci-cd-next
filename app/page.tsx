export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Projeto CI/CD com Next.js
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Aplicação desenvolvida para demonstrar integração contínua e deploy
          automatizado utilizando GitHub Actions, Jest, ESLint e Vercel.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <span className="border border-white px-4 py-2 rounded-full">
            Next.js
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            TypeScript
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            GitHub Actions
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            CI/CD
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            Vercel
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            Jest
          </span>
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/Geovanydev00/ci-cd-next"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Ver Repositório
          </a>
        </div>
      </section>
    </main>
  );
}