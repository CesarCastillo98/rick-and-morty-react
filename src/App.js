// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import Modal from './Modal'; // Importamos el modal con el nuevo nombre

const App = () => {
  const [characters, setCharacters] = useState([]); // Para almacenar los personajes
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Para el personaje seleccionado
  const [modalOpen, setModalOpen] = useState(false); // Para controlar la apertura del modal

  // Obtener los personajes de la API de Rick and Morty
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then((response) => {
        setCharacters(response.data.results.slice(0, 20)); // Guardamos los primeros 20 personajes
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  // Función para manejar el click en un personaje
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character); // Establece el personaje seleccionado
    setModalOpen(true); // Abre el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false); // Cierra el modal
    setSelectedCharacter(null); // Desselecciona el personaje
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <Card>
              <CardActionArea onClick={() => handleCharacterClick(character)}>
                <CardMedia component="img" alt={character.name} height="300" image={character.image} />
                <CardContent>
                  <Typography variant="h6" component="div" align="center">
                    {character.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Renderizamos el modal solo si hay un personaje seleccionado */}
      {modalOpen && selectedCharacter && (
        <Modal character={selectedCharacter} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default App;
