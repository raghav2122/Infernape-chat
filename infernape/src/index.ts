import { drizzle } from 'drizzle-orm/d1';
import { User } from '../schema';
export interface Env {
	INFERNAPE_DB: D1Database;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const db = drizzle(env.INFERNAPE_DB);
		const { pathname } = new URL(request.url);

		if (pathname === '/api/signup') {
			const result = await db.select().from(User).all();
			return Response.json(result);
		}
		return Response.error();
	},
} satisfies ExportedHandler<Env>;
