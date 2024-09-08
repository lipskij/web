import { Hero, Nav, About } from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/moon.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-1 min-h-screen flex flex-col">
        <Nav />
        <Hero />
        {/* <About /> */}
      </div>
    </main>
  );
}
