import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h2>Navbar</h2> */}
      <section className="min-h-screen grid place-content-center">
        <h1 className="text-8xl font-bold   border-2 border-red-400 ">Kavya</h1>
      </section>
      <section className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-5 min-h-screen place-content-center px-32">
        <div className="border-2 border-violet-800 rounded-2xl p-4 text-center font-medium">Javscript</div>
        <div>React</div>
        <div>Tailwind</div>
        <div>Next</div>
        <div>Node</div>
      </section>
    </div>
  );
}
