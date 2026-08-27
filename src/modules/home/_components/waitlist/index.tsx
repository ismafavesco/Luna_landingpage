import { useState } from "react";
import { motion } from "framer-motion";

/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DE LA LISTA DE ESPERA
 * ─────────────────────────────────────────────────────────────
 *  Pega aquí el endpoint del formulario. Opciones gratuitas:
 *
 *  · Formspree  → https://formspree.io  (crea un form y copia la URL)
 *  · Getform    → https://getform.io
 *  · Google Forms / Sheets vía Apps Script
 *
 *  Ejemplo: "https://formspree.io/f/xxxxxxx"
 *
 *  Mientras esté vacío, el formulario muestra un mensaje de éxito
 *  simulado sin enviar nada a ningún lado.
 * ─────────────────────────────────────────────────────────────
 */
const WAITLIST_ENDPOINT = "";

type Status = "idle" | "loading" | "success" | "error";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Escribe un correo válido para poder avisarte.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Sin endpoint configurado: simulamos el envío
    if (!WAITLIST_ENDPOINT) {
      setTimeout(() => {
        setStatus("success");
        setMessage("¡Listo! Te avisamos en cuanto Luna esté disponible.");
        setEmail("");
      }, 700);
      return;
    }

    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, origen: "landing-luna" }),
      });

      if (!res.ok) throw new Error("Error en el envío");

      setStatus("success");
      setMessage("¡Listo! Te avisamos en cuanto Luna esté disponible.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Algo salió mal. Vuelve a intentarlo en un momento.");
    }
  };

  return (
    <section id="lista" className="max-w-screen-lg mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-base-200 via-base-300/60 to-base-200 px-6 py-12 text-center md:px-16"
      >
        {/* resplandor decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-secondary">
            Lista de espera
          </p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Sé de las primeras personas en usar Luna
          </h2>
          <p className="mx-auto mb-8 max-w-xl opacity-70">
            Déjanos tu correo y te avisamos el día del lanzamiento. Sin spam,
            solo un aviso cuando Luna esté lista para descargar.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5"
            >
              <span className="text-2xl" aria-hidden="true">
                ✦
              </span>
              <p className="m-0 text-left font-medium">{message}</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="waitlist-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="tucorreo@ejemplo.com"
                className="input input-bordered flex-1 border-primary/30 bg-base-100/70 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary whitespace-nowrap"
              >
                {status === "loading" ? "Enviando..." : "Avísame"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-error">{message}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Waitlist;
