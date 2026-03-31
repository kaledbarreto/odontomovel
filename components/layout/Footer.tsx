"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Projeto", href: "#projeto" },
  { label: "Impacto", href: "#impacto" },
  { label: "Como Apoiar", href: "#apoio" },
  { label: "Seja Voluntário", href: "#voluntario" },
  { label: "Formação ASB", href: "#formacao-asb" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Contato", href: "#contato" },
];

const faqItems = [
  { Q: "O que é o ITBSS?", A: "É um consultório odontológico sobre rodas que realiza atendimentos gratuitos e ações educativas em saúde bucal, além de apoiar a formação prática local." },
  { Q: "Quem realiza o projeto?", A: "O projeto acontece em cooperação entre a AZB-Plus (Alemanha) e o ITBSS (Brasil), com apoio de voluntários e parceiros locais." },
  { Q: "Em quais regiões o ITBSS atua?", A: "Em diferentes municípios/estados, conforme planejamento anual, parcerias e condições de operação." },
  { Q: "O atendimento é realmente gratuito?", A: "Sim. O atendimento oferecido pelo ITBSS é gratuito para a população atendida, conforme organização local." },
  { Q: "Quais tipos de procedimentos são realizados?", A: "Variam conforme estrutura e necessidade local, incluindo atendimentos clínicos e ações preventivas." },
  { Q: "Como a comunidade é selecionada?", A: "Considera vulnerabilidade, falta de assistência e viabilidade de logística, em parceria com atores locais." },
  { Q: "Como empresas e instituições podem apoiar?", A: "Via patrocínio, doação de insumos, apoio logístico/manutenção e apoio à Formação ASB." },
  { Q: "Quais contrapartidas um patrocinador pode receber?", A: "Presença institucional, relatórios de impacto e materiais de comunicação, sempre com ética e LGPD." },
  { Q: "Como posso ser voluntário(a)?", A: 'Cadastre-se em "Seja voluntário". A equipe avalia e entra em contato para alinhamento de disponibilidade.' },
  { Q: "Preciso ser dentista para voluntariar?", A: "O foco é saúde bucal, mas podem existir vagas de apoio conforme a necessidade local." },
  { Q: "O projeto registra fotos e vídeos durante as ações?", A: "Sim, seguindo critérios de ética, respeito e privacidade; autorizações podem ser solicitadas." },
  { Q: "O que é a Formação ASB e como funciona?", A: "Formação prática local durante a permanência do caminhão, com acompanhamento da equipe." },
  { Q: "A certificação da Formação ASB tem validade legal?", A: "O certificado registra participação e prática; busca-se parceria com instituição habilitada para reconhecimento formal." },
  { Q: "Como uma instituição de ensino pode apoiar a validação?", A: "Pode apoiar com trilha pedagógica complementar, validação conforme regras internas ou docência/mentoria." },
  { Q: "Como entrar em contato para levar o ITBSS para minha cidade?", A: "Preencha o formulário e selecione essa opção, informando município/UF e possíveis parceiros." },
  { Q: "Como acompanhar atualizações e resultados do projeto?", A: "Acompanhe redes sociais oficiais e a seção de Atualizações/Notícias do site." },
];

