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

  async getMovies() {
    const response = await fetch(`${this._baseUrl}`);
    return this._checkResponse(response);
  }
}

const
  moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movie',
  });
export default moviesApi;
