
const authService = {
  token: null,

  isLoggedIn() {
    return this.token === localStorage.getItem('token');
  },

  getToken() {
    localStorage.getItem('token');
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

export default authService;
