class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  };

  async register(data) {
    const response = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        password: data.password,
        email: data.email,
        name: data.name,
      }),
    });
    return this._checkResponse(response);
  }

  async login(data) {
    const response = await fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    });
    return this._checkResponse(response);
  }

  async signOut() {
    const response = await fetch(`${this._baseUrl}/signout`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async checkToken() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async getSavedMovies() {
    const savedMovies = await fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(savedMovies);
  }

  async saveMovie(movie) {
    const savedMovie = await fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.movieId,
      }),
    });
    return this._checkResponse(savedMovie);
  }

  async deleteMovie(id) {
    const response = await fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async updateUser(newUser) {
    const updatedUser = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
      }),
    });
    return this._checkResponse(updatedUser);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.kinchiki.nomoredomains.club',
  headers: { 'Content-Type': 'application/json' },
});

export default mainApi;
