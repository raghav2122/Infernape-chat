import { sql } from 'drizzle-orm';
import { text, sqliteTable } from 'drizzle-orm/sqlite-core';

export const User = sqliteTable('User', {
	id: text('id'),
	email: text('Email'),
	username: text('UserName'),
	password: text('Password'),
	name: text('Name'),
	favoritePokemonGeneration: text('FavoritePokemonGeneration'),
});
