/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv
{
  readonly VITE_GAS_URL?: string; // ton endpoint Apps Script
}

interface ImportMeta
{
  readonly env: ImportMetaEnv;
}
