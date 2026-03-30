"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Stethoscope, HeartHandshake, Users, CheckCircle, ClipboardCheck, CalendarCheck, Send } from "lucide-react";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const formSchema = z.object({
  nome: z.string().min(2, "Este campo é obrigatório."),
  email: z.string().email("Digite um e-mail válido."),
  telefone: z.string().min(10, "Digite um telefone válido."),
  profissao: z.string().min(1, "Este campo é obrigatório."),
  cro: z.string().optional(),
  disponibilidade: z.string().min(1, "Este campo é obrigatório."),
  outros_municipios: z.string().min(1, "Este campo é obrigatório."),
});

type FormData = z.infer<typeof formSchema>;

export function Voluntario() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
  };

  const isDentist = watch("profissao") === "dentista";

  const perfis = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Cirurgiões-dentistas",
      desc: "Profissionais formados e com CRO ativo para atendimento clínico.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Auxiliares / TSB",
      desc: "Conforme necessidade local e agenda de missões.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Profissionais de apoio",
      desc: "Triagem, logística, educação em saúde — conforme agenda.",
    },
  ];

  return (
    <Section
      id="voluntario"
      className="py-0 overflow-hidden relative"
      style={{ background: "linear-gradient(150deg, #1A4F8A 0%, #1F5E99 40%, #0F3D5A 100%)" }}
    >
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1FAF7A 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <Container className="relative z-10 py-14 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div>
            {/* Photo collage — top of left column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-3 mb-10"
            >
              <PhotoSlot
                dark
                label="Missão em campo"
                className="col-span-2 h-44"
              />
              <div className="flex flex-col gap-3">
                <PhotoSlot dark label="Equipe voluntária" className="flex-1" />
                <PhotoSlot dark label="Dentista em ação" className="flex-1" />
              </div>
            </motion.div>

            <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold tracking-wide uppercase">
              Seja Voluntário
            </span>
            <h2 className="text-h1 font-heading font-black text-white leading-tight mb-6">
              Profissionais que doam tempo, técnica e cuidado — com impacto real.
            </h2>
            <p className="text-primary-100 mb-10 text-lg leading-relaxed">
              O Odontomóvel conta com a força de profissionais comprometidos com a saúde e com o social. Buscamos dentistas e colaboradores que queiram contribuir com atendimento humanizado e organizado em missões e ações.
            </p>

            <h3 className="text-white text-xl font-heading font-bold mb-5">Quem pode ser voluntário</h3>
            <div className="space-y-4 mb-10">
              {perfis.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 items-center"
                >
                  <div className="bg-white/10 p-3 rounded-full text-green-400">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{p.title}</h4>
                    <p className="text-sm text-primary-100">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-white text-xl font-heading font-bold mb-5">Como funciona</h3>
            <ol className="flex flex-col gap-3">
              {[
                { step: "Cadastro", desc: "Preencha o formulário ao lado com seus dados e disponibilidade.", icon: <Send className="w-5 h-5" /> },
                { step: "Triagem e alinhamento", desc: "A equipe avalia o perfil e entra em contato para combinar a missão.", icon: <ClipboardCheck className="w-5 h-5" /> },
                { step: "Orientações e atuação", desc: "Você recebe as instruções e entra na agenda de ações do projeto.", icon: <CalendarCheck className="w-5 h-5" /> },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/8 border border-white/15" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="w-11 h-11 rounded-xl bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-black text-green-400 tabular-nums">0{i + 1}</span>
                      <span className="font-bold text-white">{item.step}</span>
                    </div>
                    <p className="text-sm text-primary-200 leading-snug">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: form */}
          <div className="bg-white text-grafite p-8 md:p-10 rounded-2xl shadow-elevated">
            <h3 className="text-2xl font-heading font-bold text-primary-700 mb-8 text-center">
              Quero me voluntariar
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl font-semibold text-grafite">Cadastro realizado!</p>
                <p className="text-grayui mt-2">
                  Obrigado por se disponibilizar. A equipe entrará em contato quando houver ações compatíveis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  label="Nome completo"
                  placeholder="Digite seu nome"
                  {...register("nome")}
                  error={errors.nome?.message}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="seuemail@dominio.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  <Input
                    label="Telefone/WhatsApp"
                    type="tel"
                    placeholder="(DD) 9xxxx-xxxx"
                    {...register("telefone")}
                    error={errors.telefone?.message}
                  />
                </div>
                <Select
                  label="Profissão"
                  {...register("profissao")}
                  error={errors.profissao?.message}
                  options={[
                    { label: "Cirurgião-dentista", value: "dentista" },
                    { label: "ASB", value: "asb" },
                    { label: "TSB", value: "tsb" },
                    { label: "Estudante", value: "estudante" },
                    { label: "Outro", value: "outro" },
                  ]}
                />
                {isDentist && (
                  <Input
                    label="Registro profissional"
                    placeholder="CRO/UF e número"
                    {...register("cro")}
                  />
                )}
                <Select
                  label="Disponibilidade"
                  {...register("disponibilidade")}
                  error={errors.disponibilidade?.message}
                  options={[
                    { label: "Curta", value: "curta" },
                    { label: "Média", value: "media" },
                    { label: "Longa (a combinar)", value: "longa" },
                  ]}
                />
                <Select
                  label="Aceita atuar em outros municípios?"
                  {...register("outros_municipios")}
                  error={errors.outros_municipios?.message}
                  options={[
                    { label: "Sim", value: "sim" },
                    { label: "Não", value: "nao" },
                    { label: "Depende", value: "depende" },
                  ]}
                />
                <p className="text-xs text-grayui">
                  Ao enviar, você concorda com o uso dos seus dados para retorno de contato. Não compartilhamos suas informações com terceiros.
                </p>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Cadastrar para voluntariado"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
