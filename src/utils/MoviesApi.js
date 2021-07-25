class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`${res.status}`);
  };

  getMovies() {
    return fetch(`${this._baseUrl}`).then((res) => this._checkResponse(res));
  }
}

const
  moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });
export default moviesApi;
