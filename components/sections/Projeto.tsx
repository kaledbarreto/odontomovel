"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, HeartPulse, GraduationCap, Globe2, User, Check } from "lucide-react";

const pilares = [
  {
    title: "Saúde nos Territórios",
    desc: "Acesso democratizado a tratamentos nas próprias comunidades.",
    icon: <HeartPulse className="w-7 h-7" />,
    color: "from-red-50 to-orange-50",
    border: "border-red-100",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "Voluntariado de Impacto",
    desc: "Engajamento de profissionais de saúde do Brasil e da Alemanha.",
    icon: <ShieldCheck className="w-7 h-7" />,
    color: "from-blue-50 to-primary-50",
    border: "border-blue-100",
    iconBg: "bg-blue-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Formação para o Futuro",
    desc: "Capacitação local de moradores como Auxiliares em Saúde Bucal.",
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    title: "Cooperação para Ampliar",
    desc: "Parcerias técnicas e institucionais para crescimento sustentável.",
    icon: <Globe2 className="w-7 h-7" />,
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

const principios = [
  "Cuidado com a humanidade",
  "Ética e transparência radical",
  "Inclusão produtiva sustentável",
  "Expansão como modelo de referência para o Nordeste",
];

export function Projeto() {
  return (
    <Section
      id="projeto"
      className="relative overflow-hidden min-h-0 py-0 block"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
    >
      {/* ── Decorative blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #FFF0E6 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #E6EEF8 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-[300px] h-[300px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #FFF0E6 0%, transparent 70%)" }}
        />
        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #003366 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-4 pb-12 md:pt-4 md:pb-16">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/8 text-brand-orange text-sm font-semibold tracking-wide uppercase">
            O Projeto
          </span>
          <h2 className="text-h1 font-black text-primary-800 leading-tight mb-6">
            Conectando{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-orange">Brasil e Alemanha</span>
              {/* Underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,6 Q100,0 200,6" stroke="#FF6B00" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
            {" "}por saúde, dignidade e oportunidade
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            O Odontomóvel é uma iniciativa de cooperação humanitária entre a organização alemã{" "}
            <strong className="text-primary-700">AZB-Plus</strong> e o instituto brasileiro{" "}
            <strong className="text-primary-700">ITBSS</strong>. Nosso propósito: levar saúde bucal
            para populações desassistidas, resgatando autoestima através de um consultório odontológico itinerante de alto padrão.
          </p>
        </motion.div>

        {/* ── Pilares ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl p-7 border ${pilar.border} bg-gradient-to-br ${pilar.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default`}
            >
              {/* Corner circle decoration */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/60 group-hover:scale-150 transition-transform duration-500" />

              <div className={`relative z-10 w-14 h-14 rounded-2xl ${pilar.iconBg} border border-white/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <span className={pilar.iconColor}>{pilar.icon}</span>
              </div>
              <h3 className="relative z-10 font-bold text-primary-800 text-lg mb-2 leading-snug">{pilar.title}</h3>
              <p className="relative z-10 text-neutral-600 text-sm leading-relaxed">{pilar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Princípios + Equipe ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* Princípios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-brand-orange">Nossa visão</span>
            <h3 className="text-3xl font-black text-primary-800 leading-tight mb-8">
              Princípios que guiam cada missão
            </h3>
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
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                  <span className="text-neutral-700 font-medium text-lg leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Partnership logos placeholder */}
            <div className="mt-10 pt-8 border-t border-neutral-100">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-5">Parceiros institucionais</p>
              <div className="flex items-center gap-6">
                {["AZB-Plus", "ITBSS", "CRO-BA"].map((p) => (
                  <div key={p} className="px-5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-neutral-500">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Governance / Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-10 border border-primary-100"
              style={{ background: "linear-gradient(145deg, #f0f5ff 0%, #e6eef8 100%)" }}
            >
              {/* Decorative arc */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-20"
                style={{ background: "radial-gradient(circle at top right, #003366, transparent 70%)" }}
              />

              <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-primary-500">Governança</span>
              <h3 className="text-2xl font-black text-primary-800 mb-8">Diretoria &amp; Conselho Fiscal</h3>

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
                      <div className="w-full h-full rounded-full bg-white border-2 border-primary-200 flex items-center justify-center shadow-md group-hover:border-brand-orange/40 transition-colors">
                        <User className="w-9 h-9 text-primary-300" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-orange border-2 border-white" />
                    </div>
                    <h4 className="font-bold text-primary-800 text-sm">{p.name}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{p.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
