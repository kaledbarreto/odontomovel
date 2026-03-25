import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Inicio } from "@/components/sections/Inicio";
import { Projeto } from "@/components/sections/Projeto";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Impacto } from "@/components/sections/Impacto";
import { Apoiar } from "@/components/sections/Apoiar";
import { Voluntario } from "@/components/sections/Voluntario";
import { Formacao } from "@/components/sections/Formacao";
import { Transparencia } from "@/components/sections/Transparencia";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Inicio />
        <Projeto />
        <ComoFunciona />
        <Impacto />
        <Apoiar />
        <Voluntario />
        <Formacao />
        <Transparencia />
        <Contato />
        <Footer />
      </main>
    </>
  );
}
