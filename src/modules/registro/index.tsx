import { motion } from "framer-motion";
import WaitlistForm from "../../components/waitlistForm";
import { ConfigContext } from "../../utils/configContext";
import type { TemplateConfig } from "../../utils/configType";

interface Props {
  config: TemplateConfig;
}

/** Página de pre-registro para links de Instagram / TikTok: luna-conecta.com/registro */
function RegistroPage({ config }: Props) {
  return (
    <ConfigContext.Provider value={config}>
      <main className="relative min-h-screen overflow-hidden flex flex-col">
        {/* fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-32 h-[26rem] w-[26rem] rounded-full bg-secondary/30 blur-3xl"
        />

        <header className="relative z-10 flex items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2 no-underline">
            <img src={config.logo} alt="Luna" className="h-9 w-9 object-contain" />
            <span className="font-sketch text-2xl">Luna</span>
          </a>
          <a href="/" className="text-sm opacity-60 hover:opacity-100">
            Conocer más
          </a>
        </header>

        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-6 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={config.logo}
            alt=""
            aria-hidden="true"
            className="mb-6 h-28 w-28 object-contain md:h-36 md:w-36"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-xs uppercase tracking-[0.3em] text-secondary"
          >
            Pre-registro
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-3 max-w-xl font-sketch text-4xl leading-tight md:text-5xl"
          >
            Tu próxima conexión está escrita en las estrellas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 max-w-md opacity-70"
          >
            Luna conecta personas por compatibilidad astrológica y numerológica.
            Déjanos tu WhatsApp o correo y te llega el link de descarga el día
            del lanzamiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-lg rounded-3xl border border-primary/25 bg-base-200/70 p-6 backdrop-blur md:p-8"
          >
            <WaitlistForm compact />
          </motion.div>

          <div className="mt-8 flex items-center gap-4 opacity-50">
            <img src="/stores/app-store.svg" alt="App Store" className="h-9" />
            <img src="/stores/google-play.svg" alt="Google Play" className="h-9" />
          </div>
          <p className="mt-2 text-xs opacity-40">Próximamente en iOS y Android</p>
        </section>

        <footer className="relative z-10 px-6 pb-6 text-center text-xs opacity-40">
          <a href="/privacy-policy" className="mx-2">Privacidad</a>
          <a href="/terms-and-conditions" className="mx-2">Términos</a>
        </footer>
      </main>
    </ConfigContext.Provider>
  );
}

export default RegistroPage;
