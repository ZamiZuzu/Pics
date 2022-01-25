class ImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :picture

  def picture
    if object.picture.attached?
      {
        url: rails_blob_path(object.picture, only_path: true)
      }
    end
  end
end
