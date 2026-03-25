"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Building2, Package, Truck, GraduationCap, Users, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  contato: z.string().min(2, "Nome do contato é obrigatório"),
  email: z.string().email("E-mail inválido"),
  tipo_apoio: z.string().min(1, "Selecione um tipo de apoio"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  mensagem: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export function Apoiar() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulando envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato.");
    reset();
  };

  const modelos = [
    { title: "Patrocínio Anual/Missão", icon: <Building2 className="w-8 h-8 text-primary-500"/>, desc: "Apoio financeiro direto para custeio de ciclos ou cotas anuais do instituto." },
    { title: "Insumos Odontológicos", icon: <Package className="w-8 h-8 text-primary-500"/>, desc: "Doação de materiais de consumo, resinas, anestésicos e profilaxia." },
    { title: "Logística e Manutenção", icon: <Truck className="w-8 h-8 text-primary-500"/>, desc: "Apoio com transporte, combustível e manutenção mecânica da unidade." },
    { title: "Apoio Formação ASB", icon: <GraduationCap className="w-8 h-8 text-primary-500"/>, desc: "Bolsas de estudo, materiais didáticos e certificação para alunos." },
    { title: "Parcerias Públicas", icon: <Users className="w-8 h-8 text-primary-500"/>, desc: "Prefeituras e governos que desejam levar o Odontomóvel às suas cidades." }
  ];

  return (
    <Section id="apoio" className="bg-neutral-50 py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H1 className="mb-4">Parcerias para continuidade, qualidade e escala</H1>
          <Text>
            O impacto social do Odontomóvel só é possível através de uma rede fortalecida de parceiros institucionais e empresas 
            que acreditam na transformação através da saúde.
          </Text>
        </div>

        {/* Modelos de Parceria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-20">
          {modelos.map((modelo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  {modelo.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{modelo.title}</h3>
                <p className="text-neutral-600">{modelo.desc}</p>
              </Card>
            </motion.div>
          ))}
          {/* Contrapartidas */}
          <Card className="h-full bg-primary-600 text-white sm:col-span-2 lg:col-span-1 border-none ring-0">
            <h3 className="text-xl font-bold mb-4">Contrapartidas aos Parceiros</h3>
            <ul className="space-y-3 text-primary-100 text-sm">
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-brand-orange" /> <span>Visibilidade no site, relatório e materiais do Odontomóvel</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-brand-orange" /> <span>Relatórios periódicos de impacto social e métricas clínicas</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-brand-orange" /> <span>Selo de Parceiro Oficial e conteúdos para redes sociais</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-brand-orange" /> <span>Visita técnica aos atendimentos (cumprindo normas da LGPD)</span></li>
            </ul>
          </Card>
        </div>

        {/* Formulário de Contato */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-neutral-100 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8 text-center relative z-10">
            Quero apoiar o projeto
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nome da Empresa / Instituição" {...register("empresa")} error={errors.empresa?.message} />
              <Input placeholder="Pessoa de Contato" {...register("contato")} error={errors.contato?.message} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
              <Input placeholder="Cidade / Estado" {...register("cidade")} error={errors.cidade?.message} />
            </div>
            <Select 
              {...register("tipo_apoio")} 
              error={errors.tipo_apoio?.message}
              options={[
                { label: "Patrocínio Financeiro", value: "financeiro" },
                { label: "Doação de Insumos", value: "insumos" },
                { label: "Apoio Logístico", value: "logistica" },
                { label: "Apoio Formação ASB", value: "formacao" },
                { label: "Gestor Público / Prefeitura", value: "publico" },
                { label: "Outro", value: "outro" },
              ]}
            />
            <Textarea placeholder="Como você gostaria de apoiar? (Opcional)" {...register("mensagem")} />
            
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
