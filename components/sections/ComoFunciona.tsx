"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MapPin, Truck, BookOpen, Users } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Seleção do Território",
    desc: "Mapeamento em parceria com lideranças comunitárias sobre as áreas de maior vulnerabilidade.",
    icon: <MapPin className="w-6 h-6" />,
    color: "bg-blue-500",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  {
    num: "02",
    title: "Instalação e Atendimentos",
    desc: "Odontomóvel se instala no local por um período, realizando triagem e tratamentos gratuitos.",
    icon: <Truck className="w-6 h-6" />,
    color: "bg-brand-orange",
    light: "bg-orange-50",
    border: "border-orange-200",
    text: "text-brand-orange",
  },
  {
    num: "03",
    title: "Ações Educativas",
    desc: "Palestras lúdicas de higiene bucal e prevenção nas escolas e praças da comunidade.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-emerald-500",
    light: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
  },
  {
    num: "04",
    title: "Formação ASB",
    desc: "Moradores locais são capacitados com bolsa-auxílio para atuarem como Auxiliares em Saúde Bucal.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-primary-500",
    light: "bg-primary-50",
    border: "border-primary-200",
    text: "text-primary-600",
  },
];

export function ComoFunciona() {
  return (
    <Section
      id="como-funciona"
      className="relative overflow-hidden min-h-0 py-0 block"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f5ff 100%)" }}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #e6eef8 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #FFF0E6 0%, transparent 70%)" }}
        />
        {/* Large faint number watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-neutral-100 select-none pointer-events-none leading-none"
          aria-hidden
        >
          04
        </div>
      </div>

      <Container className="relative z-10 pt-12 pb-28 md:pt-16 md:pb-36">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Metodologia
          </span>
          <h2 className="text-h1 font-black text-primary-800 leading-tight mb-5">
            Um consultório completo{" "}
            <span className="text-brand-orange">sobre rodas</span>{" "}
            em ciclos territoriais
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Nossa metodologia garante intervenções profundas que deixam um legado
            educacional e profissional — não apenas tratamento clínico.
          </p>
        </motion.div>

        {/* Steps — large cards with number */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`group relative overflow-hidden rounded-3xl border ${step.border} bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-default`}
            >
              {/* Large step number — background watermark */}
              <div
                className="absolute -top-4 -right-3 text-8xl font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                style={{ color: `var(--step-color-${idx})`, opacity: 0.06 }}
                aria-hidden
              >
                {step.num}
              </div>

              <div className="relative z-10 p-7">
                {/* Icon + number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${step.light} border ${step.border} flex items-center justify-center ${step.text} group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className={`text-4xl font-black ${step.text} opacity-25`}>{step.num}</span>
                </div>

                <h3 className="text-xl font-bold text-primary-800 mb-3 leading-snug">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 h-1 ${step.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connector timeline (desktop) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden xl:block h-px mb-16 origin-left"
          style={{ background: "linear-gradient(90deg, #003366, #FF6B00, #003366)" }}
        />

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center border border-primary-100"
          style={{ background: "linear-gradient(135deg, #f0f5ff 0%, #fff7f0 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #003366 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
              Cada ciclo dura entre{" "}
              <span className="text-brand-orange">2 a 4 semanas</span>
            </p>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Garantindo tempo suficiente para tratamento, educação e formação profissional local.
            </p>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
