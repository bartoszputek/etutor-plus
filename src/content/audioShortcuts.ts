import { audioKeyBindings, type AudioKeyBindings } from "../storage";

interface PlayableAudio {
  index: number;
  element: HTMLElement;
}

// Function to find playable audio elements in sentences
export function findPlayableAudioElements(): PlayableAudio[] {
  const answerDiv = document.getElementById("answer");
  if (!answerDiv) return [];

  const sentences = answerDiv.querySelectorAll(".sentence");
  const playableAudios: PlayableAudio[] = [];

  sentences.forEach((sentence, index) => {
    const audioElement = sentence.querySelector(".recordingsAndTranscriptions .audioIcon.soundOnClick");
    if (audioElement) {
      playableAudios.push({
        index,
        element: audioElement as HTMLElement,
      });
    }
  });

  return playableAudios;
}

// Function to handle keyboard shortcuts for audio playback
export function setupAudioKeyboardShortcuts() {
  let currentBindings: AudioKeyBindings[] = [];

  // Subscribe to store changes
  const unsubscribe = audioKeyBindings.subscribe((bindings) => {
    currentBindings = bindings;
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    let targetIndex: number | undefined;

    if (key === currentBindings[0].key) targetIndex = 3;
    else if (key === currentBindings[1].key) targetIndex = 4;
    else if (key === currentBindings[2].key) targetIndex = 5;

    if (targetIndex !== undefined) {
      const playableAudios = findPlayableAudioElements();
      const targetAudio = playableAudios.find((audio) => audio.index === targetIndex);

      if (targetAudio) {
        event.preventDefault();
        targetAudio.element.click();
      }
    }
  });

  // Cleanup subscription when the function is called again
  return () => unsubscribe();
}
