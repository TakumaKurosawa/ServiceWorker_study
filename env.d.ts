/// <reference types="vite/client" />
declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
  }
}
