import { motion } from "framer-motion";
import WaitlistForm from "../../../../components/waitlistForm";

function Waitlist() {
  return (
    <section id="lista" className="max-w-screen-lg mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-base-200 via-base-300/60 to-base-200 px-6 py-12 text-center md:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-secondary">
            Pre-registro
          </p>
          <h2 className="mb-3 text-3xl font-sketch md:text-4xl">
            Sé de las primeras personas en usar Luna
          </h2>
          <p className="mx-auto mb-8 max-w-xl opacity-70">
            Déjanos tu WhatsApp o tu correo y el día del lanzamiento te llega
            el link de descarga directo. Los primeros registros estrenan Luna
            antes que nadie.
          </p>

          <WaitlistForm />
        </div>
      </motion.div>
    </section>
  );
}

export default Waitlist;
