"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MapPin, Truck, BookOpen, Users } from "lucide-react";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const steps = [
  {
    num: "01",
    title: "Seleção do território e articulação local",
    desc: "Em conjunto com parceiros locais, definimos a comunidade, logística e estrutura necessária para o período de atuação.",
    icon: <MapPin className="w-6 h-6" />,
    accent: "border-primary-200",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    bar: "bg-primary-500",
    photoLabel: "Reconhecimento do território",
  },
  {
    num: "02",
    title: "Instalação e início dos atendimentos",
    desc: "O caminhão funciona como consultório odontológico equipado, com equipe e protocolos de segurança.",
    icon: <Truck className="w-6 h-6" />,
    accent: "border-green-200",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    bar: "bg-green-500",
    photoLabel: "O caminhão instalado na comunidade",
  },
  {
    num: "03",
    title: "Ações educativas e mobilização comunitária",
    desc: "Além do atendimento, realizamos prevenção e orientações de saúde bucal.",
    icon: <BookOpen className="w-6 h-6" />,
    accent: "border-yellow-200",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    bar: "bg-yellow-500",
    photoLabel: "Ação educativa com a comunidade",
  },
  {
    num: "04",
    title: "Formação prática de moradores (ASB)",
    desc: "Moradores da comunidade podem ser treinados como auxiliares durante o período de atuação, recebendo certificado de participação.",
    icon: <Users className="w-6 h-6" />,
    accent: "border-green-200",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    bar: "bg-green-500",
    photoLabel: "Treinamento prático de moradores",
  },
];

export function ComoFunciona() {
  return (
    <Section
      id="como-funciona"
      className="relative overflow-hidden min-h-0 py-0 xl:py-0 block bg-white"
    >
      <div className="w-full">

        {/* ── Hero foto ponta a ponta ── */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/projeto-hero.jpeg')" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(11,28,46,0.82) 0%, rgba(40,70,121,0.65) 50%, rgba(11,28,46,0.90) 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#4DAD75]/60 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-bold tracking-[0.18em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DAD75] inline-block" />
              Metodologia
            </motion.span>

            <h2
              className="font-heading font-black text-white leading-[1.15] mb-8 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Um consultório completo sobre rodas, com atuação{" "}
              <span
                className="relative inline"
                style={{
                  background: "linear-gradient(90deg, #4DAD75, #7DD4A8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                organizada por ciclos.
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Cada ciclo vai além do atendimento clínico: o caminhão fica no território, cuida das pessoas e forma quem vive lá.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-[#4DAD75]/70 to-transparent"
            />
          </motion.div>

        </div>

      </div>

      <Container className="relative z-10 pt-10 pb-14 md:pt-12 md:pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`group relative overflow-hidden rounded-2xl border ${step.accent} bg-white hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 cursor-default`}
            >
              {/* Photo area */}
              <PhotoSlot
                label={step.photoLabel}
                className="w-full h-40 rounded-none rounded-t-2xl"
              />
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${step.iconBg} border ${step.accent} flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className={`text-4xl font-black ${step.iconColor} opacity-25`}>{step.num}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-grafite mb-3 leading-snug">{step.title}</h3>
                <p className="text-grayui text-sm leading-relaxed">{step.desc}</p>
                <div className={`absolute bottom-0 left-0 h-1 ${step.bar} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden xl:block h-px mb-8 origin-left"
          style={{ background: "linear-gradient(90deg, #284679, #F7CF4A, #4DAD75)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(135deg, #0C1625 0%, #1B3050 60%, #162843 100%)" }}
        >
          {/* Big decorative truck watermark */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-[0.07]">
            <Truck className="w-80 h-80 text-white" />
          </div>
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-green-500/15 border border-green-400/30 flex items-center justify-center shrink-0">
              <Truck className="w-10 h-10 text-green-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                O ITBSS atua por{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #4DAD75, #52BC84)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ciclos territoriais
                </span>
              </p>
              <p className="text-primary-300 max-w-2xl leading-relaxed">
                O caminhão fica por um período no território, atende a população, realiza ações educativas e apoia a formação local. Depois segue para uma nova região.
              </p>
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
