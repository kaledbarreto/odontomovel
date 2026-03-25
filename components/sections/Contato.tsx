"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres")
});

type FormData = z.infer<typeof formSchema>;

export function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert("Mensagem enviada! Retornaremos o contato o mais breve possível.");
    reset();
  };

  return (
    <Section id="contato" className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <H1 className="mb-6">Fale com a equipe do Odontomóvel</H1>
            <Text className="mb-10">
              Estamos prontos para ouvir você. Se deseja levar o projeto para sua cidade, esclarecer dúvidas, 
              ou propor novas formas de colaboração, envie-nos uma mensagem.
            </Text>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800">E-mail Oficial</h4>
                  <p className="text-neutral-600">contato@odontomovel.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800">Sede Administrativa</h4>
                  <p className="text-neutral-600">Salvador, Bahia, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-neutral-100 relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input placeholder="Seu Nome Completo" {...register("nome")} error={errors.nome?.message} />
              <Input type="email" placeholder="Seu E-mail" {...register("email")} error={errors.email?.message} />
              
              <Select 
                {...register("assunto")} 
                error={errors.assunto?.message}
                options={[
                  { label: "Apoiar como Empresa", value: "empresa" },
                  { label: "Dúvidas sobre Voluntariado", value: "voluntariado" },
                  { label: "Parceria Educacional ASB", value: "educacional" },
                  { label: "Levar projeto para minha cidade", value: "cidade" },
                  { label: "Imprensa", value: "imprensa" },
                  { label: "Outros", value: "outros" },
                ]}
              />
              
              <Textarea placeholder="Escreva sua mensagem aqui..." {...register("mensagem")} error={errors.mensagem?.message} />
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

        </div>
      </Container>
    </Section>
  );
}
