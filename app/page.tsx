import { Hero, Nav, About } from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Nav />
      <Hero />
      {/* <About /> */}
    </main>
  );
}
