"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const NAV_ITEMS = [
  { label: "O Projeto", to: "projeto" },
  { label: "Impacto", to: "impacto" },
  { label: "Como Apoiar", to: "apoio" },
  { label: "Voluntário", to: "voluntario" },
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-4"}`}>
      <Container className="flex items-center justify-between">
        <Link to="inicio" smooth={true} duration={500} className={`cursor-pointer text-xl font-bold font-heading block shrink-0 transition-colors duration-300 ${scrolled ? "text-primary-600" : "text-white"}`}>
          ITBSS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary-500 font-semibold"
                  className={`text-sm font-medium cursor-pointer transition-colors ${scrolled ? "text-grayui hover:text-primary-500" : "text-white/80 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="apoio" smooth={true} duration={500}>
            <Button size="sm">Quero apoiar</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`lg:hidden p-2 transition-colors ${scrolled ? "text-primary-600" : "text-white"}`} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden flex flex-col h-screen">
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
              <Button className="w-full">Quero apoiar</Button>
            </Link>
            <Link to="voluntario" smooth={true} duration={500} onClick={toggleMenu}>
              <Button variant="outline" className="w-full">Quero ser voluntário(a)</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile sticky CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-bordercolor bg-white shadow-elevated" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <Link to="apoio" smooth={true} duration={500} className="flex-1">
          <button className="w-full py-4 text-sm font-bold text-primary-500 text-center">
            Apoiar
          </button>
        </Link>
        <div className="w-px bg-bordercolor" />
        <Link to="voluntario" smooth={true} duration={500} className="flex-1">
          <button className="w-full py-4 text-sm font-bold text-primary-500 text-center">
            Voluntário
          </button>
        </Link>
      </div>
    </header>
  );
}
