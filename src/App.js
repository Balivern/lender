import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/lenderHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Map from "./components/Map/map.js";
//import Header from './components/Header/Header.js';
import ListeBulles from './components/ListeBulles/ListeBulles.js';
import { Row } from "react-bootstrap";

const bulles = [
  { titre: 'Services', contenu: 'Contenu de la bulle 1' },
  { titre: 'Véhicules', contenu: 'Contenu de la bulle 2' },
  { titre: 'Outils', contenu: 'Contenu de la bulle 3' },
  { titre: 'Loisirs', contenu: 'Contenu de la bulle 4' },
];

function App() {
  return (
    <Container>
      <Header/>
      <Row>
        <div className="ListeBulles">
          <ListeBulles bulles={bulles}/>
        </div>
      </Row>
      <div id="content">
        <Map/>
      </div>
    </Container>
  );
}

export default App;
