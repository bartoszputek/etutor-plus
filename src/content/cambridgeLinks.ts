import { mount } from "svelte";
import CambridgeDictionaryLink from "../components/CambridgeDictionaryLink.svelte";

// Function to add Cambridge dictionary links to phrases
export function addCambridgeDictionaryLinks() {
  const answerDiv = document.getElementById("answer");
  if (!answerDiv) return;

  // Find all phrase elements that don't already have a dictionary link
  const phrases = answerDiv.querySelectorAll(".phraseEntityLine:not(:has(.cambridge-dict-link))");

  phrases.forEach((phrase) => {
    // Get the text content without foreignTermHeader content
    const foreignTermHeader = phrase.querySelector(".foreignTermHeader");
    if (foreignTermHeader) {
      foreignTermHeader.remove(); // Temporarily remove the header
    }

    const phraseText = phrase.textContent?.trim() || "";

    if (foreignTermHeader) {
      phrase.appendChild(foreignTermHeader); // Put the header back
    }

    // Create a container for the dictionary link
    const linkContainer = document.createElement("span");
    linkContainer.style.display = "inline-block";

    // Mount the CambridgeDictionaryLink component
    mount(CambridgeDictionaryLink, {
      target: linkContainer,
      props: {
        word: phraseText,
      },
    });

    // Add the link container after the phrase
    phrase.appendChild(linkContainer);
  });
}
