import { Fight } from '../types';

export const fights: Fight[] = [
  {
    id: "main-event",
    fighter1Id: "grefg",
    fighter2Id: "westcol",
    isMainEvent: true,
    description: "El combate más esperado de la noche. Dos titanes de las redes sociales se enfrentan en un duelo épico que promete ser histórico.",
    order: 1
  },
  {
    id: "pereira-rivaldios",
    fighter1Id: "pereira",
    fighter2Id: "rivaldios",
    isMainEvent: false,
    description: "Argentina contra México en un enfrentamiento internacional que promete sacar chispas.",
    order: 2
  },
  {
    id: "perxitaa-gaspi",
    fighter1Id: "perxitaa",
    fighter2Id: "gaspi",
    isMainEvent: false,
    description: "Experiencia contra juventud. Un combate que enfrenta a dos generaciones de creadores de contenido.",
    order: 3
  },
  {
    id: "abby-roro",
    fighter1Id: "abby",
    fighter2Id: "roro",
    isMainEvent: false,
    description: "Duelo femenino entre España y México. Técnica contra contraataque en un combate que promete emociones.",
    order: 4
  },
  {
    id: "andoni-carlosbelcast",
    fighter1Id: "andoni",
    fighter2Id: "carlosbelcast",
    isMainEvent: false,
    description: "España vs Colombia. Dos estilos diferentes se miden en un combate impredecible.",
    order: 5
  },
  {
    id: "arigeli-alana",
    fighter1Id: "arigeli",
    fighter2Id: "alana",
    isMainEvent: false,
    description: "Dos creadoras con gran proyección se enfrentan en un combate que puede catapultar la carrera de la vencedora.",
    order: 6
  },
  {
    id: "viruzz-tomasmazza",
    fighter1Id: "viruzz",
    fighter2Id: "tomasmazza",
    isMainEvent: false,
    description: "Experiencia contra talento emergente. Un duelo entre España y Argentina que promete ser explosivo.",
    order: 7
  }
];

export const getFightById = (id: string): Fight | undefined => {
  return fights.find(fight => fight.id === id);
};