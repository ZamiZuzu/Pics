class FavoriteSerializer < ActiveModel::Serializer
  attributes :id,
             :image

  def image
    ImageSerializer.new(object.image, {root: false})
  end
end
