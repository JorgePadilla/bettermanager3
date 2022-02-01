json.extract! product, :id, :journey_id, :product_type, :name, :launch_days_offset, :event_days_offset, :created_at, :updated_at
json.url product_url(product, format: :json)
