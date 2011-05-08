class Piece < ActiveRecord::Base
	belongs_to :board

	def before_save
		data.delete! "\r\n "
	end
end
