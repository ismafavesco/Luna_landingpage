import { useState } from "react";
import { motion } from "framer-motion";
import { joinWaitlist, isValidEmail, isValidPhone } from "../../utils/waitlist";

type Channel = "email" | "phone";
type Platform = "ios" | "android" | null;
type Status = "idle" | "loading" | "success" | "error";

interface Props {
  /** compact = versión para la página /registro (más grande, centrada) */
  compact?: boolean;
}

function WaitlistForm({ compact = false }: Props) {
  const [channel, setChannel] = useState<Channel>("phone");
  const [platform, setPlatform] = useState<Platform>(null);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = value.trim();

    if (channel === "email" && !isValidEmail(v)) {
      setStatus("error");
      setMessage("Escribe un correo válido para poder avisarte.");
      return;
    }
    if (channel === "phone" && !isValidPhone(v)) {
      setStatus("error");
      setMessage("Escribe tu número a 10 dígitos (ej. 614 123 4567).");
      return;
    }

    setStatus("loading");
    setMessage("");

    const r = await joinWaitlist({
      email: channel === "email" ? v : undefined,
      phone: channel === "phone" ? v : undefined,
      platform,
    });

    if (r.ok) {
      setStatus("success");
      setMessage(
        r.code === "already_registered"
          ? "Ya estabas en la lista. Te avisamos el día del lanzamiento."
          : channel === "phone"
            ? "¡Listo! Te mandamos el link de descarga por WhatsApp el día del lanzamiento."
            : "¡Listo! Te mandamos el link de descarga por correo el día del lanzamiento."
      );
      setValue("");
      return;
    }

    setStatus("error");
    setMessage(
      r.code === "invalid_email"
        ? "Ese correo no parece válido."
        : r.code === "invalid_phone"
          ? "Ese número no parece válido. Usa 10 dígitos."
          : "Algo salió mal. Vuelve a intentarlo en un momento."
    );
  };

  const tabBase =
    "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200";
  const tabOn = "bg-primary text-primary-content";
  const tabOff = "text-base-content/70 hover:text-base-content";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5 text-left"
      >
        <span className="mt-0.5 text-2xl text-primary" aria-hidden="true">✦</span>
        <div>
          <p className="m-0 font-medium">{message}</p>
          <p className="m-0 mt-1 text-sm opacity-60">
            Mientras tanto, síguenos en{" "}
            <a
              href="https://instagram.com/lunaconecta"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-primary/60 underline-offset-2"
            >
              @lunaconecta
            </a>
            .
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      {/* canal */}
      <div
        role="tablist"
        aria-label="Cómo quieres que te avisemos"
        className="mb-4 flex rounded-full border border-primary/25 bg-base-100/60 p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={channel === "phone"}
          onClick={() => { setChannel("phone"); setValue(""); setStatus("idle"); }}
          className={`${tabBase} ${channel === "phone" ? tabOn : tabOff}`}
        >
          WhatsApp
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={channel === "email"}
          onClick={() => { setChannel("email"); setValue(""); setStatus("idle"); }}
          className={`${tabBase} ${channel === "email" ? tabOn : tabOff}`}
        >
          Correo
        </button>
      </div>

      {/* input + boton */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-contact" className="sr-only">
          {channel === "phone" ? "Número de WhatsApp" : "Correo electrónico"}
        </label>
        {channel === "phone" ? (
          <div className="flex flex-1 items-center rounded-lg border border-primary/30 bg-base-100/70 focus-within:border-primary">
            <span className="pl-4 pr-2 text-sm opacity-60 select-none">+52</span>
            <input
              id="waitlist-contact"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              value={value}
              onChange={(e) => { setValue(e.target.value); if (status === "error") setStatus("idle"); }}
              placeholder="614 123 4567"
              className={`input flex-1 border-0 bg-transparent px-1 focus:outline-none ${compact ? "h-14 text-lg" : ""}`}
            />
          </div>
        ) : (
          <input
            id="waitlist-contact"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={value}
            onChange={(e) => { setValue(e.target.value); if (status === "error") setStatus("idle"); }}
            placeholder="tucorreo@ejemplo.com"
            className={`input input-bordered flex-1 border-primary/30 bg-base-100/70 focus:border-primary focus:outline-none ${compact ? "h-14 text-lg" : ""}`}
          />
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn btn-primary whitespace-nowrap ${compact ? "h-14 min-h-14 px-8 text-base" : ""}`}
        >
          {status === "loading" ? "Enviando..." : "Quiero el link"}
        </button>
      </div>

      {/* plataforma */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm">
        <span className="opacity-60">Lo usaré en</span>
        {(["ios", "android"] as const).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={platform === p}
            onClick={() => setPlatform(platform === p ? null : p)}
            className={`rounded-full border px-3 py-1 transition-colors ${
              platform === p
                ? "border-primary bg-primary/20 text-base-content"
                : "border-primary/25 text-base-content/70 hover:border-primary/60"
            }`}
          >
            {p === "ios" ? "iPhone" : "Android"}
          </button>
        ))}
      </div>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-error">{message}</p>
      )}

      <p className="mt-4 text-center text-xs opacity-50">
        Sin spam. Solo un mensaje con el link de descarga cuando Luna esté disponible.
      </p>
    </form>
  );
}

export default WaitlistForm;
