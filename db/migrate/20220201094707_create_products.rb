class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :journey, null: false, foreign_key: true
      t.string :product_type
      t.string :name
      t.integer :launch_days_offset
      t.integer :event_days_offset

      t.timestamps
    end
  end
end
