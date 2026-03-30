"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Building2, Package, Truck, GraduationCap, Users, CheckCircle2, CheckCircle } from "lucide-react";

const formSchema = z.object({
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  cargo: z.string().optional(),
  email: z.string().email("Digite um e-mail válido."),
  tipo_apoio: z.string().min(1, "Este campo é obrigatório."),
  faixa_investimento: z.string().optional(),
  prazo: z.string().optional(),
  como_conheceu: z.string().optional(),
  mensagem: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const modelos = [
  {
    title: "Patrocínio institucional",
    icon: <Building2 className="w-8 h-8 text-primary-600" />,
    desc: "Cota anual ou por missão para custeio dos ciclos do instituto.",
    accent: "from-primary-500 to-primary-600",
    iconBg: "bg-primary-50",
    tag: "Financeiro",
  },
  {
    title: "Apoio com insumos odontológicos",
    icon: <Package className="w-8 h-8 text-green-600" />,
    desc: "Doação de materiais de consumo, resinas, anestésicos e profilaxia.",
    accent: "from-green-500 to-green-600",
    iconBg: "bg-green-50",
    tag: "Insumos",
  },
  {
    title: "Logística e manutenção",
    icon: <Truck className="w-8 h-8 text-amber-600" />,
    desc: "Apoio com transporte, combustível e manutenção mecânica da unidade.",
    accent: "from-amber-500 to-amber-600",
    iconBg: "bg-amber-50",
    tag: "Operacional",
  },
  {
    title: "Apoio à Formação ASB",
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    desc: "Parceria educacional para bolsas, materiais e certificação dos alunos.",
    accent: "from-green-600 to-primary-500",
    iconBg: "bg-green-50",
    tag: "Educação",
  },
  {
    title: "Parcerias públicas",
    icon: <Users className="w-8 h-8 text-primary-600" />,
    desc: "Secretarias, prefeituras e rede de saúde que desejam levar o Odontomóvel.",
    accent: "from-primary-600 to-primary-800",
    iconBg: "bg-primary-50",
    tag: "Governança",
  },
];

export function Apoiar() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <Section id="apoio" className="py-0 overflow-hidden bg-graylight">
      <Container className="py-14 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase">Como Apoiar</span>
          <h2 className="text-h1 font-heading font-black text-grafite mb-4">Parcerias que garantem continuidade, qualidade e escala.</h2>
          <p className="text-grayui text-lg leading-relaxed">
            Para manter e expandir o Odontomóvel, buscamos parceiros comprometidos com impacto social, saúde e inclusão. O apoio fortalece a capacidade operacional do projeto, amplia os atendimentos e viabiliza formação local.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-12">
          {modelos.map((modelo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-bordercolor bg-white shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              {/* Colored top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${modelo.accent}`} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${modelo.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {modelo.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-grayui border border-bordercolor rounded-full px-2.5 py-1">
                    {modelo.tag}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-grafite mb-3">{modelo.title}</h3>
                <p className="text-grayui">{modelo.desc}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1"
            style={{ background: "linear-gradient(135deg, #1F5E99 0%, #153E6A 100%)" }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-500" />
            <div className="p-8">
              <h3 className="text-xl font-heading font-bold text-white mb-5">Contrapartidas aos Parceiros</h3>
              <ul className="space-y-4">
                {[
                  "Visibilidade institucional no site e materiais",
                  "Relatórios de impacto (números + histórias)",
                  "Conteúdos em redes sociais (quando couber e for previsto)",
                  "Possibilidade de visita técnica / ativações alinhadas (ética e LGPD)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-primary-100 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-elevated border border-bordercolor">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-700 mb-8 text-center">
            Quero ser parceiro
          </h2>

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-grafite">Recebemos seu interesse em apoiar o Odontomóvel.</p>
              <p className="text-grayui mt-2">Em breve entraremos em contato com os próximos passos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input label="Empresa/Instituição" placeholder="Nome da empresa" {...register("empresa")} error={errors.empresa?.message} />
                <Input label="Cargo" placeholder="Seu cargo" {...register("cargo")} />
              </div>
              <Input label="E-mail" type="email" placeholder="seuemail@dominio.com" {...register("email")} error={errors.email?.message} />
              <Select
                label="Tipo de apoio"
                {...register("tipo_apoio")}
                error={errors.tipo_apoio?.message}
                options={[
                  { label: "Patrocínio institucional", value: "patrocinio" },
                  { label: "Insumos", value: "insumos" },
                  { label: "Logística/manutenção", value: "logistica" },
                  { label: "Formação ASB", value: "formacao" },
                  { label: "Parceria institucional", value: "parceria" },
                ]}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Select
                  label="Faixa de investimento (opcional)"
                  {...register("faixa_investimento")}
                  options={[
                    { label: "Até R$ 5.000", value: "ate5k" },
                    { label: "R$ 5.000 a R$ 20.000", value: "5k20k" },
                    { label: "R$ 20.000 a R$ 50.000", value: "20k50k" },
                    { label: "Acima de R$ 50.000", value: "acima50k" },
                    { label: "A definir", value: "adefinir" },
                  ]}
                />
                <Select
                  label="Prazo de interesse"
                  {...register("prazo")}
                  options={[
                    { label: "Imediato", value: "imediato" },
                    { label: "30–60 dias", value: "3060" },
                    { label: "90+ dias", value: "90mais" },
                  ]}
                />
              </div>
              <Input label="Como conheceu o projeto?" placeholder="Indicação, redes sociais…" {...register("como_conheceu")} />
              <Textarea label="Mensagem (opcional)" placeholder="Conte rapidamente como podemos ajudar" {...register("mensagem")} />
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Quero conversar sobre parceria"}
              </Button>
              <p className="text-xs text-grayui text-center">
                Ao enviar, você concorda com o uso dos seus dados para retorno de contato. Não compartilhamos suas informações com terceiros.
              </p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
