export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, consent, noticeVersion } = req.body || {};
  if (!email || !consent) return res.status(400).json({ error: "Email and consent are required" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Invalid email" });

  const { GOOGLE_FORM_ACTION_URL, GOOGLE_FORM_ENTRY_EMAIL, GOOGLE_FORM_ENTRY_CONSENT, GOOGLE_FORM_ENTRY_VERSION } = process.env;

  if (!GOOGLE_FORM_ACTION_URL || !GOOGLE_FORM_ENTRY_EMAIL || !GOOGLE_FORM_ENTRY_CONSENT) {
    console.error("Google Form environment variables are not configured");
    return res.status(500).json({ error: "Consent storage is not configured" });
  }

  const body = new URLSearchParams();
  body.set(GOOGLE_FORM_ENTRY_EMAIL, email);
  body.set(GOOGLE_FORM_ENTRY_CONSENT, "Yes - follow-up & product research");
  if (GOOGLE_FORM_ENTRY_VERSION) body.set(GOOGLE_FORM_ENTRY_VERSION, noticeVersion || "unknown");

  try {
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to record consent", err);
    return res.status(502).json({ error: "Could not record consent" });
  }
}
