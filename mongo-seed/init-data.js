db.posts.insertMany([
  { title: "Article initial", content: "Ceci est mon premier article généré par script.", author: "Charlie", date: new Date() },
  { title: "Un autre article", content: "Un deuxième article via script.", author: "Charlie", date: new Date() }
]);

db.comments.insertOne({
  postId: db.posts.findOne({ title: "Article initial" })._id,
  author: "David",
  comment: "Super article !",
  date: new Date()
});

// Crée un index sur le champ 'title' de la collection 'posts'
db.posts.createIndex({ title: 1 });