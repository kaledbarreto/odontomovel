# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**ITBSS** is a single-page landing site for a Brazilian social dental health project ("consultório sobre rodas" — a mobile dental clinic). Cooperation between **AZB-Plus (Germany)** and **ITBSS (Brazil)**. Language: **pt-BR**.

**Creative concept:** *"Cuidado que chega até onde falta."*
**Feel:** confiável, humano, limpo, eficiente, acolhedor.
**Three core objectives:** (a) credibilidade, (b) captação de parceiros, (c) atração de voluntários.

---

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint via Next.js
```

---

## Architecture

Single-page app using Next.js App Router. All sections are composed in `app/page.tsx`.

**Required section order (from docs):**
1. `Hero` — Início (CTA Apoiar / Voluntariar)
2. `Projeto` — "O que fazemos" (3 cards) + "Como funciona" (4 steps) + Propósito/Pilares
3. `ComoFunciona` — detailed 4-step flow
4. `Impacto` — numbers + map + social proof / testimonials
5. `Apoiar` — support models + CTA
6. `Voluntario` — volunteer CTA + 3-step process
7. `Formacao` — Formação ASB
8. `Transparencia` — document downloads
9. `Contato` — contact form

Navigation uses `react-scroll` anchor links. Each section `id` must match the scroll target.

### Component structure

- `components/sections/` — one component per page section; each wraps `<Section id="...">`
- `components/layout/` — `Header` (fixed, scroll-aware) and `Footer`
- `components/ui/` — primitives: `Button`, `Card`, `Container`, `Input`, `Modal`, `Section`, `Select`, `Textarea`, `Typography`
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge)

Sections using scroll, maps, animations, or browser APIs must be `"use client"`.

---

## Design System (follow strictly)

### Color Palette

The `tailwind.config.ts` must reflect these tokens exactly:

| Token | Hex | Usage |
|---|---|---|
| `primary` (Azul Saúde) | `#284679` | Header, primary buttons, links, highlights |
| `green` / `success` (Verde Cuidado) | `#4DAD75` | Impact icons, seals, success states |
| `gray-900` / text (Grafite) | `#101828` | Titles and main text |
| `gray-500` (Cinza Neutro) | `#667085` | Secondary text, captions |
| `gray-100` (Cinza Claro) | `#F2F4F7` | Alternating section backgrounds, cards, FAQ blocks |
| `white` | `#FEFEFE` | Base background |
| `yellow` / `warning` | `#F7CF4A` | Attention states, highlights |
| `error` | `#D92D20` | Error states |
| `border` | `#D0D5DD` | Borders and dividers |

**Rule:** background always light; strong color only on CTAs, numbers, and key titles. Minimum contrast AA for all text and buttons.

### Typography

**Fonts (Google Fonts):**
- Titles: **Montserrat** (weight 600/700)
- Body: **Inter** (weight 400/500)

**Scale (desktop):**
- H1: 44–52px | H2: 28–34px | H3: 20–24px
- Body: 16–18px | Small/labels: 13–14px
- Line-height: 150% on body text

### Icons

Library: **Lucide** (already installed). Style: outline, 1.5–2px stroke, rounded caps, minimalist.

Icon mapping per section:
- Atendimento: `Tooth` / `Stethoscope`
- Voluntariado: `HeartHandshake` / `Users`
- Formação ASB: `GraduationCap` / `BookOpen`
- Impacto: `BarChart2` / `Target`
- Transparência: `FileText` / `ShieldCheck`
- Contato: `MessageCircle` / `Phone`

### Layout & Spacing

- Max content width: **1120–1200px**
- Spacing system: **8pt base** (multiples of 8px)
- Section vertical padding: **72–96px** (desktop)
- Grid: 12 columns desktop / 4 columns mobile
- Card border-radius: **12–16px**
- Card style: soft borders or `#D0D5DD` border + light shadow

### Microinteractions

- Button hover: slight darkening (not scale)
- Smooth scroll to anchors (already configured in `globals.css`)
- Subtle entrance animation on cards (fade-in)
- **Mobile sticky CTA bar** (bottom): "Apoiar" | "Voluntário" — required

---

## Copy & Content (use these texts exactly)

### Hero (Início)

**Título:** ITBSS: saúde bucal gratuita onde ela é mais necessária.

**Subtítulo:** Um consultório odontológico sobre rodas que leva atendimento, prevenção e formação de mão de obra local para comunidades em situação de vulnerabilidade no Brasil.

