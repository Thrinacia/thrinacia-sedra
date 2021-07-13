// API connection settings
app.constant('API_URL', {
  url: 'http://localhost:3000',
  loc: '/service/restv1/'
});
// Localization settings
app.constant('LANG', {
  PREFERRED_LANG: 'en',
  DEFAULT_LANG: 'en'
});
// CDN settings
app.constant('CDN', {
  APP_URL: 'https://cdn5.thrinacia.com/**'
});
// Okta settings
app.constant('OKTA_CONFIG', {
  "language": "en",
  "i18n": {
    "en": {
      "primaryauth.username.placeholder": "Email"
    }
  }
});