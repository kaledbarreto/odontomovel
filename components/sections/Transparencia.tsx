"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FileText, Download, ShieldCheck } from "lucide-react";

const docs = [
  {
    title: "Estatuto Social do ITBSS",
    desc: "Documento que define a estrutura, finalidade e normas do Instituto Teuto-Brasileiro para Saúde Social.",
    tag: "Institucional",
    tagColor: "bg-primary-50 text-primary-600 border-primary-100",
    icon: <FileText className="w-7 h-7" />,
    iconBg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    title: "Certificado/registro CRO-BA",
    desc: "Registro ativo junto ao Conselho Regional de Odontologia da Bahia, que confirma a regularidade técnica das atividades.",
    tag: "Regulatório",
    tagColor: "bg-green-50 text-green-600 border-green-100",
    icon: <ShieldCheck className="w-7 h-7" />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export function Transparencia() {
  return (
    <Section
      id="transparencia"
      className="relative overflow-hidden py-0 bg-graylight"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #284679 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative z-10 py-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Transparência
          </span>
          <h2 className="text-h1 font-heading font-black text-grafite leading-tight mb-5">
            Transparência e formalização institucional.
          </h2>
          <p className="text-lg text-grayui leading-relaxed">
            Acreditamos que projetos sociais fortes se sustentam com confiança, prestação de contas e clareza institucional.
          </p>
        </motion.div>

        {/* Document cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">
          {docs.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-bordercolor bg-white p-7 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${doc.iconBg} flex items-center justify-center ${doc.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block mb-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold ${doc.tagColor}`}
                    >
                      {doc.tag}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-grafite leading-tight">
                      {doc.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-grayui leading-relaxed mb-6">{doc.desc}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Download className="w-4 h-4" />
                  </span>
                  Baixar PDF
                </a>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-green-500 transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl max-w-3xl mx-auto"
          style={{ background: "linear-gradient(135deg, #EEF1F7 0%, #EDF7F2 100%)" }}
        >
          <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-yellow-500 to-green-500" />
          <div className="p-8 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-500 mb-8">
              Credenciais institucionais verificadas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              {[
                { label: "CNPJ Ativo", value: "Regularizado", icon: <ShieldCheck className="w-6 h-6" /> },
                { label: "CRO-BA", value: "Certificado", icon: <FileText className="w-6 h-6" /> },
                { label: "Balanços", value: "Públicos", icon: <ShieldCheck className="w-6 h-6" /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-green-200 flex items-center justify-center text-green-600 shadow-card group-hover:border-green-400 group-hover:shadow-elevated transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-grayui uppercase tracking-wide">{item.label}</div>
                    <div className="text-sm font-bold text-green-600 mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
