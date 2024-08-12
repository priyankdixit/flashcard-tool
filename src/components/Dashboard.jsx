import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const Dashboard = ({ onAdd, onEdit, onDelete }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAdd = () => {
    onAdd({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <Input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        style={{ marginRight: '10px' }}
      />
      <Input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        style={{ marginRight: '10px' }}
      />
      <Button onClick={handleAdd}>Add Flashcard</Button>
      {/* Implement Edit and Delete functionality here */}
    </div>
  );
};

export default Dashboard;
