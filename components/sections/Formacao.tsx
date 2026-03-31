"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FileBadge, AlertCircle } from "lucide-react";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Formacao() {
  return (
    <Section
      id="formacao-asb"
      className="relative overflow-hidden py-0 bg-white"
    >
      <Container className="relative z-10 py-14 md:py-20">

        {/* Full-width photo strip — 3 photos showing the formation in action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          <PhotoSlot label="Aula prática com moradores" className="h-56" />
          <PhotoSlot label="Biossegurança e rotinas clínicas" className="h-56" />
          <PhotoSlot label="Entrega de certificados" className="h-56" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">
              Formação ASB
            </span>
            <h2 className="text-h1 font-heading font-black text-grafite leading-tight mb-6">
              Formação prática local: inclusão produtiva dentro do próprio território.
            </h2>
            <p className="text-lg text-grayui leading-relaxed mb-8">
              Durante a permanência do ITBSS na comunidade, realizamos uma formação prática de
              moradores interessados em atuar como auxiliares no apoio aos atendimentos e rotinas de
              biossegurança. A vivência acontece de forma aplicada, com acompanhamento da equipe.
            </p>

            {/* Transparency block */}
            <div className="flex gap-4 p-5 rounded-2xl bg-graylight border border-bordercolor mb-10">
              <AlertCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <p className="text-sm text-grayui leading-relaxed">
                <strong className="text-grafite">Importante:</strong> O certificado emitido registra a participação e
                a formação prática realizada, e a instituição busca parcerias com instituições de ensino e/ou
                entidades habilitadas para apoiar a validação e o reconhecimento formal desse percurso formativo.
              </p>
            </div>

            <Link to="contato" smooth={true} duration={500}>
              <Button size="lg">
                Quero conversar sobre parceria de certificação
              </Button>
            </Link>
          </motion.div>

          {/* Right: Photo + Certificate card stacked */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex flex-col gap-5"
          >
            {/* Photo area */}
            <PhotoSlot
              label="Formação prática: morador aprendendo em campo"
              className="w-full h-56 rounded-2xl"
            />

            {/* Certificate card */}
            <div className="relative overflow-hidden rounded-2xl border border-bordercolor shadow-elevated bg-white">
              {/* Header bar */}
              <div
                className="h-3 w-full"
                style={{ background: "linear-gradient(90deg, #284679, #F7CF4A, #4DAD75)" }}
              />

              <div className="p-8 md:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-full border-4 border-primary-100 bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center shadow-card">
                    <FileBadge className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-grayui mb-2">
                  Instituto ITBSS &amp; AZB-Plus
                </div>
                <h3 className="text-xl font-heading font-black text-grafite mb-1">
                  Certificado de Participação
                </h3>
                <div className="text-sm text-grayui mb-6">
                  Auxiliar em Saúde Bucal · Programa ITBSS
                </div>

                {/* Decorative lines */}
                <div className="space-y-2 mb-6">
                  {[75, 60, 85].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-graylight mx-auto"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>

                {/* Seal */}
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center mb-1.5 shadow-card">
                      <span className="text-white text-xs font-black">CRO</span>
                    </div>
                    <span className="text-[10px] text-grayui font-medium">RECONHECIDO</span>
                  </div>
                  <div className="w-px h-10 bg-bordercolor" />
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary-300 flex items-center justify-center mb-1.5">
                      <span className="text-primary-500 text-xs font-black">ITBSS</span>
                    </div>
                    <span className="text-[10px] text-grayui font-medium">EMITIDO</span>
                  </div>
                </div>
              </div>

              <div className="bg-graylight border-t border-bordercolor px-8 py-4 text-center">
                <p className="text-xs text-grayui font-medium">
                  Apoiado por conselhos e instituições educacionais parceiras
                </p>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-white border border-green-100 shadow-elevated"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-bold text-grafite">Moradores capacitados em ASB</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
