const init = () => {
  var db = [];

  let createDb = (newEntry) => {
    db.push(newEntry);

    return `  New element '${newEntry}' added! The new length of the array is ${db.length}.`;
  };

  let readDb = () => {

    // console.log(db);
    dbCopy = [...db];
    return dbCopy;
  };

  let updateDb = (indexNo, newEntry) => {

    if (indexNo >= 0 && indexNo < db.length) {
      console.log(`  Entry '${db[indexNo]}' has been successfully changed to '${newEntry}'. :) `);
      db[indexNo] = newEntry;
    } else {
      console.log(`  ERROR: There is no index '${indexNo}' in the database.`);
      console.log(`  There was no entry update to '${newEntry}'.`);
      db.push(newEntry);
      return `  New element '${newEntry}' has been added!`;
    }
    dbCopy = [...db];
    return dbCopy;
  };

  let deleteDb = (indexNo) => {
    if (indexNo >= 0 && indexNo < db.length) {
      console.log(`  Entry '${db[indexNo]}' will be deleted.`);
      db.splice(indexNo, 1);
    } else {
      console.log(`  Index '${indexNo}' don't exist.`);
    }
    dbCopy = [...db];
    return dbCopy;
  };

  const api = [];
  // console.log(api);

  api.push(createDb);
  api.push(readDb);
  api.push(updateDb);
  api.push(deleteDb);

  console.log(api);

  return api;
};

const api = init();

let createInDb = api[0];
let readInDb = api[1];
let updateDb = api[2];
let deleteInDb = api[3];

createInDb('Tuna ');
createInDb('Salad ');
createInDb('Dressing ');
createInDb('Onions ');

console.log(createInDb('Anchovies '));
console.log(readInDb());
console.log(updateDb([3], 'Garlic '));
console.log(deleteInDb([4]));

console.log(updateDb([7], 'Pepper '));

console.log(readInDb());