function FaqAccordion({ Q, A }: { Q: string; A: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-bordercolor rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-4 text-left bg-graylight hover:bg-primary-50 transition-colors"
      >
        <span className="font-semibold text-grafite text-sm">{Q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-grayui transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-48" : "max-h-0"}`}
      >
        <div className="p-4 pt-3 text-sm text-grayui leading-relaxed bg-white">{A}</div>
      </div>
    </div>
  );
}

export function Footer() {
  const [modalContent, setModalContent] = useState<"noticias" | "faq" | "lgpd" | "imprensa" | null>(null);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer className="bg-primary-900 text-primary-200">
        {/* Main footer content */}
        <div className="py-14 md:py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

              {/* Col 1 — Brand */}
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <span className="text-2xl font-heading font-bold text-white tracking-tight">
                    ITBSS
                  </span>
                </div>
                <p className="text-sm text-primary-300 leading-relaxed mb-6">
                  Cuidado que chega até onde falta.
                </p>
                <p className="text-xs text-primary-400 leading-relaxed mb-6">
                  Cooperação entre AZB-Plus (Alemanha) e ITBSS (Brasil) para levar saúde bucal gratuita a comunidades em situação de vulnerabilidade.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white transition-colors"
                  >
                    AZB-Plus
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white transition-colors"
                  >
                    ITBSS
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Col 2 — Navegação */}
              <div>
                <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-5">
                  Navegação
                </h4>
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — Institucional */}
              <div>
                <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-5">
                  Institucional
                </h4>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#transparencia" className="text-sm text-primary-300 hover:text-white transition-colors">
                      Transparência
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setModalContent("faq")}
                      className="text-sm text-primary-300 hover:text-white transition-colors text-left"
                    >
                      FAQ
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setModalContent("lgpd")}
                      className="text-sm text-primary-300 hover:text-white transition-colors text-left"
                    >
                      Política de Privacidade (LGPD)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setModalContent("noticias")}
                      className="text-sm text-primary-300 hover:text-white transition-colors text-left"
                    >
                      Notícias e Atualizações
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setModalContent("imprensa")}
                      className="text-sm text-primary-300 hover:text-white transition-colors text-left"
                    >
                      Imprensa / Kit mídia
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 4 — Contato */}
              <div>
                <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-5">
                  Contato
                </h4>
                <ul className="flex flex-col gap-4 mb-8">
                  <li>
                    <a
                      href="mailto:contato@odontomovel.org"
                      className="flex items-start gap-3 group"
                    >
                      <Mail size={16} className="shrink-0 mt-0.5 text-primary-400 group-hover:text-green-400 transition-colors" />
                      <span className="text-sm text-primary-300 group-hover:text-white transition-colors">
                        contato@odontomovel.org
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <Phone size={16} className="shrink-0 mt-0.5 text-primary-400 group-hover:text-green-400 transition-colors" />
                      <span className="text-sm text-primary-300 group-hover:text-white transition-colors">
                        WhatsApp
                      </span>
                    </a>
                  </li>
                </ul>

                <a
                  href="#contato"
                  className="inline-block px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800">
          <Container>
            <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-500">
              <p>&copy; {new Date().getFullYear()} ITBSS. Todos os direitos reservados.</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setModalContent("lgpd")}
                  className="hover:text-primary-300 transition-colors"
                >
                  Privacidade
                </button>
                <span className="text-primary-700">|</span>
                <button
                  onClick={() => setModalContent("faq")}
                  className="hover:text-primary-300 transition-colors"
                >
                  FAQ
                </button>
                <span className="text-primary-700">|</span>
                <button
                  onClick={() => setModalContent("imprensa")}
                  className="hover:text-primary-300 transition-colors"
                >
                  Imprensa
                </button>
              </div>
            </div>
          </Container>
        </div>
      </footer>

      {/* FAQ Modal */}
      <Modal isOpen={modalContent === "faq"} closeModal={closeModal} title="Perguntas Frequentes (FAQ)">
        <div className="space-y-2">
          {faqItems.map((faq, i) => (
            <FaqAccordion key={i} Q={faq.Q} A={faq.A} />
          ))}
        </div>
      </Modal>

      {/* Notícias Modal */}
      <Modal isOpen={modalContent === "noticias"} closeModal={closeModal} title="Notícias e Atualizações">
        <div className="space-y-3">
          <div className="p-4 border border-bordercolor rounded-xl hover:bg-graylight transition-colors cursor-pointer">
            <p className="text-xs text-grayui mb-1">20 de março de 2026</p>
            <h4 className="font-semibold text-grafite">Nova rota do ITBSS em Salvador</h4>
          </div>
          <div className="p-4 border border-bordercolor rounded-xl hover:bg-graylight transition-colors cursor-pointer">
            <p className="text-xs text-grayui mb-1">10 de fevereiro de 2026</p>
            <h4 className="font-semibold text-grafite">Parceria com AZB-Plus renovada por mais 2 anos</h4>
          </div>
          <p className="text-sm text-grayui text-center pt-2">
            Acompanhe as redes sociais oficiais para mais atualizações.
          </p>
        </div>
      </Modal>

      {/* LGPD Modal */}
      <Modal isOpen={modalContent === "lgpd"} closeModal={closeModal} title="Política de Privacidade (LGPD)">
        <div className="space-y-4 text-sm text-grayui leading-relaxed">
          <p>O ITBSS respeita seus dados pessoais e segue as regras da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
          <p>Coletamos nome, e-mail e telefone através de formulários apenas para fins de contato, processo seletivo de voluntariado ou parcerias institucionais.</p>
          <p>Seus dados não são vendidos ou compartilhados com terceiros para fins comerciais.</p>
          <p>Ao enviar qualquer formulário neste site, você concorda com o uso dos seus dados para retorno de contato conforme descrito nesta política.</p>
          <p>Para solicitar exclusão, correção ou acesso aos seus dados, entre em contato pelo e-mail <span className="text-primary-600 font-medium">contato@odontomovel.org</span>.</p>
        </div>
      </Modal>

      {/* Imprensa Modal */}
      <Modal isOpen={modalContent === "imprensa"} closeModal={closeModal} title="Imprensa / Kit Mídia">
        <div className="space-y-4">
          <p className="text-sm text-grayui">
            Jornalistas e veículos de comunicação podem solicitar materiais institucionais, imagens e press releases abaixo.
          </p>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-bordercolor rounded-xl hover:bg-graylight transition-colors group"
          >
            <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#284679" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-grafite group-hover:text-primary-600 transition-colors">Kit de Logos (ZIP)</h4>
              <p className="text-xs text-grayui">Formatos PNG, SVG, AI</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-bordercolor rounded-xl hover:bg-graylight transition-colors group"
          >
            <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#284679" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-grafite group-hover:text-primary-600 transition-colors">Release de Imprensa (PDF)</h4>
              <p className="text-xs text-grayui">Histórico completo e métricas do projeto</p>
            </div>
          </a>
          <p className="text-xs text-grayui pt-1">
            Para solicitações específicas, entre em contato em{" "}
            <a href="mailto:contato@odontomovel.org" className="text-primary-600 hover:underline">
              contato@odontomovel.org
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
