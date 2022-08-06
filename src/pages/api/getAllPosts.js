const posts = [
  {
    id: 1,
    author: {
      name: "Diego Melo",
      avatar_url: null,
      tag: "@diegomelo",
    },
    title: "Hermosa casa suburbana",
    description:
      "Se vende casa suburbana en el centro de la ciudad de México. Se entrega amueblada, con excelentes condiciones.\n\nInformes al 01 800 999 999",
    video_url: "/videos/v1.mp4",
    likes: Math.random() * 10_000_000,
    comments: Math.random() * 10_000,
    shares: Math.random() * 1_000,
    audio: {
      author: {
        name: "Diego Melo",
        avatar_url: null,
        tag: "@diegomelo",
      },
      title: "Hermosa casa suburbana",
      url: "",
    },
    action: null,
  },
  {
    id: 2,
    author: {
      name: "Emilio Sánchez",
      avatar_url: null,
      tag: "@e.sanchez",
    },
    title: "Apartamento nuevo en descuento",
    description:
      "Se trata de una hermosa ubicación en las afueras del Periférico, con unas hermosas vistas de la mancha urbana.\n\nInformes al 01 800 999 999",
    video_url: "/videos/v2.mp4",
    likes: Math.random() * 10_000_000,
    comments: Math.random() * 10_000,
    shares: Math.random() * 1_000,
    audio: {
      author: {
        name: "Emilio Sánchez",
        avatar_url: null,
        tag: "@e.sanchez",
      },
      title: "Apartamento nuevo en descuento",
      url: "",
    },
    action: {
      label: "Learn more",
      url: "https://www.tyerra.com/",
    },
  },
  {
    id: 3,
    author: {
      name: "Benjamín Flores",
      avatar_url: null,
      tag: "@benja.la.alegria",
    },
    title: "Se vende o renta casa",
    description:
      "Vendo, rento o traspaso mi lujosa propiedad cerca del Walmart. Solo propuestas serias al correo electrónico: ben_flow@test.com",
    video_url: "/videos/v3.mp4",
    likes: Math.random() * 10_000_000,
    comments: Math.random() * 10_000,
    shares: Math.random() * 1_000,
    audio: {
      author: {
        name: "Benjamín Flores",
        avatar_url: null,
        tag: "@benja.la.alegria",
      },
      title: "Se vende o renta casa",
      url: "",
    },
    action: {
      label: "Learn more",
      url: "https://www.tyerra.com/",
    },
  },
  {
    id: 4,
    author: {
      name: "Juan Díaz",
      avatar_url: null,
      tag: "@jdi.idiaz",
    },
    title: "Venta de mansión en el campo",
    description:
      "He conseguido una propiedad mucho mejor a esta, por lo que ya no requiero de ésta. Se vende mansión con amplios terrenos para cultivar todo tipo de especímenes. 10 cuartos y 5 baños completos.   \n\nInformes al 01 800 999 999",
    video_url: "/videos/v4.mp4",
    likes: Math.random() * 10_000_000,
    comments: Math.random() * 10_000,
    shares: Math.random() * 1_000,
    audio: {
      author: {
        name: "Juan Díaz",
        avatar_url: null,
        tag: "@jdi.idiaz",
      },
      title: "Venta de mansión en el campo",
      url: "",
    },
    action: null,
  },
  {
    id: 5,
    author: {
      name: "Andrés Mendoza",
      avatar_url: null,
      tag: "@a.men",
    },
    title: "Venta de propiedad | URGENTE",
    description:
      "Se vende propiedad en el centro de la ciudad de México. Se entrega amueblada, con excelentes condiciones.",
    video_url: "/videos/v5.mp4",
    likes: Math.random() * 10_000_000,
    comments: Math.random() * 10_000,
    shares: Math.random() * 1_000,
    audio: {
      author: {
        name: "Andrés Mendoza",
        avatar_url: null,
        tag: "@a.men",
      },
      title: "Venta de propiedad | URGENTE",
      url: "",
    },
    action: null,
  },
];

export default function handler(req, res) {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
