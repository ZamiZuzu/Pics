class Image < ApplicationRecord
    belongs_to :user
    has_many :favorites
    has_many :likes
    has_many :dislikes
end
