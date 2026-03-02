import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavItems, serviceNavItems } from "@/config/navigation";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer
      className="bg-primary-900 text-neutral-300"
      aria-label="Informations de contact et navigation"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-6">
              <Logo light />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              {siteConfig.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-accent-400 hover:bg-white/[0.12] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-accent-400 hover:bg-white/[0.12] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-accent-400 hover:bg-white/[0.12] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-heading text-base font-normal text-white mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-heading text-base font-normal text-white mb-5">
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-heading text-base font-normal text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 text-accent-400 hover:text-accent-300 transition-colors duration-200 font-semibold text-base"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-accent-400 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-400">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-400">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Lun-Ven: {siteConfig.openingHours.weekdays}
                  <br />
                  Sam: {siteConfig.openingHours.saturday}
                  <br />
                  Urgences: {siteConfig.openingHours.emergency}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.legalName} — SIRET{" "}
              {siteConfig.siret}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="hover:text-accent-400 transition-colors duration-200"
              >
                Mentions l&eacute;gales
              </Link>
              <span className="text-neutral-700">|</span>
              <Link
                href="/mentions-legales#confidentialite"
                className="hover:text-accent-400 transition-colors duration-200"
              >
                Politique de confidentialit&eacute;
              </Link>
              <span className="text-neutral-700">|</span>
              <Link
                href="/admin"
                className="hover:text-accent-400 transition-colors duration-200"
              >
                Admin
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-neutral-600">
            Site con&ccedil;u par{" "}
            <a
              href="https://agencecelexia.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-400 transition-colors duration-200"
            >
              Agence Celexia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
