const API_URL = 'http://localhost:5000/flashcards';

const getFlashcards = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const addFlashcard = async (flashcard) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flashcard),
  });
  return response.json();
};

// Implement update and delete functions here

export default {
  getFlashcards,
  addFlashcard,
  // Update and delete exports
};
