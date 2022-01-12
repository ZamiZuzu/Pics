u1 = User.create(username: "coolguy58", email: "fakeemail@fake.com", password: "password", bio: "I'm the coolest!")
u2 = User.create(username: "the_best", email: "totallyrealemail@fake.com", password: "drowssap", bio: "I'm the best!")
u3 = User.create(username: "the_worst", email: "totallyrealemail@fake.com", password: "drowssap", bio: "I'm the worst...")

i1 = Image.create(title: "example", url: "https://via.placeholder.com/350x150", user_id: u1.id)

Favorite.create(user_id: u2.id, image_id: i1.id)
Like.create(user_id: u2.id, image_id: i1.id)
Dislike.create(user_id: u3.id, image_id: i1.id)