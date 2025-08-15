import { ResultValue } from '@/utils/ResultPattern/Result';
import { Failure } from '@/utils/ResultPattern/Failure';

const appRoutes: any[] = [];

const formatRoutes = (stack: any[], prefix: any = ''): string[] => {
	const routes: string[] = [];
	for (const middleware of stack) {
		if (middleware.route) {
			const method = Object.keys(middleware.route.methods)
				.join(',')
				.toUpperCase();
			routes.push(`${method} ${prefix}${middleware.route.path}`);
		} else if (middleware.name === 'router' && middleware.handle.stack) {
			formatRoutes(
				middleware.handle.stack,
				prefix +
					middleware.regexp.source
						.replace('^\\', '')
						.replace('\\/?(?=\\/|$)', '')
						.replace('\\', '')
						.replace('?$', '')
			);
		}
	}
	return routes;
};

const getAppRoutes = (
	protocol: string,
	host: string
): ResultValue<{ url: string; routes: string[] }> => {
	try {
		return ResultValue.Ok({
			url: `${protocol}://${host}`,
			routes: formatRoutes(appRoutes),
		});
	} catch {
		return Failure.InternalServer(
			'Ocorreu um erro ao buscar as rotas da aplicação.'
		).toResultValue();
	}
};

export { getAppRoutes, appRoutes };
