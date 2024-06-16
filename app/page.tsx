import { Hero, Nav, About } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <About />
    </main>
  );
}
