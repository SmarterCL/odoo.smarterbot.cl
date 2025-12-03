const DEMO_URL = "https://flow.smarterbot.cl/"

export function openDemoPopup() {
  // On mobile (small screens) prefer same-tab to avoid popup blockers.
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    window.location.href = DEMO_URL
    return
  }

  const popup = window.open(DEMO_URL, "smarterbotDemo", "width=1200,height=800,noopener,noreferrer")
  if (!popup) {
    window.location.href = DEMO_URL
    return
  }
  popup.opener = null
  popup.focus()
}
