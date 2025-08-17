-- Seeding sample products for the political party store

-- Get category IDs for reference
WITH category_ids AS (
  SELECT 
    (SELECT id FROM categories WHERE slug = 'shirts') as shirts_id,
    (SELECT id FROM categories WHERE slug = 'caps') as caps_id,
    (SELECT id FROM categories WHERE slug = 'pants') as pants_id,
    (SELECT id FROM categories WHERE slug = 'badges') as badges_id,
    (SELECT id FROM categories WHERE slug = 'pens') as pens_id
)

INSERT INTO products (name, slug, description, price, category_id, image_url, sizes, colors, stock_quantity, is_featured) 
SELECT * FROM (
  VALUES
  -- Shirts
  ('Official Party T-Shirt', 'official-party-tshirt', 'Premium cotton t-shirt featuring our party logo and inspiring slogan. Comfortable fit for rallies and everyday wear.', 24.99, (SELECT shirts_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['White', 'Green', 'Black'], 150, true),
  
  ('Campaign Slogan Polo', 'campaign-slogan-polo', 'Professional polo shirt with embroidered party slogan. Perfect for campaign events and formal gatherings.', 39.99, (SELECT shirts_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Navy', 'White', 'Green'], 100, true),
  
  ('Unity Long Sleeve', 'unity-long-sleeve', 'Long sleeve shirt promoting unity and progress. Made from sustainable materials.', 29.99, (SELECT shirts_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['S', 'M', 'L', 'XL'], ARRAY['Green', 'Gray', 'White'], 80, false),
  
  -- Caps
  ('Classic Party Cap', 'classic-party-cap', 'Adjustable baseball cap with embroidered party logo. One size fits most.', 19.99, (SELECT caps_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Green', 'Navy', 'Black', 'White'], 200, true),
  
  ('Campaign Beanie', 'campaign-beanie', 'Warm knit beanie perfect for outdoor rallies and cold weather campaigning.', 16.99, (SELECT caps_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Green', 'Black', 'Gray'], 120, false),
  
  -- Pants
  ('Supporter Jeans', 'supporter-jeans', 'Comfortable denim jeans with subtle party branding. Perfect for casual campaign events.', 49.99, (SELECT pants_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['28', '30', '32', '34', '36', '38', '40'], ARRAY['Blue', 'Black'], 60, false),
  
  ('Rally Shorts', 'rally-shorts', 'Comfortable athletic shorts for summer rallies and outdoor events.', 24.99, (SELECT pants_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['S', 'M', 'L', 'XL'], ARRAY['Green', 'Navy', 'Black'], 90, false),
  
  -- Badges
  ('Official Party Pin', 'official-party-pin', 'High-quality enamel pin featuring the party logo. Perfect for jackets, bags, and hats.', 8.99, (SELECT badges_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Gold', 'Silver'], 300, true),
  
  ('Campaign Button Set', 'campaign-button-set', 'Set of 5 campaign buttons with various slogans and designs.', 12.99, (SELECT badges_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Mixed'], 150, false),
  
  ('Victory Badge', 'victory-badge', 'Limited edition badge celebrating our movement. Collectible item for dedicated supporters.', 15.99, (SELECT badges_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Gold'], 75, true),
  
  -- Pens
  ('Campaign Pen', 'campaign-pen', 'Professional ballpoint pen with party logo and slogan. Great for signing petitions and taking notes.', 4.99, (SELECT pens_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Green', 'Blue', 'Black'], 500, false),
  
  ('Supporter Pen Set', 'supporter-pen-set', 'Set of 3 premium pens in party colors. Perfect gift for volunteers and supporters.', 14.99, (SELECT pens_id FROM category_ids), '/placeholder.svg?height=400&width=400', ARRAY['One Size'], ARRAY['Mixed'], 200, false)
) AS v(name, slug, description, price, category_id, image_url, sizes, colors, stock_quantity, is_featured)
ON CONFLICT (slug) DO NOTHING;
