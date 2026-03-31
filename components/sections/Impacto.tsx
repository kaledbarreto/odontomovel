"use client";

import dynamic from "next/dynamic";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-scroll";
import { User, Quote, MapPin, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-primary-900/40 animate-pulse rounded-2xl" />
  ),
});

function useCounter(target: number, duration = 2) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("pt-BR"));

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, motionVal, target]);

  return { nodeRef, display };
}

function StatCard({ value, label, suffix = "", index }: { value: number; label: string; suffix?: string; index: number }) {
  const { nodeRef, display } = useCounter(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-green-400/30 transition-all duration-500" />
      <span ref={nodeRef} className="relative text-4xl md:text-5xl font-heading font-black text-green-400 tracking-tight">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </span>
      <span className="relative mt-3 text-sm md:text-base font-medium text-primary-200 leading-snug max-w-[140px]">{label}</span>
    </motion.div>
  );
}

const stats = [
  { value: 45000, suffix: "+", label: "Atendimentos Realizados" },
  { value: 110000, suffix: "+", label: "Procedimentos odontológicos" },
  { value: 25, suffix: "", label: "Municípios/territórios atendidos" },
  { value: 350, suffix: "+", label: "Voluntários mobilizados (BR/DE)" },
  { value: 85, suffix: "", label: "Pessoas capacitadas (ASB)" },
];

const depoimentos = [
  {
    text: "O ITBSS não trouxe apenas dentistas, trouxe esperança pra nossa comunidade quando a gente mais precisava.",
    author: "Moradora Atendida",
    role: "Salvador, BA",
  },
  {
    text: "Participar dessa missão como voluntário mudou minha perspectiva sobre o papel social da odontologia.",
    author: "Voluntário · Cirurgião-Dentista",
    role: "Frankfurt, DE",
  },
  {
    text: "A formação em ASB me deu uma profissão. Hoje trabalho na clínica da cidade graças ao projeto.",
    author: "Auxiliar em Saúde Bucal",
    role: "Feira de Santana, BA",
  },
];

const galleryPhotos = [
  { label: "Caminhão chegando à comunidade", wide: true },
  { label: "Atendimento odontológico" },
  { label: "Fila de pacientes" },
  { label: "Voluntários e equipe" },
  { label: "Formação ASB" },
];

export function Impacto() {
  return (
    <Section
      id="impacto"
      className="relative overflow-hidden py-0"
      style={{ background: "linear-gradient(160deg, #0C1625 0%, #13233A 50%, #1B3050 100%)" }}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #4DAD75 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <Container className="relative z-10 py-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-500/10 text-green-400 text-sm font-semibold tracking-wide uppercase">
            Nosso Impacto
          </span>
          <h2 className="text-h1 font-heading font-black text-white leading-tight mb-5">
            Impacto que se mede em sorrisos e em oportunidades.
          </h2>
          <p className="text-lg text-primary-300 leading-relaxed">
            O ITBSS não é só atendimento clínico. A cada ciclo, levamos prevenção, mobilização e formação. Quem passa pelo programa sai com mais do que um tratamento no dente.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
          {stats.map((stat, idx) => (
            <StatCard key={idx} index={idx} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>

        {/* ── Photo gallery strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Galeria do projeto</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Mosaic: 1 wide + 4 smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[320px] md:h-[260px]">
            <PhotoSlot
              dark
              label="ITBSS em missão"
              className="col-span-2 row-span-1 h-full"
            />
            <PhotoSlot dark label="Atendimento clínico" className="h-full" />
            <PhotoSlot dark label="Comunidade atendida" className="h-full" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <PhotoSlot dark label="Equipe de voluntários" className="h-40" />
            <PhotoSlot dark label="Prevenção e educação" className="h-40" />
            <PhotoSlot dark label="Formação ASB em campo" className="h-40" />
          </div>
        </motion.div>

        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Onde já estivemos</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-stretch mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Onde o ITBSS já esteve</h3>
              <p className="text-primary-300 leading-relaxed">
                Atuando em diferentes municípios/estados, conforme planejamento anual, parcerias e condições de operação.
              </p>
            </div>
            <div className="relative flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-elevated">
              <Map />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Salvador, BA", "Feira de Santana, BA", "Ilhéus, BA", "+22 municípios"].map((loc) => (
                <span key={loc} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-200 text-xs font-medium">
                  <MapPin className="w-3 h-3 text-green-400" />
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "linear-gradient(145deg, rgba(77,173,117,0.1) 0%, rgba(19,35,58,0.8) 60%)" }}
          >
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-green-400" />
            </div>
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white">Histórias que transformam</h3>
              </div>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, bulletClass: "swiper-bullet-impacto", bulletActiveClass: "swiper-bullet-impacto-active" }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="flex-1 w-full !pb-12"
              >
                {depoimentos.map((dep, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col justify-between h-full min-h-[260px]">
                      <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed italic mb-8">&ldquo;{dep.text}&rdquo;</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white">{dep.author}</div>
                          <div className="flex items-center gap-1 text-primary-300 text-sm mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {dep.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="apoio" smooth={true} duration={500}>
            <Button size="lg" className="group">
              Quero apoiar para ampliar esse impacto
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="voluntario" smooth={true} duration={500}>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-all text-sm font-medium">
              Quero ser voluntário(a)
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </Container>

      <style jsx global>{`
        .swiper-bullet-impacto { display: inline-block; width: 8px; height: 8px; border-radius: 9999px; background: rgba(255,255,255,0.25); margin: 0 4px; cursor: pointer; transition: all 0.3s; }
        .swiper-bullet-impacto-active { background: #4DAD75; width: 24px; }
      `}</style>
    </Section>
  );
}
