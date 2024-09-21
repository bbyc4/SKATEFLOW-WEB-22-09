import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #010606;
`;

export const MapWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-bottom: 16px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  &:hover {
    color: #01bf71;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export const Map = styled.div`
  width: 300%;
  height: 500px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  display: flex; /* Adicionado para centralizar */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;


export const BackButton = styled(Link)`
  background: #01bf71;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #01bf71;
    color: #010606;
  }
`;
