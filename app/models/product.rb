class Product < ApplicationRecord
  belongs_to :journey , :optional => true
  validates :name, :launch_days_offset, :event_days_offset, presence: true
  validates :launch_days_offset, :event_days_offset, numericality: { greater_than_or_equal_to: 0 }
end
