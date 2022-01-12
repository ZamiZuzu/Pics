class UserWithInfoSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :bio
    has_many :images
end