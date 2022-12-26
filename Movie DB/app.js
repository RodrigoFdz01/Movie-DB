document.addEventListener("DOMContentLoaded", cargarPeliculasPopulares);

const contenedor = document.querySelector(".container2");

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
  const contenedor = document.querySelector(".container2");
  pelicula.forEach((pel) => {
    const { title, backdrop_path } = pel;
    const urlImagen = `https://image.tmdb.org/t/p/w300/${backdrop_path}`;
    //console.log(title);
    const movieImagen = document.createElement("img");
    movieImagen.src = urlImagen;

    const peliculaTitulo = document.createElement("h6");
    peliculaTitulo.classList.add("text-center");
    peliculaTitulo.innerHTML = `<uli>${title}</uli>`;
    const peliculaCardBody = document.createElement("div");
    peliculaCardBody.appendChild(movieImagen);
    peliculaCardBody.appendChild(peliculaTitulo);
    contenedor.appendChild(peliculaCardBody);
  });
};

/* ########## Busquedas  ##########  */

const boton = document.querySelector("#boton");
const pelicula = document.querySelector("#pelicula").value;

boton.addEventListener("click", function () {
  //peliculaIngresada();
  buscarPelicula();
  //console.log("Prueba");
});

function buscarPelicula() {
  const pelicula = document.querySelector("#pelicula").value;
  pelicula.length != 0 ? consultarApi(pelicula) : alert("Ingresa una pelicula");
  document.addEventListener("DOMContentLoaded", init(), false);
}

async function consultarApi(pelicula) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=en-En&query=${pelicula}&page=1&include_adult=false`;
  try {
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    console.log(resultado.results[0].title);
    peliculaIngresada(resultado.results[0]);
    //console.log(respuesta);
  } catch (error) {
    console.log(error);
    //alert("Ingresa una pelicula");
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

  const releaseDate = document.createElement("h3");
  releaseDate.innerHTML = `<uli>Fecha de lanzamiento: ${release_date}</uli>`;
  contenedor.appendChild(releaseDate);
};