**CTAs:** "Quero apoiar o projeto" | "Quero ser voluntário(a)"

### Bloco "O que fazemos" (3 cards)

1. **Atendimento odontológico gratuito** — Levamos procedimentos e cuidados essenciais para quem tem pouco ou nenhum acesso a serviços odontológicos.
2. **Voluntariado profissional** — Dentistas e profissionais da saúde somam forças em missões organizadas, com impacto real e mensurável.
3. **Formação local (ASB)** — Durante a permanência do caminhão na comunidade, treinamos moradores como auxiliares de saúde bucal, fortalecendo oportunidades e autonomia.

### Como Funciona (4 etapas com ícones)

1. **Seleção do território e articulação local** — Em conjunto com parceiros locais, definimos a comunidade, logística e estrutura necessária para o período de atuação.
2. **Instalação e início dos atendimentos** — O caminhão funciona como consultório odontológico equipado, com equipe e protocolos de segurança.
3. **Ações educativas e mobilização comunitária** — Além do atendimento, realizamos prevenção e orientações de saúde bucal.
4. **Formação prática de moradores (ASB)** — Moradores da comunidade podem ser treinados como auxiliares durante o período de atuação, recebendo certificado de participação.

### Impacto

**H1:** Impacto que se mede em sorrisos — e em oportunidades.

**Texto:** O impacto do ITBSS vai além do consultório. A cada ciclo, levamos atendimento odontológico, prevenção e mobilização social. E, quando formamos pessoas do território, fortalecemos também a autonomia e o futuro profissional local.

**Blocos de números** (placeholders para dados reais):
- +X atendimentos realizados
- +X procedimentos odontológicos
- XX municípios/territórios atendidos
- XX voluntários mobilizados (Brasil / Alemanha)
- XX pessoas capacitadas (ASB)

Incluir: **mapa interativo** (react-leaflet) com pontos onde o ITBSS já passou + depoimentos (morador, voluntário, coordenação).

**CTA:** "Quero apoiar para ampliar esse impacto"

### Como Apoiar

**H1:** Parcerias que garantem continuidade, qualidade e escala.

**Texto:** Para manter e expandir o ITBSS, buscamos parceiros comprometidos com impacto social, saúde e inclusão. O apoio fortalece a capacidade operacional do projeto, amplia os atendimentos e viabiliza formação local.

**Modelos de apoio (cards):**
- Patrocínio institucional (cota anual ou por missão)
- Apoio com insumos odontológicos
- Logística e manutenção
- Apoio à Formação ASB (parceria educacional)
- Parcerias públicas (secretarias, prefeituras, rede de saúde)

**Contrapartidas:** Visibilidade institucional | Relatórios de impacto | Conteúdos em redes sociais | Possibilidade de visita técnica (ética e LGPD)

**CTA:** "Quero ser parceiro"

### Seja Voluntário

**H1:** Profissionais que doam tempo, técnica e cuidado — com impacto real.

**Texto:** O ITBSS conta com a força de profissionais comprometidos com a saúde e com o social. Buscamos dentistas e colaboradores que queiram contribuir com atendimento humanizado e organizado em missões e ações.

**Quem pode:** Cirurgiões-dentistas | Auxiliares / TSB | Profissionais de apoio (triagem, logística, educação em saúde)

**3 passos:** 1. Cadastro → 2. Triagem e alinhamento de disponibilidade → 3. Orientações e entrada em agenda de atuação

**CTA:** "Quero me voluntariar"

### Formação ASB

**H1:** Formação prática local: inclusão produtiva dentro do próprio território.

**Texto:** Durante a permanência do ITBSS na comunidade, realizamos uma formação prática de moradores interessados em atuar como auxiliares no apoio aos atendimentos e rotinas de biossegurança. A vivência acontece de forma aplicada, com acompanhamento da equipe.

**Bloco "Importante":** O certificado emitido registra a participação e a formação prática realizada, e a instituição busca parcerias com instituições de ensino e/ou entidades habilitadas para apoiar a validação e o reconhecimento formal desse percurso formativo.

**CTA:** "Quero conversar sobre parceria de certificação"

### O Projeto (textos completos)

**H1:** Um projeto que conecta Brasil e Alemanha pela saúde e pela dignidade dos mais vulneráveis.

**Propósito:** Levar saúde bucal a quem mais precisa, transformando realidades com cuidado, dignidade e presença direta nos territórios onde o acesso ainda não chega.

