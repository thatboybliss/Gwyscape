
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
