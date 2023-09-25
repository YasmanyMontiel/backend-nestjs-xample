declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number; //=3000
    DB_HOST: string; //=postgres
    DB_PORT: number; //=5432
    DB_USER: string; //=sqlroot
    DB_PASSWORD: string; //=sqlroot
    DB_NAME: string; //=sqlroot
  }
}
