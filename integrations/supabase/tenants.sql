-- tenants registry
CREATE TABLE IF NOT EXISTS tenants (
  id TEXT PRIMARY KEY,
  rut TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE
);
