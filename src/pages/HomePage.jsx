import React, { useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard';
import { Container } from 'semantic-ui-react';
import flashcardService from '../api/flashcardService';

const HomePage = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const data = await flashcardService.getFlashcards();
      console.log('Fetched flashcards:', data);
      setFlashcards(data);
    };
    fetchFlashcards();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0));
  };

  return (
    <Container style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        
      }}
    >
      {flashcards.length > 0 && (
        <Flashcard 
          flashcard={flashcards[currentIndex]} 
          onPrevious={handlePrevious} 
          onNext={handleNext} 
        />
      )}
    </Container>
  );
};

export default HomePage;
