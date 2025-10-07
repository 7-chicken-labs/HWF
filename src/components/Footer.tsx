import React from "react";
import {
  // Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  // Github,
} from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about-us" },
      { title: "Programs", href: "/programs" },
      { title: "Contact", href: "/contact" },
    ],
    contact: [
      {
        icon: <Mail className="w-4 h-4" />,
        title: "test@gmail.com",
        href: "mailto:test@gmail.com",
      },
      {
        icon: <Phone className="w-4 h-4" />,
        title: "+1234567890",
        href: "tel:+1234567890",
      },
      {
        icon: <MapPin className="w-4 h-4" />,
        title: "Address Goes here",
        href: "",
      },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="text-black border-t border-black/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* <Image
                width={80}
                height={80}
                src="/miraco-logo-no-border.png"
                alt="Company Logo"
                className="object-contain mb-6"
              /> */}
              <p className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold leading-tight mb-4">
                Company Logo
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                Description Goes here
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-10 h-10 border border-black/20 hover:border-black/40 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/5"
                  aria-label={social.label}
                  target="_blank"
                >
                  <span className="text-black/70 group-hover:text-black transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-black font-medium text-lg mb-4">Contact</p>
            <ul className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 text-black hover:text-gray-800 transition-colors duration-300 text-sm group"
                  >
                    <span className="text-black">{contact.icon}</span>
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-black font-medium text-lg mb-4">Pages</p>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-gray-800 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {currentYear} Copyright.</p>
            {/* <p className="text-gray-200 text-sm">Powered By 7ChickenLabs</p> */}
            <div className="flex md:flex-row flex-col text-center gap-4">
              <a
                href="#"
                className="text-black hover:text-black transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black hover:text-black transition-colors duration-300 text-sm"
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