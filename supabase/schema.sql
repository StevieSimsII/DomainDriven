-- Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert new contacts
CREATE POLICY "Allow public contact form submissions" ON contacts
    FOR INSERT 
    WITH CHECK (true);

-- Create an index on created_at for better query performance
CREATE INDEX contacts_created_at_idx ON contacts(created_at);

-- Optional: Create a view for admins to read contacts (you would need to create admin policies)
-- CREATE POLICY "Allow admin read access" ON contacts
--     FOR SELECT
--     USING (auth.role() = 'admin'); 