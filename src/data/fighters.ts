import { Fighter } from '../types';

export const fighters: Fighter[] = [
  {
    id: "grefg",
    name: "The Grefg",
    alias: "El Jefe",
    country: "España",
    age: 28,
    height: 180,
    weight: 75,
    record: "2-0",
    style: "Agresivo",
    bio: "Streamer español y uno de los creadores de contenido más influyentes en la comunidad hispana. Conocido por su energía y competitividad.",
    quote: "Voy a dejar todo en el ring, como siempre hago en la vida.",
    imageUrl: "/images/luchadores/thegrefg.jpg"
  },
  {
    id: "westcol",
    name: "Westcol",
    alias: "El Fenómeno",
    country: "Colombia",
    age: 27,
    height: 178,
    weight: 74,
    record: "1-0",
    style: "Técnico",
    bio: "Streamer colombiano con una gran base de seguidores. Su carisma y personalidad lo han llevado a convertirse en uno de los creadores más populares de Latinoamérica.",
    quote: "No vengo a participar, vengo a ganar.",
    imageUrl: "/images/luchadores/wescol.jpg"
  },
  {
    id: "pereira",
    name: "Pereira",
    country: "Argentina",
    age: 25,
    height: 176,
    weight: 72,
    record: "0-0",
    style: "Contragolpeador",
    bio: "Streamer argentino conocido por su humor ácido y su capacidad para generar contenido viral.",
    imageUrl: "/images/luchadores/pereira.avif"
  },
  {
    id: "rivaldios",
    name: "Rivaldios",
    country: "México",
    age: 26,
    height: 174,
    weight: 70,
    record: "0-0",
    style: "Defensivo",
    bio: "Creador de contenido mexicano especializado en videojuegos que ha ganado popularidad por sus comentarios incisivos.",
    imageUrl: "/images/luchadores/rivaldios.webp"
  },
  {
    id: "perxitaa",
    name: "Perxitaa",
    country: "España",
    age: 30,
    height: 183,
    weight: 78,
    record: "1-0",
    style: "Equilibrado",
    bio: "Uno de los streamers veteranos de la escena española, con años de experiencia en creación de contenido.",
    imageUrl: "/images/luchadores/maxresdefault.webp"
  },
  {
    id: "gaspi",
    name: "Gaspi",
    country: "Argentina",
    age: 24,
    height: 175,
    weight: 71,
    record: "0-0",
    style: "Agresivo",
    bio: "Joven talento argentino que se ha hecho un nombre gracias a su carisma y su estilo desenfadado.",
    imageUrl: "/images/luchadores/maxresdefault (1).webp"
  },
  {
    id: "abby",
    name: "Abby",
    country: "México",
    age: 25,
    height: 167,
    weight: 60,
    record: "0-0",
    style: "Técnica",
    bio: "Creadora de contenido española con una enorme comunidad que la sigue por su autenticidad y cercanía.",
    imageUrl: "/images/luchadores/abby.webp"
  },
  {
    id: "roro",
    name: "Roro",
    country: "España",
    age: 26,
    height: 167,
    weight: 59,
    record: "0-1",
    style: "Contraatacante",
    bio: "Streamer mexicana conocida por su personalidad arrolladora y su contenido diverso.",
    imageUrl: "/images/luchadores/roro.webp"
  },
  {
    id: "andoni",
    name: "Andoni",
    country: "España",
    age: 28,
    height: 182,
    weight: 76,
    record: "0-0",
    style: "Calculador",
    bio: "Creador de contenido vasco que ha ganado popularidad por su contenido original y su personalidad única.",
    imageUrl: "/images/luchadores/andoni.avif"
  },
  {
    id: "carlosbelcast",
    name: "Carlos Belcast",
    country: "Colombia",
    age: 27,
    height: 179,
    weight: 74,
    record: "0-0",
    style: "Explosivo",
    bio: "Streamer colombiano en ascenso conocido por su energía y su conexión con el público joven.",
    imageUrl: "/images/luchadores/carlos.jpg"
  },
  {
    id: "arigeli",
    name: "Ari Geli",
    country: "España",
    age: 24,
    height: 170,
    weight: 61,
    record: "0-0",
    style: "Ágil",
    bio: "Creadora de contenido española que ha construido una comunidad sólida gracias a su versatilidad y carisma.",
    imageUrl: "/images/luchadores/ari.avif"
  },
  {
    id: "alana",
    name: "Alana",
    country: "Argentina",
    age: 25,
    height: 169,
    weight: 62,
    record: "0-0",
    style: "Ofensiva",
    bio: "Streamer argentina que ha revolucionado la escena con su contenido fresco y su personalidad magnética.",
    imageUrl: "/images/luchadores/alana.webp"
  },
  {
    id: "viruzz",
    name: "Viruzz",
    country: "España",
    age: 29,
    height: 184,
    weight: 80,
    record: "1-1",
    style: "Potente",
    bio: "Veterano creador de contenido español con experiencia en boxeo y una personalidad imponente.",
    imageUrl: "/images/luchadores/viruz.jpeg"
  },
  {
    id: "tomasmazza",
    name: "Tomás Mazza",
    country: "Argentina",
    age: 26,
    height: 180,
    weight: 76,
    record: "0-0",
    style: "Versátil",
    bio: "Streamer argentino que ha ganado popularidad por su contenido variado y su capacidad para conectar con diferentes audiencias.",
    imageUrl: "/images/luchadores/tomas.webp"
  }
];

export const getFighterById = (id: string): Fighter | undefined => {
  return fighters.find(fighter => fighter.id === id);
};