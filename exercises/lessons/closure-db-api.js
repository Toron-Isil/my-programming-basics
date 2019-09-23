const myMixedSalad = () => {
  const db = [];
  const api = [];

  let createDb = (newEntry) => {
    db.push(newEntry);
    console.log(`  New element '${newEntry}' has been added!`);
    console.log(`  The new length of the array is ${db.length}.`);
    console.log();
  };

  let readInDb = () => {

    return [...db];
  };

  let updateDb = (indexNo, newEntry) => {
    const oldEntry = db[indexNo];
    console.log('oldEntry=', oldEntry);
    console.log('indexNo=', db[indexNo]);
    if (typeof oldEntry === 'undefined') {
      console.log(`  ERROR: There is no index '${indexNo}' in the database.`);
      console.log(`  There was no entry to update to '${newEntry}'.`);
      createDb(newEntry);

    } else {
      console.log(`  Entry '${oldEntry}' has been successfully changed to '${newEntry}'. :) `);
      db[indexNo] = newEntry;
    }
    return [...db];
  };

  let deleteDb = (indexNo) => {
    const oldEntry = db[indexNo];
    if (typeof oldEntry === 'undefined') {
      console.log(`  Index '${indexNo}' don't exist.`);
    }

    db.splice(indexNo, 1);

    return `  Entry '${oldEntry}' has been deleted.`;
  };


  console.log();

  api.push(createDb, readInDb, updateDb, deleteDb);

  return api;
};

const api = myMixedSalad();

let createInDb = api[0];
let readInDb = api[1];
let updateDb = api[2];
let deleteInDb = api[3];

createInDb('Tuna ');
createInDb('Salad ');
createInDb('Dressing ');
createInDb('Onions ');

createInDb('Anchovies ');
console.log(readInDb());
console.log(updateDb([3], 'Garlic '));
console.log(deleteInDb([4]));
console.log(updateDb([7], 'Salt \'n Pepper '));

console.log(readInDb());
