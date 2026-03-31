"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";
import { ArrowDown, HeartHandshake, Stethoscope, BookOpen, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Inicio() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0C1625 0%, #13233A 40%, #1B3050 70%, #223C67 100%)" }}
      >
        {/* Background blobs */}
        <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #4DAD75 0%, transparent 65%)" }}
          />
          <div
            className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #284679 0%, transparent 70%)" }}
          />
        </motion.div>

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── Content ── */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16">
          <Container>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

              {/* Left: text */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10"
                >
                  <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Saúde Bucal Gratuita · Brasil</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading font-black leading-[1.05] tracking-tight mb-8 text-white"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                >
                  ITBSS:{" "}
                  <span style={{
                    background: "linear-gradient(90deg, #4DAD75 0%, #52BC84 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    saúde bucal gratuita
                  </span>{" "}
                  onde ela é mais necessária.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-lg md:text-xl text-primary-200 mb-12 max-w-2xl leading-relaxed"
                >
                  Um consultório odontológico sobre rodas que leva atendimento, prevenção e formação de mão de obra local para comunidades em situação de vulnerabilidade no Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-14"
                >
                  <Link to="apoio" smooth={true} duration={600}>
                    <Button size="lg" className="w-full sm:w-auto">
                      Quero apoiar o projeto
                    </Button>
                  </Link>
                  <Link to="voluntario" smooth={true} duration={600}>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white text-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                      Quero ser voluntário(a)
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </motion.div>

                {/* Stat pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { icon: <Stethoscope className="w-4 h-4" />, value: "+X", label: "Atendimentos" },
                    { icon: <HeartHandshake className="w-4 h-4" />, value: "XX", label: "Voluntários" },
                    { icon: <BookOpen className="w-4 h-4" />, value: "XX", label: "Formados ASB" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <span className="text-green-400">{stat.icon}</span>
                      <div>
                        <div className="text-white font-black text-sm leading-none">{stat.value}</div>
                        <div className="text-primary-300 text-xs mt-0.5">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: photo mosaic */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden xl:grid grid-cols-2 gap-3 h-[480px]"
              >
                {/* Tall left column */}
                <div className="flex flex-col gap-3">
                  <PhotoSlot
                    dark
                    label="O ITBSS em ação"
                    className="flex-[1.6]"
                  />
                  <PhotoSlot
                    dark
                    label="Atendimento comunitário"
                    className="flex-1"
                  />
                </div>
                {/* Right column offset */}
                <div className="flex flex-col gap-3 mt-10">
                  <PhotoSlot
                    dark
                    label="Equipe de voluntários"
                    className="flex-1"
                  />
                  <PhotoSlot
                    dark
                    label="Formação ASB"
                    className="flex-[1.4]"
                  />
                </div>
              </motion.div>

            </div>
          </Container>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 flex justify-center pb-10"
        >
          <Link to="projeto" smooth={true} duration={600} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-primary-400 hover:text-white transition-colors"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Conheça o projeto</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #0C1625)" }}
        />
      </section>

      {/* ── O QUE FAZEMOS — 3 cards ─────────────────────────────── */}
      <section className="relative pt-16 pb-0 bg-[#0C1625] overflow-hidden">
        <Container className="relative z-10 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">O que fazemos</h2>
            <p className="text-primary-300">Três frentes de atuação que transformam realidades</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-green-400" />,
                title: "Atendimento odontológico gratuito",
                desc: "Levamos procedimentos e cuidados essenciais para quem tem pouco ou nenhum acesso a serviços odontológicos.",
                photoLabel: "Atendimento odontológico",
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-green-400" />,
                title: "Voluntariado profissional",
                desc: "Dentistas e profissionais da saúde somam forças em missões organizadas, com impacto real e mensurável.",
                photoLabel: "Equipe voluntária em missão",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-400" />,
                title: "Formação local (ASB)",
                desc: "Durante a permanência do caminhão na comunidade, treinamos moradores como auxiliares de saúde bucal, fortalecendo oportunidades e autonomia.",
                photoLabel: "Formação de moradores ASB",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary-400/30 transition-all duration-500 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Photo area */}
                <PhotoSlot
                  dark
                  label={card.photoLabel}
                  className="w-full h-44 rounded-none rounded-t-2xl"
                />
                {/* Text */}
                <div className="p-7">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-primary-300 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
