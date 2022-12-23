//document.addEventListener("DOMContentLoaded", cargarPeliculas);
const boton = document.getElementById("#boton");
const pelicula = document.querySelector("pelicula").value;

boton.addEventListener("click", function () {
  buscarPelicula();
  pintarPelicula();
});

function buscarPelicula(e) {
  e.preventDefault();
  consultarApi("pelicula");
}

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
//cargarPeliculas();

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

// async function verPelicula(id) {
//   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=es-ES`;
//   try {
//     const respuesta = await fetch(url);
//     const resultado = await respuesta.json();
//     mostrarPelicula(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// }

const pintarPelicula = (pelicula) => {
  const { backdrop_path, title, release_date } = pelicula;
  //console.log(title);

  const urlImagen = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  result.innerHTML = `
    <div class="movie">
    <img src = "${urlImagen}" class="img-fluid mx-5" alt = "movie poster">
        <h3 class = "movie-title text-center mt-2">${title}</h3>  
        <li class = "released">Fecha de lanzamiento: ${release_date}</li>
    </div> `;
};
