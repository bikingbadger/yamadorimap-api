const { mongoose, mongo } = require('mongoose');

const uri = 'mongodb://localhost:27017/yamadori';
console.log(uri);

main().catch((err) => {
  console.log('Error in DB connection:' + err);
});

async function main() {
  await mongoose.connect(uri);

  const markerSchema = mongoose.Schema({
    userId: String,
    latLng: String,
    tree: String,
    note: String,
  });

  const Marker = mongoose.model('Marker', markerSchema);

  const newMarker = new Marker({
    userId: 'auth0|6280f87aa64d24006f51332d',
    latLng: '32.234,43.4325',
    tree: 'Pinus mugo',
    note: 'Movement is excellent',
  });

  console.log(newMarker.note);

  await newMarker.save();

  const markers = await Marker.find();

  console.log(markers)
}
