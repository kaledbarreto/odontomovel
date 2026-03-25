"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";
import { ArrowDown, Heart, Globe2, Stethoscope, HeartHandshake, BookOpen, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// ── Floating particle ────────────────────────────────────────────────
function Particle({ x, y, size, delay, duration }: { x: string; y: string; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-orange/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Live stat pill ────────────────────────────────────────────────────
function StatPill({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <span className="text-brand-orange">{icon}</span>
      <div>
        <div className="text-white font-black text-sm leading-none">{value}</div>
        <div className="text-primary-300 text-xs mt-0.5">{label}</div>
      </div>
    </motion.div>
  );
}

const particles = [
  { x: "8%",  y: "20%", size: 6,  delay: 0,   duration: 4 },
  { x: "15%", y: "65%", size: 10, delay: 1,   duration: 6 },
  { x: "25%", y: "40%", size: 4,  delay: 2,   duration: 5 },
  { x: "70%", y: "15%", size: 8,  delay: 0.5, duration: 5 },
  { x: "80%", y: "55%", size: 5,  delay: 1.5, duration: 4 },
  { x: "90%", y: "30%", size: 12, delay: 0.8, duration: 7 },
  { x: "55%", y: "75%", size: 6,  delay: 2.5, duration: 5 },
  { x: "40%", y: "85%", size: 4,  delay: 1.2, duration: 6 },
];

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
        style={{ background: "linear-gradient(160deg, #000A14 0%, #001429 40%, #001E3D 70%, #002244 100%)" }}
      >
        {/* Parallax background blobs */}
        <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
          {/* Giant orange glow — top right */}
          <div
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 65%)" }}
          />
          {/* Blue glow — bottom left */}
          <div
            className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #003366 0%, transparent 70%)" }}
          />
          {/* Small accent — center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
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

        {/* Diagonal accent line */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-px h-full opacity-10"
            style={{ background: "linear-gradient(to bottom, transparent, #FF6B00 40%, transparent)", left: "65%" }}
          />
        </div>

        {/* Floating particles */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* ── Content ── */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16">
          <Container>
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

              {/* Left: Main copy */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10"
                >
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Saúde Bucal Gratuita · Brasil</span>
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-black leading-[1.05] tracking-tight mb-8"
                  style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
                >
                  <span className="text-white block">Odontomóvel:</span>
                  <span className="block" style={{
                    background: "linear-gradient(90deg, #FF6B00 0%, #FF9A3C 50%, #FF6B00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    sorrisos onde
                  </span>
                  <span className="text-white block">mais importam</span>
                </motion.h1>

                {/* Sub */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-lg md:text-xl text-primary-300 mb-12 max-w-xl leading-relaxed"
                >
                  Um consultório sobre rodas que transforma comunidades vulneráveis com tratamentos gratuitos, 
                  educação e formação profissional em saúde bucal.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-14"
                >
                  <Link to="apoio" smooth={true} duration={600}>
                    <Button size="lg" className="w-full sm:w-auto group shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] transition-shadow">
                      Quero Apoiar
                      <Heart className="w-5 h-5 ml-2 group-hover:scale-125 transition-transform fill-white" />
                    </Button>
                  </Link>
                  <Link to="voluntario" smooth={true} duration={600}>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white text-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                      Ser Voluntário
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </motion.div>

                {/* Live stats pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  <StatPill icon={<Stethoscope className="w-4 h-4" />}     value="45.000+"  label="Atendimentos" />
                  <StatPill icon={<Globe2 className="w-4 h-4" />}          value="25"       label="Municípios" />
                  <StatPill icon={<HeartHandshake className="w-4 h-4" />}  value="350+"     label="Voluntários" />
                </motion.div>
              </div>

              {/* Right: Visual card stack */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden xl:block"
              >
                {/* Background card (decorative) */}
                <div
                  className="absolute -top-6 -right-6 w-full h-full rounded-3xl border border-white/5"
                  style={{ background: "rgba(255,107,0,0.06)" }}
                />
                <div
                  className="absolute -top-3 -right-3 w-full h-full rounded-3xl border border-white/8"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                />

                {/* Main card */}
                <div
                  className="relative rounded-3xl overflow-hidden border border-white/10"
                  style={{ background: "linear-gradient(145deg, rgba(255,107,0,0.1) 0%, rgba(0,20,41,0.8) 100%)" }}
                >
                  {/* Video/Image placeholder */}
                  <div className="aspect-[4/5] flex flex-col items-center justify-center p-10 relative">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-64 h-64 rounded-full border border-brand-orange/10 animate-ping" style={{ animationDuration: "3s" }} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 rounded-full border border-brand-orange/15" />
                    </div>

                    {/* Center icon */}
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-xl"
                      style={{ background: "linear-gradient(135deg, #FF6B00, #FF9A3C)" }}
                    >
                      <Stethoscope className="w-14 h-14 text-white" />
                    </motion.div>

                    <h3 className="text-white font-bold text-2xl mb-2 text-center">Missão Ativa</h3>
                    <p className="text-primary-300 text-sm text-center max-w-[200px] mb-8">
                      Atendendo comunidades do Nordeste brasileiro
                    </p>

                    {/* Missions list */}
                    <div className="w-full space-y-3">
                      {[
                        { city: "Salvador, BA", done: true },
                        { city: "Feira de Santana, BA", done: true },
                        { city: "Ilhéus, BA", done: false },
                      ].map((m, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${m.done ? "bg-green-400" : "bg-brand-orange animate-pulse"}`} />
                          <span className="text-sm text-primary-200 font-medium">{m.city}</span>
                          {!m.done && <span className="ml-auto text-xs text-brand-orange font-semibold">Em breve</span>}
                          {m.done && <span className="ml-auto text-xs text-green-400 font-semibold">Concluída</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge — top left */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10 bg-primary-800/90 backdrop-blur-md shadow-xl"
                >
                  <Globe2 className="w-5 h-5 text-brand-orange" />
                  <div>
                    <div className="text-white text-xs font-bold">BR + DE</div>
                    <div className="text-primary-300 text-[10px]">Voluntários internacionais</div>
                  </div>
                </motion.div>

                {/* Floating badge — bottom right */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-5 -right-8 flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10 bg-primary-800/90 backdrop-blur-md shadow-xl"
                >
                  <Heart className="w-5 h-5 text-brand-orange fill-brand-orange" />
                  <div>
                    <div className="text-white text-xs font-bold">110.000+</div>
                    <div className="text-primary-300 text-[10px]">Procedimentos realizados</div>
                  </div>
                </motion.div>
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

        {/* Bottom gradient fade into next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, #000A14)" }}
        />
      </section>

      {/* ── WHAT WE DO — 3 feature cards ─────────────────────────── */}
      <section
        className="relative pt-24 pb-24 bg-[#000A14]"
      >
        {/* Connector line from hero */}
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">O que fazemos</h2>
            <p className="text-primary-300">Três frentes de atuação que transformam realidades</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-brand-orange" />,
                title: "Atendimento Gratuito",
                desc: "Procedimentos essenciais de saúde bucal — limpeza, restaurações e extrações — sem custo algum para as comunidades.",
                accent: "from-brand-orange/20 to-transparent",
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-brand-orange" />,
                title: "Voluntariado",
                desc: "Cirurgiões-dentistas de todo o Brasil e da Alemanha em missões transformadoras de vida e saúde.",
                accent: "from-primary-400/20 to-transparent",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-brand-orange" />,
                title: "Formação ASB",
                desc: "Capacitamos moradores locais como Auxiliares em Saúde Bucal, gerando emprego e autonomia duradouros.",
                accent: "from-brand-orange/20 to-transparent",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 p-8 hover:border-brand-orange/30 transition-all duration-500 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-primary-300 leading-relaxed">{card.desc}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at top right, rgba(255,107,0,0.15), transparent 70%)" }}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
