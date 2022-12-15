document.addEventListener("DOMContentLoaded", cargarPeliculas);

//https://api.themoviedb.org/3/trending/movie/week?api_key=79f0e639de5e3a1e7b6bb5f9122307c0

//const modal = new bootstrap.Modal("#modal", {});

async function cargarPeliculas() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=es-ES`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    pintarPeliculas(resultado.results);
  } catch (error) {
    console.log(error);
  }
}

const pintarPeliculas = (pelicula) => {
  pelicula.forEach((pel) => {
    const contenedor = document.querySelector(".container2");
    const { title, backdrop_path } = pel;
    const urlImagen = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
    //console.log(title);
    const peliculaTitulo = document.createElement("h4");
    peliculaTitulo.innerHTML = `<uli>${title}</uli>`;
    contenedor.appendChild(peliculaTitulo);

    const personajeImagen = document.createElement("img");
    personajeImagen.src = urlImagen;
    contenedor.appendChild(personajeImagen);
  });
};

async function verPelicula(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=es-ES`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    mostrarPelicula(resultado);
  } catch (error) {
    console.log(error);
  }
}
