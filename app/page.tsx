import { Hero, Nav, About } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-900">
      <Nav />
      <Hero />
      {/* <About /> */}
    </main>
  );
}
