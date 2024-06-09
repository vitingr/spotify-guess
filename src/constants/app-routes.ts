export const APP_ROUTES = {
  private: {
    match: '/match'
  },
  public: {
    home: '/',
    login: '/login',
    register: '/register',
    signOut: '/api/auth/signOut',
    signIn: '/api/auth/signIn',
    error: '/api/auth/error',
    credentials: '/api/auth/callback/credentials'
  }
}
