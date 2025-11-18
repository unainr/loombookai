"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Helpful Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Create Book", href: "/create-book" },
        { label: "All Book", href: "/all-books" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        {
          label: "Live Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "hello@bookloom.com",
      href: "mailto:hello@bookloom.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 86373 73116",
      href: "tel:+918637373116",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Sylhet, Bangladesh",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
   <><footer className="bg-[#0F0F11]/10 dark:bg-[#0F0F11]/30 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
             AI-powered e-book generation platform. BookLoom transforms your ideas into professionally crafted digital books with intelligent automation.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors"
                    >
                      {link.label}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-border my-8" />

        {/* Bottom Section with Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 BookLoom. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#d3803c]/10 dark:bg-[#e09043]/10 hover:bg-[#d3803c] dark:hover:bg-[#e09043] text-[#d3803c] dark:text-[#e09043] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-120 -mt-52 -mb-36 ">
        <TextHoverEffect text="BookLoom" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  </>
  );
}

export default Footer;