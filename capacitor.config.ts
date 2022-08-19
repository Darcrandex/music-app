import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.darcrand.mobile',
  appName: 'waves',
  webDir: 'dist',
  bundledWebRuntime: false,

  server: { hostname: 'my-app.com' },
}

export default config
