import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h2>Navbar</h2> */}
      <section className="min-h-screen grid place-content-center">
        <h1 className="text-8xl font-bold   border-2 border-red-400 ">Kavya</h1>
      </section>
      <section className="flex justify-evenly items-center  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-10 px-32">
          <Card name={"Javascript"} />
          <Card name={"React"} />
          <Card name={"Next"} />
          <Card name={"Tailwind"} />
          <Card name={"Node"} />
        </div>
      </section>
    </div>
  );
}
