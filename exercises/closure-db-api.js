const init = () => {
  var db = [];

  let createDb = (newEntry) => {
    db.push(newEntry);

    // console.log(db);
    return `New element '${newEntry}' added! The new length of the array is ${db.length}.`;
  };

  let readDb = () => {

    // console.log(db);
    dbCopy = [...db];
    return dbCopy;
  };

  let updateDb = (indexNo, newEntry) => {

    if (indexNo >= 0 && indexNo <= (db.length - 1)) {
      console.log(`Entry '${db[indexNo]}' has been successfully changed to '${newEntry}'. :) `);
      db[indexNo] = newEntry;
    } else {
      console.log(`ERROR: There is no index '${indexNo}' in the database. '${newEntry}' could not be updated. `);

    }
    dbCopy = [...db];
    return dbCopy;
  };

  let deleteDb = (indexNo) => {
    console.log(`Entry '${db[indexNo]}' will be deleted.`);
    db.splice(indexNo, 1);

    dbCopy = [...db];
    return dbCopy;
  };

  const api = [];
  console.log(api);

  api.push(createDb);
  api.push(readDb);
  api.push(updateDb);
  api.push(deleteDb);

  console.log(api);

  return api;
};

let createInDb = init();


createInDb[0]('Tuna ');
createInDb[0]('Salad ');
createInDb[0]('Dressing ');
createInDb[0]('Onions ');

console.log(createInDb[0]('Anchovies '));
console.log(createInDb[1]());
console.log(createInDb[2]([3], 'Garlic '));
console.log(createInDb[3]([4]));

console.log(createInDb[2]([7], 'Pepper '));