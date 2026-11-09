"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";
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
          <PhotoSlot src="/images/03.JPG" alt="Prática supervisionada em ASB" className="h-56" />
          <PhotoSlot src="/images/04.JPG" alt="Biossegurança e rotinas clínicas" className="h-56" />
          <PhotoSlot src="/images/05.JPG" alt="Acompanhamento da equipe" className="h-56" />
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
              Durante a permanência do OdontoMóvel na comunidade, oferecemos oportunidade formativa para
              estudantes da ASB exercerem a prática exigida para conclusão da formação. A vivência
              acontece de forma aplicada, com acompanhamento da equipe.
            </p>

            {/* Transparency block */}
            <div className="flex gap-4 p-5 rounded-2xl bg-graylight border border-bordercolor mb-10">
              <AlertCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <p className="text-sm text-grayui leading-relaxed">
                <strong className="text-grafite">Importante:</strong> O candidato tem que fazer o curso teórico em uma
                instituição credenciada, cumprindo a carga horária mínima exigida para então exercer a prática
                no OdontoMóvel.
              </p>
            </div>

            <Link to="contato" smooth={true} duration={500}>
              <Button size="lg">
                Quero conversar sobre a certificação
              </Button>
            </Link>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Photo area */}
            <PhotoSlot
              src="/images/06.JPG"
              alt="Prática em ASB no OdontoMóvel"
              className="w-full h-72 md:h-96 rounded-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
