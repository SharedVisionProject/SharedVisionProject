class CreatePieces < ActiveRecord::Migration
  def self.up
    create_table :pieces do |t|
      t.integer :board_id
      t.float :pos_x
      t.float :pos_y
      t.string :type_of_shape
      t.text :data

      t.timestamps
    end
  end

  def self.down
    drop_table :pieces
  end
end
