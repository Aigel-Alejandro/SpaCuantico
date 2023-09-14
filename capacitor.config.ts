import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spacuantico.app',
  appName: 'Spa Cuantico',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
