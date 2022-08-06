# Tyerra Challenge

Se trata de una aplicación con funcionalidad similar a aquellas de videos cortos, con un carrusel vertical, habilitando la navegación entre los mismos con un simple desliz vertical.

## Instrucciones

1. Clonar el repositorio:

    ```bash
    gh repo clone POWRFULCOW89/tyerra-challenge
    ```

2. Instalar las dependencias:

    ```bash
    cd tyerra-challenge && npm i
    ```

3. Iniciar el servidor de desarrollo:

    ```bash
    npm run dev
    ```

### Descripción técnica

Se trata de una aplicación en Next.js, con un enfoque a la experiencia móvil. El contenido falso consta de 5 vídeos distintos verticales locales, ligados a 5 posts diferentes, simulando una lógica de API. Usando los mecanismos de CSS `scroll-snap` podemos evitar el uso de librerías externas.

Un post cuenta con el siguiente esquema:

```ts

type User = {
    name: string,
    avatar_url?: string,
    tag: string
}

type Post = {
    id: number,
    author: User
    title: string,
    description:
      string,
    video_url: string,
    likes: number,
    comments: number,
    shares: number,
    audio: {
      author: User
      title: string,
      url: string,
    },
    action?: {
      label: string,
      url: string,
    },
  }
```

#### Líneas de mejora

Para terminar la implementación de la aplicación, es necesario:

- Traer posts desde una API (a través de `getInitialProps` o `getServerSideProps`).
- Habilitar el formulario de registro/inicio de sesión.
- Terminar de pulir estilos.
- Habilitar el ciclado infinito.
