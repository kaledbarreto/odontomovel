"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, H2, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Stethoscope, Microscope, HeartHandshake } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  profissao: z.string().min(1, "Selecione uma profissão"),
  cro: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export function Voluntario() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert("Inscrição enviada! Em breve entraremos em contato com as próximas etapas.");
    reset();
  };

  const isDentist = watch("profissao") === "dentista";

  return (
    <Section id="voluntario" className="bg-primary-600 py-24 text-white">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          <div>
            <H1 className="text-white mb-6">Profissionais que doam tempo, técnica e cuidado para o impacto</H1>
            <Text className="text-primary-100 mb-10 text-lg">
              Sem os nossos voluntários, o Odontomóvel não sairia do lugar. Convidamos profissionais da odontologia e estudantes a 
              viverem uma experiência humana transformadora, exercendo a profissão em sua forma mais essencial: o cuidado ao próximo.
            </Text>

            <H2 className="text-white text-2xl mb-6">Quem pode participar?</H2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 items-center">
                <div className="bg-white/10 p-3 rounded-full"><Stethoscope className="w-6 h-6 text-brand-orange" /></div>
                <div>
                  <h4 className="font-bold text-lg">Cirurgiões-Dentistas</h4>
                  <p className="text-sm text-primary-100">Profissionais formados e com CRO ativo para atendimento clínico.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 items-center">
                <div className="bg-white/10 p-3 rounded-full"><Microscope className="w-6 h-6 text-brand-orange" /></div>
                <div>
                  <h4 className="font-bold text-lg">TSB e Estudantes</h4>
                  <p className="text-sm text-primary-100">Técnicos em Saúde Bucal ou acadêmicos no final do curso para auxílio e prevenção.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 items-center">
                <div className="bg-white/10 p-3 rounded-full"><HeartHandshake className="w-6 h-6 text-brand-orange" /></div>
                <div>
                  <h4 className="font-bold text-lg">Apoio Geral</h4>
                  <p className="text-sm text-primary-100">Voluntários para triagem, recreação infantil e logística nos territórios.</p>
                </div>
              </div>
            </div>

            <H2 className="text-white text-2xl mb-6">Como funciona?</H2>
            <ol className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:block absolute top-[18px] left-0 w-full h-[2px] bg-white/20"></div>
              {[
                "Preencha o formulário de cadastro",
                "Passe por triagem e agendamento",
                "Receba orientações e normas biossegurança"
              ].map((step, i) => (
                <li key={i} className="flex-1 relative z-10 flex flex-col md:items-center text-left md:text-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4 shrink-0">
                    {i+1}
                  </div>
                  <span className="text-sm font-medium text-primary-50">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <div className="bg-white text-neutral-800 p-8 md:p-10 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold text-primary-700 mb-8 text-center">Quero me voluntariar</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input placeholder="Nome Completo" {...register("nome")} error={errors.nome?.message} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
                <Input type="tel" placeholder="Telefone / WhatsApp" {...register("telefone")} error={errors.telefone?.message} />
              </div>

              <Select 
                {...register("profissao")} 
                error={errors.profissao?.message}
                options={[
                  { label: "Cirurgião-Dentista", value: "dentista" },
                  { label: "Técnico em Saúde Bucal (TSB)", value: "tsb" },
                  { label: "Estudante de Odontologia", value: "estudante" },
                  { label: "Apoio Logístico/Geral", value: "apoio" },
                ]}
              />

              {isDentist && (
                <Input placeholder="Número do CRO e Estado (Ex: 12345-BA)" {...register("cro")} error={errors.cro?.message} />
              )}
              
              <div className="text-xs text-neutral-500 mb-6">
                Ao enviar, você concorda com o uso de seus dados para contato a respeito das missões voluntárias do Odontomóvel.
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
              </Button>
            </form>
          </div>

        </div>
      </Container>
    </Section>
  );
}
