function init() {
  var db = ['Mr. ', 'Ms. '];
  console.log('***** init start *****');
  console.log(db);

  let create = () => {
    console.log('  ***** create start ***** ');
    newEntry = db.push('Yo Mama');
    console.log('   ', db.length);
    console.log('   ', db);
    console.log('  ***** create ends ***** ');
    return db;
  }
  console.log(db, 'after let create, before "create();"');
  create();
  console.log(db, 'after "create()"');
  console.log('***** init ends!!');
  return api = db;
}

let createInDb = init();

createInDb.push(('Sir '));

console.log(createInDb[0], 'Smith');
console.log(createInDb[1], 'Hubble!');
console.log(createInDb[3], 'Conan Doyle!');
console.log(createInDb[2], 'Franklin!');
console.log(createInDb.length);

console.log(api);
createInDb[api.push('Siri ')];
console.log(api, ' // push. Siri');