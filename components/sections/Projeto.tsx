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
    color: "from-primary-50 to-green-50",
    border: "border-primary-100",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Voluntariado com impacto real",
    desc: "Mobilizamos profissionais comprometidos que atuam de forma organizada e humanizada, gerando impacto direto na vida das pessoas atendidas.",
    icon: <ShieldCheck className="w-7 h-7" />,
    color: "from-primary-50 to-blue-50",
    border: "border-primary-100",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Formação que gera futuro",
    desc: "Capacitamos moradores das próprias comunidades, criando oportunidades de desenvolvimento, autonomia e inserção no mercado de trabalho.",
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-green-50 to-primary-50",
    border: "border-green-100",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Cooperação que amplia impacto",
    desc: "Fortalecemos a parceria entre instituições brasileiras e alemãs, ampliando a capacidade de atuação e garantindo continuidade ao projeto.",
    icon: <Globe2 className="w-7 h-7" />,
    color: "from-primary-50 to-graylight",
    border: "border-primary-100",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
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
      className="relative overflow-hidden min-h-0 py-0 block bg-graylight"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #1F5E99 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-14 pb-12 md:pt-20 md:pb-14">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
            O Projeto
          </span>
          <h2 className="text-h1 font-heading font-black text-grafite leading-tight mb-6">
            Um projeto que conecta Brasil e Alemanha pela saúde e pela dignidade dos mais vulneráveis.
          </h2>
          <p className="text-lg text-grayui leading-relaxed">
            O Odontomóvel é uma iniciativa de atendimento odontológico gratuito e ações sociais em saúde bucal, realizada no Brasil em cooperação entre a entidade alemã{" "}
            <strong className="text-primary-700">AZB-Plus</strong> e o{" "}
            <strong className="text-primary-700">Instituto Teuto-Brasileiro para Saúde Social (ITBSS)</strong>. O projeto atua com espírito humanitário, promovendo acesso a cuidados essenciais em comunidades com maior vulnerabilidade e menor oferta de serviços.
          </p>
        </motion.div>

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-7 border ${pilar.border} bg-gradient-to-br ${pilar.color} hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className={`relative z-10 w-14 h-14 rounded-2xl ${pilar.iconBg} border border-white/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-card`}>
                <span className={pilar.iconColor}>{pilar.icon}</span>
              </div>
              <h3 className="relative z-10 font-heading font-bold text-grafite text-lg mb-2 leading-snug">{pilar.title}</h3>
              <p className="relative z-10 text-grayui text-sm leading-relaxed">{pilar.desc}</p>
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
              Ampliar o alcance do projeto, fortalecer parcerias institucionais e consolidar o Odontomóvel como referência em saúde bucal itinerante e cooperação internacional, garantindo sua sustentabilidade e expansão contínua.
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
              style={{ background: "linear-gradient(145deg, #EBF2FA 0%, #EAFAF3 100%)" }}
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
    </Section>
  );
}
