import { Express } from 'express';
interface ServerOptions {
    port: string | number;
}
declare const configureServer: (app: Express) => void;
declare const startServer: (app: Express, options: ServerOptions) => void;
export { startServer, configureServer };
