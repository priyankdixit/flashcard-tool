import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardDescription } from 'semantic-ui-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Flashcard = ({ flashcard, onPrevious, onNext }) => {
  const [flipped, setFlipped] = useState(false);
  const handleNext = () => {
    setFlipped(false); // Reset flipped to false
    onNext();
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      width:'100%',
      gap: '20px',
      backgroundColor: '#f4f4f4' 
    }}>
      <FaArrowLeft 
        onClick={onPrevious} 
        size={40} 
        style={{ cursor: 'pointer' }} 
      />
      
      <Card 
        onClick={() => setFlipped(!flipped)} 
        style={{ 
          cursor: 'pointer', 
          width: '50%', 
          height: '50vh', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          backgroundColor: 'black',  
          color:'white',
          borderRadius: '10px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
         
        }}
      >
        <CardContent style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <CardHeader style={{ fontSize: '2rem', marginBottom: '1rem', textAlign:'center',marginTop:'1rem' }}>
            {flipped ? "Answer" : "Question"}
          </CardHeader>
          <CardDescription style={{ fontSize: '1.5rem', alignSelf:'center', marginTop:'6rem' }}>
            {flipped ? flashcard.answer : flashcard.question}
          </CardDescription>
        </CardContent>
      </Card>

      <FaArrowRight 
        onClick={handleNext} 
        size={40} 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
};

export default Flashcard;
