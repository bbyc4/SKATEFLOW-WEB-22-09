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

const EventCard = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
`;

const EventsPage = () => {
  const events = [
    { id: 1, name: 'Campeonato de Skate São Paulo', date: '12/10/2024', location: 'Parque Ibirapuera' },
    { id: 2, name: 'Skate Jam Rio de Janeiro', date: '05/11/2024', location: 'Praia de Copacabana' },
    { id: 3, name: 'Festival de Skate Curitiba', date: '20/11/2024', location: 'Praça do Japão' }
  ];

  return (
    <>
      <Navbar />
      <EventsContainer>
        <h1>Eventos de Skate</h1>
        <div style={{ marginTop: '30px' }}>
          {events.map((event) => (
            <EventCard key={event.id}>
              <h2>{event.name}</h2>
              <p>Data: {event.date}</p>
              <p>Local: {event.location}</p>
            </EventCard>
          ))}
        </div>
      </EventsContainer>
      <Footer />
    </>
  );
};

export default EventsPage;
