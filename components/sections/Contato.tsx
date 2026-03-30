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
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Mail, CheckCircle, MessageCircle, Clock, Building2, HeartHandshake, MapPin, GraduationCap } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Este campo é obrigatório."),
  email: z.string().email("Digite um e-mail válido."),
  telefone: z.string().optional(),
  cidade: z.string().optional(),
  assunto: z.string().min(1, "Este campo é obrigatório."),
  mensagem: z.string().min(10, "Este campo é obrigatório."),
});

type FormData = z.infer<typeof formSchema>;

export function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <Section id="contato" className="bg-white py-0">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: intro */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide uppercase"
            >
              Contato
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-h1 font-heading font-black text-grafite mb-6"
            >
              Fale com a equipe do Odontomóvel.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-grayui mb-10 text-lg leading-relaxed"
            >
              Se você quer apoiar, ser voluntário, propor parceria pública ou educacional, preencha o formulário ao lado. Retornaremos o mais breve possível.
            </motion.p>

            {/* Contact channels */}
            <div className="space-y-3 mb-10">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "E-mail oficial", value: "contato@odontomovel.org", bg: "bg-primary-50", color: "text-primary-600", border: "border-primary-100" },
                { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "A combinar com a equipe", bg: "bg-green-50", color: "text-green-600", border: "border-green-100" },
                { icon: <Clock className="w-5 h-5" />, label: "Tempo de resposta", value: "Em até 48 horas úteis", bg: "bg-gray-50", color: "text-gray-500", border: "border-gray-200" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${c.border} bg-white hover:shadow-card transition-shadow`}
                >
                  <div className={`w-10 h-10 rounded-full ${c.bg} flex items-center justify-center ${c.color} shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-grayui font-medium">{c.label}</div>
                    <div className="font-semibold text-grafite text-sm">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Reason pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-grayui mb-4">Motivos frequentes de contato</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <Building2 className="w-3.5 h-3.5" />, label: "Apoio / Parceria" },
                  { icon: <HeartHandshake className="w-3.5 h-3.5" />, label: "Voluntariado" },
                  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Levar para minha cidade" },
                  { icon: <GraduationCap className="w-3.5 h-3.5" />, label: "Parceria ASB" },
                ].map((pill, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-graylight border border-bordercolor text-grayui text-xs font-medium">
                    {pill.icon}
                    {pill.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-elevated border border-bordercolor">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl font-semibold text-grafite">Mensagem enviada com sucesso!</p>
                <p className="text-grayui mt-2">
                  Obrigado pelo contato. Nossa equipe responderá o mais breve possível.
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
                <Input
                  label="E-mail"
                  type="email"
                  placeholder="seuemail@dominio.com"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Telefone/WhatsApp"
                    type="tel"
                    placeholder="(DD) 9xxxx-xxxx"
                    {...register("telefone")}
                  />
                  <Input
                    label="Cidade/UF"
                    placeholder="Ex.: Salvador/BA"
                    {...register("cidade")}
                  />
                </div>
                <Select
                  label="Assunto"
                  {...register("assunto")}
                  error={errors.assunto?.message}
                  options={[
                    { label: "Apoiar", value: "apoiar" },
                    { label: "Voluntário", value: "voluntario" },
                    { label: "Parceria educacional", value: "educacional" },
                    { label: "Levar para minha cidade", value: "cidade" },
                    { label: "Imprensa", value: "imprensa" },
                    { label: "Outros", value: "outros" },
                  ]}
                />
                <Textarea
                  label="Mensagem"
                  placeholder="Conte rapidamente como podemos ajudar"
                  {...register("mensagem")}
                  error={errors.mensagem?.message}
                />
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
                <p className="text-xs text-grayui text-center">
                  Ao enviar, você concorda com o uso dos seus dados para retorno de contato. Não compartilhamos suas informações com terceiros.
                </p>
              </form>
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}
