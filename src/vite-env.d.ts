/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME_SHORT: string
  readonly VITE_APP_NAME_LONG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
