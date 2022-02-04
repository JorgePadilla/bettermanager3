class Journey < ApplicationRecord
  has_many :product
  validates :name, :start_date, presence: true
end
