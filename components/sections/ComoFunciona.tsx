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
    accent: "border-primary-200",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    bar: "bg-primary-500",
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
      className="relative overflow-hidden min-h-0 py-0 block bg-white"
    >
      <Container className="relative z-10 pt-10 pb-14 md:pt-12 md:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Metodologia
          </span>
          <h2 className="text-h1 font-heading font-black text-grafite leading-tight mb-5">
            Um consultório completo sobre rodas, com atuação organizada por ciclos.
          </h2>
          <p className="text-lg text-grayui leading-relaxed">
            Nossa metodologia garante intervenções profundas que deixam um legado educacional e profissional — não apenas tratamento clínico.
          </p>
        </motion.div>

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
          style={{ background: "linear-gradient(90deg, #1F5E99, #1FAF7A, #1F5E99)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(135deg, #0A1C30 0%, #153E6A 60%, #0D3558 100%)" }}
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
                O Odontomóvel atua por{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #1FAF7A, #3DC98D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ciclos territoriais
                </span>
              </p>
              <p className="text-primary-300 max-w-2xl leading-relaxed">
                Permanecendo por um período no território para atender a população, realizar ações educativas e apoiar a formação prática local — e, em seguida, segue para uma nova região.
              </p>
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
