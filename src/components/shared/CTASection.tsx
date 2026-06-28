import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  MapPin,
  Phone,
  ArrowUpRight,
  Instagram,
  Sparkles,
} from "lucide-react";
import Button from "./Button";
import GlassCard from "./GlassCard";

export default function CTASection() {
  return (
    <section
      id="cta-section"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-secondary-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlassCard
          glowColor="blue"
          hoverEffect={false}
          className="relative overflow-hidden border-2 border-primary-teal/15 p-8 sm:p-12 md:p-16 text-center rounded-3xl bg-gradient-to-br from-white/90 via-gray-50/70 to-white/90 shadow-2xl"
        >
          {/* Top spark indicator */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary-teal/10 to-primary-blue/10 text-primary-blue border border-primary-teal/20">
              <Sparkles className="w-4 h-4 text-primary-teal animate-pulse" />
              <span>Let's Co-create the Future</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 font-sans tracking-tight max-w-3xl mx-auto leading-tight mb-4">
            Ready to Unlock Your <br className="hidden sm:inline" />
            Future Potential?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            Join thousands of individuals and dozens of leading organizations
            that have transformed their capacities and biological ecosystems
            with APR Foundation. We are ready to help you reach your highest
            potential.
          </p>

          {/* Contact Details Grid (Aesthetic layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto mb-12 border-y border-gray-150/60 py-10">
            {/* Address */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-primary-teal/10 text-primary-teal shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider font-mono mb-1">
                  Our HQ
                </h4>
                <p className="text-sm text-gray-600 leading-snug">
                  South Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-primary-blue/10 text-primary-blue shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider font-mono mb-1">
                  Email Us
                </h4>
                <a
                  href="mailto:info@aprfoundation.org"
                  className="text-sm text-gray-600 hover:text-primary-blue transition-colors leading-snug break-all"
                >
                  info@aprfoundation.org
                </a>
              </div>
            </div>

            {/* Web */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider font-mono mb-1">
                  Web portal
                </h4>
                <a
                  href="https://www.aprfoundation.org"
                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors leading-snug"
                >
                  www.aprfoundation.org
                </a>
              </div>
            </div>

            {/* Contact Persons */}
            <div className="flex items-start space-x-3.5 col-span-1">
              <div className="p-2.5 rounded-xl bg-secondary-purple/10 text-secondary-purple shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider font-mono mb-1">
                  Contact Leads
                </h4>
                <div className="flex flex-col text-xs sm:text-sm text-gray-600 space-y-1">
                  <a
                    href="tel:+6282134224947"
                    className="hover:text-primary-blue transition-colors font-medium"
                  >
                    +62 8213-4224-947 (Aulia)
                  </a>
                  <a
                    href="tel:+6281575238239"
                    className="hover:text-secondary-purple transition-colors font-medium"
                  >
                    +62 8157-5238-239 (Marta)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Button
              variant="secondary"
              icon={<ArrowUpRight className="w-4.5 h-4.5" />}
              onClick={() => {
                window.location.href =
                  "mailto:info@aprfoundation.org?subject=Collaboration%20Proposal";
              }}
              className="py-3 px-8"
            >
              Collaborate With Us
            </Button>
            <Button
              variant="outline"
              icon={<Instagram className="w-4.5 h-4.5" />}
              onClick={() => {
                window.open("https://instagram.com/aprfoundation", "_blank");
              }}
              className="py-3 px-8 border border-gray-250 hover:bg-gray-100"
            >
              Visit Our Instagram
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
