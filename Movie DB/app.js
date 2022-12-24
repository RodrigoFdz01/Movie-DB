document.addEventListener("DOMContentLoaded", cargarPeliculasPopulares);

//https://api.themoviedb.org/3/trending/movie/week?api_key=79f0e639de5e3a1e7b6bb5f9122307c0

async function cargarPeliculasPopulares() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=en-En`;

  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    pintarPeliculasPopulares(resultado.results);
  } catch (error) {
    console.log(error);
  }
}
//cargarPeliculasPopulares();

const pintarPeliculasPopulares = (pelicula) => {
  pelicula.forEach((pel) => {
    const contenedor = document.querySelector(".container2");
    const { title, backdrop_path } = pel;
    const urlImagen = `https://image.tmdb.org/t/p/w300/${backdrop_path}`;
    //console.log(title);
    const peliculaTitulo = document.createElement("h4");
    peliculaTitulo.innerHTML = `<uli>${title}</uli>`;
    contenedor.appendChild(peliculaTitulo);

    const movieImagen = document.createElement("img");
    movieImagen.src = urlImagen;
    contenedor.appendChild(movieImagen);
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

/* ########## Busquedas  ##########  */

const boton = document.querySelector("#boton");
const pelicula = document.querySelector("#pelicula").value;

boton.addEventListener("click", function () {
  //peliculaIngresada();
  buscarPelicula();
  //console.log("Prueba");
});

function buscarPelicula(e) {
  //e.preventDefault();
  const pelicula = document.querySelector("#pelicula").value;
  //console.log(pelicula);
  consultarApi(pelicula);
}

async function consultarApi(pelicula) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=es-ES&query=${pelicula}&page=1&include_adult=false`;
  try {
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    console.log(resultado.results[0].title);
    peliculaIngresada(resultado.results[0]);
    //console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

const peliculaIngresada = (pelicula) => {
  const { backdrop_path, title, release_date } = pelicula;

  const contenedor = document.querySelector(".container2");

  const urlImagen = `https://image.tmdb.org/t/p/w300/${backdrop_path}`;
  const peliculaTitulo = document.createElement("h2");
  peliculaTitulo.innerHTML = `<uli>${title}</uli>`;
  contenedor.appendChild(peliculaTitulo);
  const movieImagen = document.createElement("img");
  movieImagen.src = urlImagen;
  contenedor.appendChild(movieImagen);
  result.innerHTML = `
    <div class="movie">
    <img src = "${urlImagen}" class="img-fluid mx-5" alt = "movie poster">
        <h3 class = "movie-title text-center mt-2">${title}</h3>  
        <li class = "released">Fecha de lanzamiento: ${release_date}</li>
    </div> `;
};
