import { ResultValue } from '@/utils/ResultPattern/Result';
declare const appRoutes: any[];
declare const getAppRoutes: (protocol: string, host: string) => ResultValue<{
    url: string;
    routes: string[];
}>;
export { getAppRoutes, appRoutes };
