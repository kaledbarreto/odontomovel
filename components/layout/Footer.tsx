"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";

export function Footer() {
  const [modalContent, setModalContent] = useState<"noticias" | "faq" | "lgpd" | "imprensa" | null>(null);

  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer className="bg-primary-800 text-neutral-300 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Odontomóvel</h3>
              <p className="text-sm text-neutral-400 mb-6">
                Consultório sobre rodas levando saúde bucal gratuita para comunidades vulneráveis.
              </p>
              <div className="flex gap-4">
                {/* Placeholder logos instituições */}
                <div className="w-24 h-12 bg-white/10 rounded flex items-center justify-center text-xs">AZB-Plus</div>
                <div className="w-24 h-12 bg-white/10 rounded flex items-center justify-center text-xs">ITBSS</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Institucional</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><button onClick={() => setModalContent("faq")} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => setModalContent("lgpd")} className="hover:text-white transition-colors">Política de Privacidade (LGPD)</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Comunicação</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><button onClick={() => setModalContent("noticias")} className="hover:text-white transition-colors">Notícias e Atualizações</button></li>
                <li><button onClick={() => setModalContent("imprensa")} className="hover:text-white transition-colors">Imprensa (Kit Mídia)</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
              <p className="text-sm">contato@odontomovel.org</p>
              <p className="text-sm mt-2">Salvador, Bahia, Brasil</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-700 text-sm text-center text-neutral-500">
            &copy; {new Date().getFullYear()} Instituto Odontomóvel. Todos os direitos reservados.
          </div>
        </Container>
      </footer>

      <Modal isOpen={modalContent === 'noticias'} closeModal={closeModal} title="Notícias e Atualizações">
        <div className="space-y-4">
          <div className="p-4 border border-neutral-200 rounded-xl">
            <p className="text-sm text-neutral-500">20 de Março, 2026</p>
            <h4 className="font-semibold text-primary-600 mt-1">Nova rota do Odontomóvel em Salvador</h4>
          </div>
          <div className="p-4 border border-neutral-200 rounded-xl">
            <p className="text-sm text-neutral-500">10 de Fevereiro, 2026</p>
            <h4 className="font-semibold text-primary-600 mt-1">Parceria com AZB-Plus renovada por mais 2 anos</h4>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modalContent === 'faq'} closeModal={closeModal} title="Perguntas Frequentes (FAQ)">
        <div className="space-y-4">
          {[
            {Q: "O que é o Odontomóvel?", A: "É um consultório completo sobre rodas que leva saúde bucal gratuita às comunidades."},
            {Q: "Quem pode ser atendido?", A: "Moradores das comunidades selecionadas nos ciclos territoriais do projeto."},
            {Q: "Como me voluntariar?", A: "Dentistas e auxiliares podem se inscrever na seção 'Seja Voluntário' deste site."},
            {Q: "Como empresas podem apoiar?", A: "Através de patrocínio, doação de insumos ou manutenção na seção 'Como Apoiar'."},
            {Q: "Onde o projeto atua?", A: "Primariamente no estado da Bahia, com foco em Salvador e região metropolitana."}
          ].map((faq, i) => (
            <details key={i} className="group border border-neutral-200 rounded-xl overflow-hidden">
              <summary className="font-semibold p-4 cursor-pointer bg-neutral-50 group-open:bg-primary-50 group-open:text-primary-600">{faq.Q}</summary>
              <p className="p-4 pt-0 text-sm mt-2">{faq.A}</p>
            </details>
          ))}
        </div>
      </Modal>

      <Modal isOpen={modalContent === 'lgpd'} closeModal={closeModal} title="Política de Privacidade (LGPD)">
        <div className="prose prose-sm prose-primary max-w-none">
          <p>O Instituto Odontomóvel está comprometido com a proteção dos seus dados pessoais.</p>
          <p>Coletamos nome, e-mail e telefone através de formulários apenas para fins de contato, processo seletivo de voluntariado ou parcerias.</p>
          <p>Seus dados não são vendidos ou compartilhados com terceiros para fins comerciais.</p>
        </div>
      </Modal>

      <Modal isOpen={modalContent === 'imprensa'} closeModal={closeModal} title="Imprensa (Kit Mídia)">
        <div className="space-y-4">
          <p>Baixe nossos materiais de divulgação e press releases:</p>
          <a href="#" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
            <div className="bg-primary-100 p-3 rounded-lg text-primary-600">⬇️</div>
            <div>
              <h4 className="font-semibold">Kit de Logos (ZIP)</h4>
              <p className="text-sm text-neutral-500">Formatos PNG, SVG, AI</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
            <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange">⬇️</div>
            <div>
              <h4 className="font-semibold">Release de Imprensa 2026 (PDF)</h4>
              <p className="text-sm text-neutral-500">Histórico completo e métricas</p>
            </div>
          </a>
        </div>
      </Modal>
    </>
  );
}
