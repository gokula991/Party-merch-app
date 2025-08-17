export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description?: string
  price: number
  category_id: number
  image_url?: string
  gallery_images?: string[]
  sizes?: string[]
  colors?: string[]
  stock_quantity: number
  is_featured: boolean
  is_campaign_special: boolean
  campaign_special_price?: number
  campaign_special_end_date?: string
  status: "active" | "inactive" | "out_of_stock"
  created_at: string
  updated_at: string
  category?: Category
}

export interface CartItem {
  id: number
  session_id: string
  user_id?: number
  product_id: number
  quantity: number
  selected_size?: string
  selected_color?: string
  created_at: string
  updated_at: string
  product?: Product
}

export interface ShippingAddress {
  name: string
  address_line_1: string
  address_line_2?: string
  city: string
  state: string
  postal_code: string
  country: string
  phone?: string
}

export interface Order {
  id: number
  order_number: string
  customer_email: string
  customer_name: string
  customer_phone?: string
  shipping_address: ShippingAddress
  billing_address?: ShippingAddress
  subtotal: number
  tax_amount: number
  shipping_amount: number
  total_amount: number
  payment_status: "pending" | "paid" | "failed" | "refunded"
  payment_method?: string
  payment_transaction_id?: string
  order_status: "processing" | "shipped" | "delivered" | "cancelled"
  tracking_number?: string
  notes?: string
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export interface OrderItem {
  id: number
  order_id: number
  product_id: number
  product_name: string
  product_price: number
  quantity: number
  selected_size?: string
  selected_color?: string
  created_at: string
}

export interface NewsletterSubscriber {
  id: number
  email: string
  name?: string
  subscribed_at: string
  is_active: boolean
}

export interface Donation {
  id: number
  donor_name?: string
  donor_email: string
  amount: number
  payment_method?: string
  payment_transaction_id?: string
  message?: string
  is_anonymous: boolean
  created_at: string
}
