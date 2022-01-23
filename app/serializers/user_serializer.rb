class UserSerializer < ActiveModel::Serializer
  attributes :id, 
             :username, 
             :bio, 
             :likes_gained, 
             :dislikes_gained, 
             :favorites_gained, 
             :reactions_gained

  has_many :favorites, serializer: FavoriteSerializer
  has_many :images,  serializer: ImageSerializer
  has_many :likes
  has_many :dislikes
  has_many :reactions

  def images
    Image.where(user_id: self.object.id)
  end

  # def favorites
  #   image_ids = []
  #   favorites = Favorite.where(user_id: self.object.id)
  #   favorites.each do |x|
  #     image_ids.push(x.image_id)
  #   end
  #   image_ids.map { |i| Image.find(i)}
  # end

  def likes_gained
    i = images.map do |image|
      Like.where(image_id: image.id)
    end

    likes = []

    i.each do |i|
      likes.concat i
    end

    likes
  end

  def dislikes_gained
    i = images.map do |image|
      Dislike.where(image_id: image.id)
    end

    dislikes = []

    i.each do |i|
      dislikes.concat i
    end

    dislikes
  end

  def favorites_gained
    i = images.map do |image|
      Favorite.where(image_id: image.id)
    end

    favorites = []

    i.each do |i|
      favorites.concat i
    end

    favorites
  end

  def reactions_gained
    i = images.map do |image|
      Reaction.where(image_id: image.id)
    end

    reactions = []

    i.each do |i|
      reactions.concat i
    end

    reactions
  end
end
