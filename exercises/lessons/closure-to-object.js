const myMixedSalad = () => {

  let mySalad = {

    db: [],
    api: [],

    createDb: (newEntry) => {
      mySalad.db.push(newEntry);
      console.log(`  New element '${newEntry}' has been added!`);
      console.log(`  The new length of the array is ${mySalad.db.length}.`);
      console.log();
    },

    readInDb: () => {

      return [...mySalad.db];
    },

    updateDb: (indexNo, newEntry) => {
      const oldEntry = mySalad.db[indexNo];
      console.log('oldEntry=', oldEntry);
      console.log('indexNo=', mySalad.db[indexNo]);
      if (typeof oldEntry === 'undefined') {
        console.log(`  ERROR: There is no index '${indexNo}' in the database.`);
        console.log(`  There was no entry to update to '${newEntry}'.`);
        createDb(newEntry);

      } else {
        console.log(`  Entry '${oldEntry}' has been successfully changed to '${newEntry}'. :) `);
        mySalad.db[indexNo] = newEntry;
      }
      return [...db];
    },

    deleteDb: (indexNo) => {
      const oldEntry = mySalad.db[indexNo];
      if (typeof oldEntry === 'undefined') {
        console.log(`  Index '${indexNo}' don't exist.`);
      }

      mySalad.db.splice(indexNo, 1);

      return `  Entry '${oldEntry}' has been deleted.`;

    },
  }

  mySalad.api.push(this.createDb, this.readInDb, this.updateDb, this.deleteDb);

  return mySalad.api;

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
