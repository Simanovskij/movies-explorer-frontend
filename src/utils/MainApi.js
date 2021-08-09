class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`${res.status}`);
  };

  async register(data) {
    const response = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
        name: data.name,
      }),
    });
    return this._checkResponse(response);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.kinchiki.nomoredomains.club',
  headers: { 'Content-Type': 'application/json' },
});

export default mainApi;
