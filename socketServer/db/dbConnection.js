const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/socket_api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('db ye bağlanıldı'))
  .catch(hata => console.log('db hatası'));
