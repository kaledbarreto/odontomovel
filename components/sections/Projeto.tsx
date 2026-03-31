"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, HeartPulse, GraduationCap, Globe2, User, Check } from "lucide-react";

const pilares = [
  {
    title: "Saúde que transforma territórios",
    desc: "Levamos atendimento odontológico gratuito e ações de prevenção diretamente às comunidades, reduzindo desigualdades no acesso à saúde.",
    icon: <HeartPulse className="w-7 h-7" />,
    bg: "#4DAD75",
  },
  {
    title: "Voluntariado com impacto real",
    desc: "Mobilizamos profissionais comprometidos que atuam de forma organizada e humanizada, gerando impacto direto na vida das pessoas atendidas.",
    icon: <ShieldCheck className="w-7 h-7" />,
    bg: "#284679",
  },
  {
    title: "Formação que gera futuro",
    desc: "Capacitamos moradores das próprias comunidades, criando oportunidades de desenvolvimento, autonomia e inserção no mercado de trabalho.",
    icon: <GraduationCap className="w-7 h-7" />,
    bg: "#4DAD75",
  },
  {
    title: "Cooperação que amplia impacto",
    desc: "Fortalecemos a parceria entre instituições brasileiras e alemãs, ampliando a capacidade de atuação e garantindo continuidade ao projeto.",
    icon: <Globe2 className="w-7 h-7" />,
    bg: "#284679",
  },
];

const principios = [
  "Cuidado com respeito e humanidade",
  "Ética e transparência nas ações",
  "Compromisso com as comunidades atendidas",
  "Uso responsável e eficiente dos recursos",
  "Cooperação e espírito de voluntariado",
];

export function Projeto() {
  return (
    <Section
      id="projeto"
      className="relative overflow-hidden min-h-0 py-0 xl:py-0 block bg-graylight"
    >
      <div className="w-full">

        {/* ── Hero foto ponta a ponta ── */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>

          {/* Camada de foto — troque por <Image> quando tiver o arquivo real */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/projeto-hero.jpeg')" }}
          />

          {/* Overlay artístico em gradiente */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(11,28,46,0.82) 0%, rgba(40,70,121,0.65) 50%, rgba(11,28,46,0.90) 100%)",
            }}
          />

          {/* Grain de textura sutil */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Linha decorativa à esquerda */}
          <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#4DAD75]/60 to-transparent" />

          {/* Conteúdo central */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-bold tracking-[0.18em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DAD75] inline-block" />
              O Projeto
            </motion.span>

            {/* Título principal */}
            <h2
              className="font-heading font-black text-white leading-[1.15] mb-8 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Um projeto que conecta Brasil e Alemanha pela saúde e pela{" "}
              <span
                className="relative inline"
                style={{
                  background: "linear-gradient(90deg, #4DAD75, #7DD4A8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                dignidade dos mais vulneráveis.
              </span>
            </h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Uma iniciativa humanitária de saúde bucal gratuita em cooperação entre{" "}
              <span className="text-white font-semibold">AZB-Plus</span> (Alemanha) e{" "}
              <span className="text-white font-semibold">ITBSS</span> (Brasil), levando cuidado e formação diretamente a quem precisa.
            </motion.p>

            {/* Divisor ornamental */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-[#4DAD75]/70 to-transparent"
            />
          </motion.div>

        </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #284679 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-14 pb-12 md:pt-20 md:pb-14">

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-7 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ backgroundColor: pilar.bg }}
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span style={{ color: "#F7CF4A" }}>{pilar.icon}</span>
              </div>
              <h3 className="relative z-10 font-heading font-bold text-white text-lg mb-2 leading-snug">{pilar.title}</h3>
              <p className="relative z-10 text-white/75 text-sm leading-relaxed">{pilar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Princípios + Governança */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* Princípios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-primary-500">Princípios que nos guiam</span>
            <h3 className="text-3xl font-heading font-black text-grafite leading-tight mb-8">
              Visão de futuro
            </h3>
            <p className="text-grayui mb-8 leading-relaxed">
              Ampliar o alcance do projeto, fortalecer parcerias institucionais e consolidar o ITBSS como referência em saúde bucal itinerante e cooperação internacional, garantindo sua sustentabilidade e expansão contínua.
            </p>
            <ul className="space-y-4">
              {principios.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                    <Check className="w-3.5 h-3.5 text-primary-500" />
                  </div>
                  <span className="text-grafite font-medium text-lg leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-bordercolor">
              <p className="text-xs uppercase tracking-widest text-grayui font-semibold mb-5">Parceiros institucionais</p>
              <div className="flex items-center gap-6">
                {["AZB-Plus", "ITBSS", "CRO-BA"].map((p) => (
                  <div key={p} className="px-5 py-2.5 rounded-xl border border-bordercolor bg-graylight text-sm font-bold text-grayui">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Governance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 border border-primary-100"
              style={{ background: "linear-gradient(145deg, #EEF1F7 0%, #EDF7F2 100%)" }}
            >
              <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-primary-500">Governança</span>
              <h3 className="text-2xl font-heading font-black text-grafite mb-2">Diretoria &amp; Conselho Fiscal</h3>
              <p className="text-grayui text-sm mb-8">Formalizados e atualizados em assembleia.</p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { name: "Nome Sobrenome", role: "Presidente" },
                  { name: "Nome Sobrenome", role: "Vice-presidente" },
                  { name: "Nome Sobrenome", role: "Conselheiro Fiscal" },
                  { name: "Nome Sobrenome", role: "Conselheiro Fiscal" },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-20 h-20 mb-3">
                      <div className="w-full h-full rounded-full bg-white border-2 border-primary-200 flex items-center justify-center shadow-card group-hover:border-primary-400 transition-colors">
                        <User className="w-9 h-9 text-primary-300" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white" />
                    </div>
                    <h4 className="font-bold text-grafite text-sm">{p.name}</h4>
                    <p className="text-xs text-grayui mt-0.5">{p.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      </div>
    </Section>
  );
}
