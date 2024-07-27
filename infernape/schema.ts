import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const User = sqliteTable('User', {
	id: text('id'),
	email: text('Email'),
	UserName: text('UserName'),
});
