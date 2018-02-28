
const authService = {
  token: null,

  isLoggedIn() {
    return this.token === localStorage.getItem('token');
  },

  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  },

  removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }
};

// lil hacky..
authService.setToken(authService.getToken());


export default authService;
