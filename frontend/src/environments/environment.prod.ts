export const environment = {
  production: true,
  serverUrl: '/api',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};
