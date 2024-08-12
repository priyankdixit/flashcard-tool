import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import flashcardService from '../api/flashcardService';
import { Container } from 'semantic-ui-react';

const AdminPage = () => {
  const handleAdd = async (flashcard) => {
    await flashcardService.addFlashcard(flashcard);
  };

  const handleEdit = async (id, updatedFlashcard) => {
    await flashcardService.updateFlashcard(id, updatedFlashcard);
  };

  const handleDelete = async (id) => {
    await flashcardService.deleteFlashcard(id);
  };

  return (
    <Container>
      <Dashboard onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default AdminPage;
