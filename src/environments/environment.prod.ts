import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Expotrium',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44326/',
    redirectUri: baseUrl,
    clientId: 'Expotrium_App',
    responseType: 'code',
    scope: 'offline_access Expotrium',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44326',
      rootNamespace: 'Expotrium',
    },
  },
} as Environment;
