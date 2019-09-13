const init = () => {
  var db = [];

  let create = (newEntry) => {
    // console.log('  ***** create start ***** ');
    db.push(newEntry);

    // console.log(db);

    return db.length;
  }

  var api = [];
  console.log(api);
  api.push(create);
  console.log(api);

  return api;
}

let createInDb = init();


createInDb[0]('Mr. ');

console.log(createInDb[0]('Sir '));

