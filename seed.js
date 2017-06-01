const db = require('./db/index');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');

const data = {
  campus: [
    {name: "Luna", image: "https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584"},
    {name: "Terra", image: "http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg"},
    {name: "Mars", image: "https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg"},
    {name: "Titan", image: "http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg"}
  ],
  user: [
    {name: "Gabe", email: "Gabe@fullstack.com", campusId: 4},
    {name: "Ashi", email: "Ashi@fullstack.com", campusId: 4},
    {name: "Khan", email: "Khan@fullstack.com", campusId: 4},
    {name: "Bender", email: "Bender@fullstack.com", campusId: 4},
    {name: "Q", email: "Q@fullstack.com", campusId: 4},
    {name: "Dan", email: "Dan@fullstack.com", campusId: 2},
    {name: "Marvin", email: "Marvin@fullstack.com", campusId: 3},
    {name: "Stinky", email: "Stinky@fullstack.com", campusId: 1}
  ],
}

db.didSync
.then(() => {
  // return db.sync({force: true})
  return db.sync()
})
.then( () => {return Campus.bulkCreate(data.campus)})
.then( () => {return User.bulkCreate(data.user)})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close()
  console.log('connection closed');
  return null;
});
