# Database Design - SirenFlow

## Tech Stack
- **Database**: PostgreSQL (production-ready, supports complex queries)
- **ORM**: Drizzle ORM (lightweight, type-safe, better performance than Prisma)
- **Migration**: Drizzle Kit

## Schema Design

### Users Table
```typescript
users {
  id: uuid (primary key)
  wallet_address: string (unique, indexed)
  username: string (nullable)
  email: string (nullable)
  role: enum ['model', 'project_owner', 'voter']
  created_at: timestamp
  updated_at: timestamp
}
```

### Models Table
```typescript
models {
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  name: string
  bio: text
  avatar_url: string
  specialties: string[] (array)
  vote_count: integer (default 0)
  verified: boolean (default false)
  social_links: jsonb
  created_at: timestamp
  updated_at: timestamp
}
```

### Projects Table
```typescript
projects {
  id: uuid (primary key)
  owner_id: uuid (foreign key -> users.id)
  title: string
  description: text
  budget: decimal
  status: enum ['open', 'in_progress', 'completed', 'cancelled']
  requirements: text
  deadline: timestamp (nullable)
  created_at: timestamp
  updated_at: timestamp
}
```

### Applications Table
```typescript
applications {
  id: uuid (primary key)
  project_id: uuid (foreign key -> projects.id)
  model_id: uuid (foreign key -> models.id)
  status: enum ['pending', 'accepted', 'rejected']
  message: text
  created_at: timestamp
  updated_at: timestamp
}
```

### Votes Table
```typescript
votes {
  id: uuid (primary key)
  voter_id: uuid (foreign key -> users.id)
  model_id: uuid (foreign key -> models.id)
  created_at: timestamp
  
  unique(voter_id, model_id) // one vote per user per model
}
```

### Activities Table
```typescript
activities {
  id: uuid (primary key)
  type: enum ['vote', 'application', 'project_created', 'model_verified']
  user_id: uuid (foreign key -> users.id)
  metadata: jsonb
  created_at: timestamp
}
```

## Indexes
- users.wallet_address (unique)
- models.user_id
- models.vote_count (for ranking)
- projects.owner_id
- projects.status
- applications.project_id
- applications.model_id
- votes.voter_id
- votes.model_id
- activities.user_id
- activities.created_at

## Next Steps
1. Install dependencies: `drizzle-orm`, `drizzle-kit`, `postgres`
2. Create schema files in `db/schema/`
3. Set up database connection
4. Create migration scripts
5. Implement API routes with proper validation
