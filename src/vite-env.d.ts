/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PROJECT_TITLE: string
  readonly VITE_APP_API_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
