/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_AG_GRID_KEY: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
