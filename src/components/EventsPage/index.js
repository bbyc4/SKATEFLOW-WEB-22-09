import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';

// Estilos com styled-components



const EventsContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: black;
  color: white;
  min-height: 100vh;

`;

const EventCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const EventCard = styled.div`
  flex: 1 1 calc(33.333% - 40px); /* 3 cards por linha */
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #001426;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 40px); /* 2 cards por linha em telas menores */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* 1 card por linha em telas muito pequenas */
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;

const EventsPage = () => {
  const events = [
    { id: 1, name: 'Campeonato de Skate São Paulo', date: '12/10/2024', location: 'Parque Ibirapuera' },
    { id: 2, name: 'Skate Jam Rio de Janeiro', date: '05/11/2024', location: 'Praia de Copacabana' },
    { id: 3, name: 'Festival de Skate Curitiba', date: '20/11/2024', location: 'Praça do Japão' },
    { id: 4, name: 'Campeonato de Skate São Paulo', date: '12/10/2024', location: 'Parque Ibirapuera' },
    { id: 5, name: 'Campeonato de Skate São Paulo', date: '12/10/2024', location: 'Parque Ibirapuera' },
    { id: 6, name: 'Campeonato de Skate São Paulo', date: '12/10/2024', location: 'Parque Ibirapuera' },
  ];

  const eventImage = require('../../images/ph.svg').default; // Reutilizando a imagem

  return (
    <>
      <Navbar />
      <EventsContainer>
        <h1>Eventos de Skate</h1>
        <EventCardsContainer>
          {events.map((event) => (
            <EventCard key={event.id}>
              <h2>{event.name}</h2>
              <p>Data: {event.date}</p>
              <p>Local: {event.location}</p>
              <img src={eventImage} alt={event.name} />
            </EventCard>
          ))}
        </EventCardsContainer>
      </EventsContainer>
      <Footer />
    </>
  );
};

export default EventsPage;
