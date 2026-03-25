"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FileText, Download, ShieldCheck, ExternalLink } from "lucide-react";

const docs = [
  {
    title: "Estatuto ITBSS",
    desc: "Documento oficial que rege as atividades do Instituto de Tecnologias Sociais aplicadas a Saúde.",
    tag: "Institucional",
    tagColor: "bg-blue-50 text-blue-600 border-blue-100",
    icon: <FileText className="w-7 h-7" />,
    iconBg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    title: "Certificado CRO-BA",
    desc: "Registro regular junto ao Conselho Regional de Odontologia da Bahia.",
    tag: "Regulatório",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    icon: <ShieldCheck className="w-7 h-7" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Relatório Anual 2024",
    desc: "Prestação de contas completa com impacto, investimentos e próximos passos do projeto.",
    tag: "Financeiro",
    tagColor: "bg-amber-50 text-amber-600 border-amber-100",
    icon: <ExternalLink className="w-7 h-7" />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Estatuto AZB-Plus",
    desc: "Documentação da entidade parceira alemã responsável pela cooperação internacional.",
    tag: "Parceria",
    tagColor: "bg-purple-50 text-purple-600 border-purple-100",
    icon: <FileText className="w-7 h-7" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export function Transparencia() {
  return (
    <Section
      id="transparencia"
      className="relative overflow-hidden py-0"
      style={{ background: "linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%)" }}
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #e6eef8 0%, transparent 70%)" }}
        />
        {/* Dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #003366 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative z-10 py-28 md:py-36">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Transparência
          </span>
          <h2 className="text-h1 font-black text-primary-800 leading-tight mb-5">
            A confiança é a base de{" "}
            <span className="text-brand-orange">grandes transformações</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Disponibilizamos publicamente toda nossa documentação oficial para garantir
            total conformidade com parceiros, patrocinadores e as comunidades atendidas.
          </p>
        </motion.div>

        {/* Document cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          {docs.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-default"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: "radial-gradient(circle at top left, rgba(255,107,0,0.04), transparent 70%)" }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${doc.iconBg} flex items-center justify-center ${doc.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block mb-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold ${doc.tagColor}`}>
                      {doc.tag}
                    </span>
                    <h3 className="text-xl font-bold text-primary-800 leading-tight">{doc.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">{doc.desc}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-orange-600 group/link transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover/link:bg-brand-orange/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </span>
                  Baixar PDF
                </a>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-orange to-primary-500 transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-primary-100 p-8 text-center"
          style={{ background: "linear-gradient(135deg, #f0f5ff 0%, #fff7f0 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { label: "CNPJ Ativo", value: "Regularizado" },
              { label: "CRO-BA", value: "Certificado" },
              { label: "Balanços", value: "Públicos" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="font-bold text-primary-800">{item.label}:</span>
                <span className="text-emerald-600 font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
