import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'sms_app_ut',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
