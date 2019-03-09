class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :checked, default: false
      t.belongs_to :list

      t.timestamps
    end
    # add_foreign_key :items, 
    # :list, 
    # column: :list_id
# add_index :flights, :departure_airport_id
  end
end
