import { setupAudioKeyboardShortcuts } from "./audioShortcuts";
import { addCambridgeDictionaryLinks } from "./cambridgeLinks";

// Content scripts
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/

// Initial setup
if (window.location.href.includes("etutor.pl/repetitions")) {
  // Initialize all features
  addCambridgeDictionaryLinks();
  setupAudioKeyboardShortcuts();

  // Set up mutation observer to handle dynamic content changes
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        addCambridgeDictionaryLinks();
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
