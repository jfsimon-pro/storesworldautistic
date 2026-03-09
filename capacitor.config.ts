import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.worldautistic.app',
  appName: 'World Autistic',
  // webDir é ignorado quando server.url está definido (modo live server)
  webDir: 'out',
  server: {
    url: 'https://appworldautistic.com',
    cleartext: false,
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#ffffff',
  },
  android: {
    backgroundColor: '#ffffff',
  },
};

export default config;
