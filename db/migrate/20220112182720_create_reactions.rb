class CreateReactions < ActiveRecord::Migration[7.0]
  def change
    create_table :reactions do |t|
      t.string :type
      t.references :user, :image

      t.timestamps
    end
  end
end
