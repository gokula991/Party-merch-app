-- Seeding initial product categories for political merchandise

INSERT INTO categories (name, slug, description) VALUES
('Shirts', 'shirts', 'T-shirts, polo shirts, and other apparel with party branding and slogans'),
('Caps', 'caps', 'Baseball caps, beanies, and hats featuring party logos and designs'),
('Pants', 'pants', 'Casual wear including jeans, shorts, and pants with party identity'),
('Badges', 'badges', 'Pins, buttons, and badges with party logos, symbols, and campaign slogans'),
('Pens', 'pens', 'Branded writing instruments and office supplies for supporters')
ON CONFLICT (slug) DO NOTHING;
