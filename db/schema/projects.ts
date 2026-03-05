import { pgTable, uuid, varchar, text, decimal, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { users } from './users';

export const projectStatusEnum = pgEnum('project_status', ['open', 'in_progress', 'completed', 'cancelled']);
export const applicationStatusEnum = pgEnum('application_status', ['pending', 'accepted', 'rejected']);

export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  ownerId: uuid('owner_id').references(() => users.id).notNull(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description').notNull(),
  budget: decimal('budget', { precision: 10, scale: 2 }).notNull(),
  status: projectStatusEnum('status').default('open').notNull(),
  requirements: text('requirements'),
  deadline: timestamp('deadline'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
