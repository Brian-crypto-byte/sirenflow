import { pgTable, uuid, varchar, text, integer, boolean, timestamp, decimal, pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['model', 'project_owner', 'voter']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  walletAddress: varchar('wallet_address', { length: 255 }).unique().notNull(),
  username: varchar('username', { length: 100 }),
  email: varchar('email', { length: 255 }),
  role: userRoleEnum('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const models = pgTable('models', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  bio: text('bio'),
  avatarUrl: varchar('avatar_url', { length: 500 }),
  specialties: text('specialties').array(),
  voteCount: integer('vote_count').default(0).notNull(),
  verified: boolean('verified').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
