# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create!(email: 'demo_user', password_digest: "$2a$12$FpWgi.qux0WYN81CMsJj1u5Yor4MZbwq7aXKEy0Q7Lw2m.KV1UDzO")
user1 = User.create!(email: 'testing1@test.com', password_digest: "$2a$12$/I0MGQWrGi3JE9pU7NcK0ul3fUTzF.blFf7Z/H.Zvwi.uvo4n4vyi")

