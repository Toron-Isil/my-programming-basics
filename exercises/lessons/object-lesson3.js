/*
1-Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you’d like.
2-Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of “hello” and a value of however you spell “hello” in the language you add.
3-Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective values

*/



var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  }
}

let addSpeacker = (name) => {
  atIdx = nestedObject.speakers.length;
  nestedObject.speakers[atIdx] = name;
  // nestedObject.speakers[nestedObject.speakers.length] = { name: "Kato" };
}

console.log('\n', nestedObject.speakers);
addSpeacker({ name: "Kato" });
addSpeacker({ name: "Bashira" });
addSpeacker({ name: "Naomi" });

console.log('\n', nestedObject.speakers);

// Languages

let addLanguage = (lang, hello) => {
  // testphase

  nestedObject.data.languages[lang] = hello;

}
console.log('\n', nestedObject.data.languages);

addLanguage('japanese', { hello: "Konichi wa" });
addLanguage('arabian', { hello: "Marhaba" });
addLanguage('gaeilge', { hello: "Dia duit" });

console.log('\n', nestedObject.data.languages);

// =======================
/*
adds: European country -> countries (inside continents , inside of countries object). 
The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective values
*/

let addCountry = (country, capiPop) => {

  nestedObject.data.continents.europe.countries[country] = capiPop;

}

console.log('\n', nestedObject.data.continents.europe.countries);

addCountry('ireland', { capital: "Dublin", population: 4921500 });
addCountry('austria', { capital: "Vienna", population: 8857960 });

console.log('\n', nestedObject.data.continents.europe.countries);


let addContinent = (continent, countries) => {

  nestedObject.data.continents[continent] = countries;
  // nestedObject.data.continents[continent].countries = country;
}

// ===================================

let addAsiaCountry = (country, AsiCapiPop) => {

  nestedObject.data.continents.asia.countries[country] = AsiCapiPop;

}

// ===================================
addContinent('asia', { countries: {} });
console.log('\n Continents:', nestedObject.data.continents);

addAsiaCountry('japan', { capital: "tokyo", population: 126317000 });

console.log('\n Continents:', nestedObject.data.continents);

console.log('\n', nestedObject.data.continents.asia.countries);