**Posicionamento:** O ITBSS é uma iniciativa de impacto social que conecta Brasil e Alemanha por meio da saúde, do voluntariado e da formação local, atuando diretamente em comunidades em situação de vulnerabilidade com uma estrutura itinerante completa.

**Pilares:**
- **Saúde que transforma territórios** — Levamos atendimento odontológico gratuito e ações de prevenção diretamente às comunidades, reduzindo desigualdades no acesso à saúde.
- **Voluntariado com impacto real** — Mobilizamos profissionais comprometidos que atuam de forma organizada e humanizada, gerando impacto direto na vida das pessoas atendidas.
- **Formação que gera futuro** — Capacitamos moradores das próprias comunidades, criando oportunidades de desenvolvimento, autonomia e inserção no mercado de trabalho.
- **Cooperação que amplia impacto** — Fortalecemos a parceria entre instituições brasileiras e alemãs, ampliando a capacidade de atuação e garantindo continuidade ao projeto.

**Visão:** Ampliar o alcance do projeto, fortalecer parcerias institucionais e consolidar o ITBSS como referência em saúde bucal itinerante e cooperação internacional, garantindo sua sustentabilidade e expansão contínua.

**Princípios:** Cuidado com respeito e humanidade | Ética e transparência nas ações | Compromisso com as comunidades atendidas | Uso responsável e eficiente dos recursos | Cooperação e espírito de voluntariado

### Transparência

**H1:** Transparência e formalização institucional.

**Texto:** Acreditamos que projetos sociais fortes se sustentam com confiança, prestação de contas e clareza institucional.

**Downloads (cards com PDF):** Estatuto Social do ITBSS | Certificado/registro CRO-BA

### Contato

**H1:** Fale com a equipe do ITBSS.

**Texto:** Se você quer apoiar, ser voluntário, propor parceria pública ou educacional, preencha o formulário abaixo. Retornaremos o mais breve possível.

---

## Forms (implement exactly)

### Formulário padrão (Contato)

| Campo | Tipo | Placeholder | Obrigatório |
|---|---|---|---|
| Nome completo | text | "Digite seu nome" | sim |
| E-mail | email | "seuemail@dominio.com" | sim |
| Telefone/WhatsApp | tel | "(DD) 9xxxx-xxxx" | não |
| Cidade/UF | text | "Ex.: Salvador/BA" | não |
| Assunto | dropdown | — | sim |
| Mensagem | textarea | "Conte rapidamente como podemos ajudar" | sim |

**Assunto options:** Apoiar \| Voluntário \| Parceria educacional \| Levar para minha cidade \| Imprensa \| Outros

**LGPD text (below button):** "Ao enviar, você concorda com o uso dos seus dados para retorno de contato. Não compartilhamos suas informações com terceiros."

**Button:** "Enviar"

### Formulário "Quero apoiar" (campos adicionais)

- Empresa/Instituição* — "Nome da empresa"
- Cargo — "Seu cargo"
- Tipo de apoio (multi-select): Patrocínio \| Insumos \| Logística/manutenção \| Formação ASB \| Parceria institucional
- Faixa de investimento (opcional): Até R$… \| R$… a R$… \| A definir
- Prazo de interesse: imediato \| 30–60 dias \| 90+ dias
- Como conheceu o projeto? — "Indicação, redes sociais…"
- **Button:** "Quero conversar sobre parceria"

### Formulário "Seja voluntário" (campos adicionais)

- Profissão*: Cirurgião-dentista \| ASB \| TSB \| Estudante \| Outro
- Registro profissional (se aplicável): "CRO/UF e número"
- Disponibilidade: Curta \| Média \| Longa (a combinar)
- Aceita atuar em outros municípios?: Sim \| Não \| Depende
- **Button:** "Cadastrar para voluntariado"

### Formulário "Parceria educacional (Formação ASB)" (campos adicionais)

- Instituição*
- Área/Curso relacionado — "Ex.: Odontologia, Técnico em Saúde Bucal…"
- Modelo de parceria: desenho pedagógico \| validação/certificação \| docência/mentoria \| outros
- **Button:** "Propor parceria educacional"

### Mensagens automáticas

- **Sucesso (contato):** "Mensagem enviada com sucesso! Obrigado pelo contato. Nossa equipe responderá o mais breve possível."
- **Sucesso (parceria):** "Recebemos seu interesse em apoiar o ITBSS. Em breve entraremos em contato com os próximos passos."
- **Sucesso (voluntário):** "Cadastro realizado! Obrigado por se disponibilizar. A equipe entrará em contato quando houver ações compatíveis."
- **Erro genérico:** "Opa! Não foi possível enviar agora. Tente novamente em alguns minutos."
- **Validações:** "Este campo é obrigatório." \| "Digite um e-mail válido." \| "Digite um telefone válido."

