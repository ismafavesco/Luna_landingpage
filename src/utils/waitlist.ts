/**
 * Pre-registro de Luna.
 * Los datos se guardan en Supabase (proyecto "luna-waitlist") a través de la
 * función `join_waitlist`. La tabla no acepta lecturas ni escrituras directas:
 * todo pasa por esa función, así que la clave publishable es segura en el cliente.
 */
export const SUPABASE_URL = "https://ppcnkfqfrxdnrnteuadl.supabase.co";
export const SUPABASE_KEY = "sb_publishable_cgD5bHTW4b1Ob5pHUlRQ3g_C0ZsJ26J";

export type JoinResult =
  | { ok: true; code: "registered" | "already_registered" }
  | { ok: false; code: "invalid_email" | "invalid_phone" | "contact_required" | "network" };

export interface JoinPayload {
  email?: string;
  phone?: string;
  platform?: "ios" | "android" | null;
}

/** Lee ?src= / ?utm_source= y ?utm_campaign= de la URL (p. ej. links de Instagram). */
export function getAttribution() {
  if (typeof window === "undefined") return { source: "landing", campaign: null };
  const q = new URLSearchParams(window.location.search);
  const source =
    q.get("src") || q.get("utm_source") || q.get("ref") ||
    (document.referrer.includes("instagram") ? "instagram" : null) ||
    (document.referrer.includes("tiktok") ? "tiktok" : null) ||
    (document.referrer.includes("facebook") ? "facebook" : null) ||
    "landing";
  const campaign = q.get("utm_campaign") || q.get("c") || null;
  return { source, campaign };
}

export async function joinWaitlist(p: JoinPayload): Promise<JoinResult> {
  const { source, campaign } = getAttribution();
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/join_waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify({
        p_email: p.email || null,
        p_phone: p.phone || null,
        p_platform: p.platform || null,
        p_source: source,
        p_campaign: campaign,
        p_user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      }),
    });
    if (!res.ok) return { ok: false, code: "network" };
    const data = (await res.json()) as JoinResult;
    if (data?.ok) {
      try { localStorage.setItem("luna_waitlist", "1"); } catch {}
    }
    return data;
  } catch {
    return { ok: false, code: "network" };
  }
}

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isValidPhone = (v: string) => v.replace(/\D/g, "").length >= 10;
