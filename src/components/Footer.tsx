import React from "react";
import {
  // Mail,
  Phone,
  MapPin,
  // Facebook,
  // Twitter,
  Instagram,
  Linkedin,
  Mail,
  // Github,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { title: "About Us", href: "/about-us" },
      { title: "Services", href: "/services" },
      { title: "Resources", href: "/resources" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
    ],
    services: [
      { title: "Web Designs" },
      { title: "Logo Designs" },
      { title: "UI/UX Design" },
      { title: "ASO" },
    ],
    contact: [
      {
        icon: <Mail className="w-4 h-4" />,
        title: "miracodigitalsolutions@gmail.com",
        href: "mailto:miracodigitalsolutions@gmail.com",
      },
      {
        icon: <Phone className="w-4 h-4" />,
        title: "+44 7442075997",
        href: "tel:+447442075997",
      },
      {
        icon: <MapPin className="w-4 h-4" />,
        title: "2 Frederick Street, Kings Cross, London, UNITED KINGDOM",
        href: "",
      },
    ],
  };

  const socialLinks = [
    // { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    // { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/miraco.uk", label: "Instagram" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/miraco-digital-solutions-ltd",
      label: "LinkedIn",
    },
    // {
    //   icon: <Github className="w-5 h-5" />,
    //   href: "https://github.com/7-chicken-labs",
    //   label: "GitHub",
    // },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                width={80}
                height={80}
                src="/miraco-logo-no-border.png"
                alt="Company Logo"
                className="object-contain mb-6"
              />
              {/* <p className="text-gold text-cinzel text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold leading-tight mb-4">
                Miraco
              </p> */}
              <p className="text-gray-200 text-sm leading-relaxed">
                Crafting digital excellence through innovative solutions. We
                transform challenges into victories with cutting-edge technology
                and creative design.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-10 h-10 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/5"
                  aria-label={social.label}
                  target="_blank"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-white font-medium text-lg mb-6">Contact</p>
            <ul className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
                  >
                    <span className="text-white/50 group-hover:text-white/80 transition-colors duration-300">
                      {contact.icon}
                    </span>
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <p className="text-white font-medium text-lg mb-6">Services</p>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={"/services"}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-white font-medium text-lg mb-6">Company</p>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-200 text-sm">
              © {currentYear} Miraco, All rights reserved.
            </p>
            {/* <p className="text-gray-200 text-sm">Powered By 7ChickenLabs</p> */}
            <div className="flex md:flex-row flex-col text-center gap-6">
              <a
                href="/resources/service-level-agreement-miraco-digital-solutions"
                target="_blank"
                className="text-white hover:text-white transition-colors duration-300 text-sm"
              >
                Service Level Agreement
              </a>
              <a
                href="/resources/privacy-policy-miraco-digital-solutions"
                target="_blank"
                className="text-white hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/resources/terms-and-conditions-miraco-digital-solutions"
                target="_blank"
                className="text-white hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}