---

## CTAs & Microcopy

**Botões principais:**
- Quero apoiar
- Quero ser voluntário(a)
- Quero levar o ITBSS para minha cidade
- Quero apoiar a Formação ASB
- Baixar apresentação institucional
- Falar com a equipe
- Enviar mensagem
- Ver transparência
- Conhecer o impacto
- Assistir ao vídeo institucional

---

## Footer

**Texto:** Projeto ITBSS — AZB-Plus (Alemanha) e ITBSS (Brasil).
**Contato:** [e-mail] | [WhatsApp]
**Copyright:** © [Ano] ITBSS. Todos os direitos reservados.
**Links obrigatórios:** Transparência | LGPD | Notícias / Atualizações | FAQ | Imprensa / Kit mídia | AZB-Plus (Alemanha) / ITBSS (Brasil)

---

## Header

- Logo à esquerda + nav menu + **CTA primário fixo à direita:** "Quero apoiar"
- CTA secundário discreto: "Voluntariado"
- Fundo transparente sobre hero → branco com blur ao rolar
- Nav items (scroll links): Início | O Projeto | Impacto | Como Apoiar | Seja Voluntário | Formação ASB | Transparência | Contato

---

## FAQ (16 perguntas — usar este texto exato)

1. **O que é o ITBSS?** — É um consultório odontológico sobre rodas que realiza atendimentos gratuitos e ações educativas em saúde bucal, além de apoiar a formação prática local.
2. **Quem realiza o projeto?** — O projeto acontece em cooperação entre a AZB-Plus (Alemanha) e o ITBSS (Brasil), com apoio de voluntários e parceiros locais.
3. **Em quais regiões o ITBSS atua?** — Em diferentes municípios/estados, conforme planejamento anual, parcerias e condições de operação.
4. **O atendimento é realmente gratuito?** — Sim. O atendimento oferecido pelo ITBSS é gratuito para a população atendida, conforme organização local.
5. **Quais tipos de procedimentos são realizados?** — Variam conforme estrutura e necessidade local, incluindo atendimentos clínicos e ações preventivas.
6. **Como a comunidade é selecionada?** — Considera vulnerabilidade, falta de assistência e viabilidade de logística, em parceria com atores locais.
7. **Como empresas e instituições podem apoiar?** — Via patrocínio, doação de insumos, apoio logístico/manutenção e apoio à Formação ASB.
8. **Quais contrapartidas um patrocinador pode receber?** — Presença institucional, relatórios de impacto e materiais de comunicação, sempre com ética e LGPD.
9. **Como posso ser voluntário(a)?** — Cadastre-se em "Seja voluntário". A equipe avalia e entra em contato para alinhamento de disponibilidade.
10. **Preciso ser dentista para voluntariar?** — O foco é saúde bucal, mas podem existir vagas de apoio conforme a necessidade local.
11. **O projeto registra fotos e vídeos?** — Sim, seguindo critérios de ética, respeito e privacidade; autorizações podem ser solicitadas.
12. **O que é a Formação ASB e como funciona?** — Formação prática local durante a permanência do caminhão, com acompanhamento da equipe.
13. **A certificação da Formação ASB tem validade legal?** — O certificado registra participação e prática; busca-se parceria com instituição habilitada para reconhecimento formal.
14. **Como uma instituição de ensino pode apoiar a validação?** — Pode apoiar com trilha pedagógica complementar, validação conforme regras internas ou docência/mentoria.
15. **Como entrar em contato para levar o ITBSS para minha cidade?** — Preencha o formulário e selecione essa opção, informando município/UF e possíveis parceiros.
16. **Como acompanhar atualizações?** — Acompanhe redes sociais oficiais e a seção de Atualizações/Notícias do site.

**FAQ UI:** accordion (abre/fecha), pergunta em negrito, resposta em texto leve, fundo `#F2F4F7`.

---

## Photography direction (when selecting images)

- Style: real, documentary, no forced poses
- Prioritize: natural expressions, team in action, truck/caminhão, organized lines, biossegurança details
- Avoid: clear patient identification without formal authorization; prefer backs, hands, context shots
- Light: natural when possible, clean interiors
- Colors in photos: neutral tones with blue/green emphasis (coherent with palette)
