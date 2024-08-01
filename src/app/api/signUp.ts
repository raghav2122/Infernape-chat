import { drizzle } from 'drizzle-orm/d1';
import { User } from '../../../infernape/schema';

export interface Env {
  INFERNAPE_DB: D1Database;
}

export interface SignUpRequestBody {
  id: string;
  email: string;
  username: string;
  password: string;
  name: string;
  favoritePokemonGeneration: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const db = drizzle(env.INFERNAPE_DB);
    const { pathname } = new URL(request.url);

    if (request.method === 'POST' && pathname === '/api/signup') {
      try {
        const body = (await request.json()) as SignUpRequestBody;
        const {
          id,
          email,
          username,
          password,
          name,
          favoritePokemonGeneration,
        } = body;

        await db
          .insert(User)
          .values({
            id,
            email,
            username,
            password,
            name,
            favoritePokemonGeneration,
          })
          .run();

        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, error }), {
          headers: { 'Content-Type': 'application/json' },
          status: 500,
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
