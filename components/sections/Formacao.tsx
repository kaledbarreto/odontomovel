"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FileBadge, Briefcase, TrendingUp, Users2, ChevronRight } from "lucide-react";

const benefits = [
  { icon: <Briefcase className="w-5 h-5" />, text: "Bolsa-auxílio durante os ciclos do projeto" },
  { icon: <FileBadge className="w-5 h-5" />, text: "Certificado de Participação chancela institucional" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Geração de renda em mercado local de saúde" },
  { icon: <Users2 className="w-5 h-5" />, text: "Rede de apoio contínuo pós-formação" },
];

export function Formacao() {
  return (
    <Section
      id="formacao-asb"
      className="relative overflow-hidden py-0"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #FFF0E6 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #e6eef8 0%, transparent 70%)" }}
        />
        {/* Diagonal lines */}
        <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04]" viewBox="0 0 400 400" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={i * 40 - 100}
              y1="0"
              x2={i * 40 + 200}
              y2="400"
              stroke="#003366"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container className="relative z-10 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-600 text-sm font-semibold tracking-wide uppercase">
              Formação ASB
            </span>
            <h2 className="text-h1 font-black text-primary-800 leading-tight mb-6">
              Formação prática local e{" "}
              <span className="text-brand-orange">inclusão produtiva</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              O projeto investe no desenvolvimento de capacidades locais. Formamos moradores das
              comunidades como <strong className="text-primary-700">Auxiliares em Saúde Bucal (ASB)</strong>,
              abordando na prática biossegurança e assistência direta ao paciente.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-10">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-orange/20 hover:bg-orange-50/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <span className="text-neutral-700 font-medium">{b.text}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="contato" smooth={true} duration={500}>
              <Button size="lg" className="group">
                Quero propor uma parceria educacional
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: Visual certificate card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Stacked card effect */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-primary-100 bg-primary-50/50" />
            <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl border border-orange-100 bg-orange-50/30" />

            {/* Main card */}
            <div
              className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl"
              style={{ background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)" }}
            >
              {/* Card header band */}
              <div
                className="h-3 w-full"
                style={{ background: "linear-gradient(90deg, #003366, #FF6B00)" }}
              />

              <div className="p-8 md:p-10 text-center">
                {/* Logo area */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-brand-orange/20 bg-gradient-to-br from-orange-50 to-primary-50 flex items-center justify-center shadow-lg">
                    <FileBadge className="w-10 h-10 text-brand-orange" />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">Instituto ITBSS &amp; AZB-Plus</div>
                <h3 className="text-2xl font-black text-primary-800 mb-1">Certificado de Participação</h3>
                <div className="text-sm text-neutral-500 mb-8">Auxiliar em Saúde Bucal — Programa Odontomóvel</div>

                {/* Decorative lines */}
                <div className="space-y-2 mb-8">
                  {[75, 60, 85].map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-neutral-100 mx-auto" style={{ width: `${w}%` }} />
                  ))}
                </div>

                {/* Seal */}
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary-800 flex items-center justify-center mb-1.5 shadow-lg">
                      <span className="text-white text-xs font-black">CRO</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium">RECONHECIDO</span>
                  </div>
                  <div className="w-px h-10 bg-neutral-200" />
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-brand-orange/40 flex items-center justify-center mb-1.5">
                      <span className="text-brand-orange text-xs font-black">ITBSS</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium">EMITIDO</span>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="bg-neutral-50 border-t border-neutral-100 px-8 py-4 text-center">
                <p className="text-xs text-neutral-500 font-medium">
                  Apoiado por conselhos e instituições educacionais parceiras
                </p>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-white border border-emerald-100 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-neutral-700">85 moradores formados</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
