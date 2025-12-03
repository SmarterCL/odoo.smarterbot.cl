export function openDemoPopup() {
  const popup = window.open(
    "https://flow.smarterbot.cl",
    "smarterbotDemo",
    "width=1200,height=800,noopener,noreferrer"
  )
  if (popup) {
    popup.opener = null
    popup.focus()
  }
}
