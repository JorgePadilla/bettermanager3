class Product < ApplicationRecord
  belongs_to :journey , :optional => true
end