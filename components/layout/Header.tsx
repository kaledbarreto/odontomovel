"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const NAV_ITEMS = [
  { label: "Início", to: "inicio" },
  { label: "O Projeto", to: "projeto" },
  { label: "Impacto", to: "impacto" },
  { label: "Como Apoiar", to: "apoio" },
  { label: "Seja Voluntário", to: "voluntario" },
  { label: "Formação ASB", to: "formacao-asb" },
  { label: "Transparência", to: "transparencia" },
  { label: "Contato", to: "contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <Container className="flex items-center justify-between">
        <Link to="inicio" smooth={true} duration={500} className={`cursor-pointer text-2xl font-bold block shrink-0 transition-colors duration-300 ${scrolled ? "text-primary-600" : "text-white"}`}>
          Odontomóvel
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-brand-orange font-bold"
                  className={`text-sm font-medium cursor-pointer transition-colors ${scrolled ? "text-neutral-600 hover:text-primary-500" : "text-white/80 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 ml-4 border-l border-neutral-200 pl-6">
            <Link to="apoio" smooth={true} duration={500}>
              <Button variant={scrolled ? "outline" : "ghost"} size="sm" className={!scrolled ? "text-white border-white/30 hover:bg-white/10" : ""}>Apoiar</Button>
            </Link>
            <Link to="voluntario" smooth={true} duration={500}>
              <Button size="sm">Ser Voluntário</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className={`xl:hidden p-2 transition-colors ${scrolled ? "text-primary-600" : "text-white"}`} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 xl:hidden flex flex-col h-screen">
          <ul className="flex flex-col gap-6 text-xl font-semibold text-primary-600">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="block cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pb-10 flex flex-col gap-4">
            <Link to="apoio" smooth={true} duration={500} onClick={toggleMenu}>
              <Button variant="outline" className="w-full">Quero Apoiar</Button>
            </Link>
            <Link to="voluntario" smooth={true} duration={500} onClick={toggleMenu}>
              <Button className="w-full">Quero ser Voluntário</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
