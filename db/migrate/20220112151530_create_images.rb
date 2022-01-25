class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :title
      t.string :url
      t.references :user

      t.timestamps
    end
  end
end
