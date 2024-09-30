// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ onSubmit, user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        {user ? 'Actualizar Usuario' : 'Crear Usuario'}
      </Button>
    </Box>
  );
};

export default UserForm;
