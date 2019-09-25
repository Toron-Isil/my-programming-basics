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

let addSpeacker = (nameSpeaker) => {
  atIdx = nestedObject.speakers.length;
  nestedObject.speakers[atIdx] = { name: nameSpeaker };
};

console.log('\n', nestedObject.speakers);
addSpeacker("Kato");
addSpeacker("Bashira");
addSpeacker("Naomi");

console.log('\n', nestedObject.speakers);

// Languages

let addLanguage = (lang, helloLang) => {
  // testphase

  nestedObject.data.languages[lang] = { hello: helloLang };

}
console.log('\n', nestedObject.data.languages);

addLanguage('japanese', "Konichi wa");
addLanguage('arabian', "Marhaba");
addLanguage('gaeilge', "Dia duit");

console.log('\n', nestedObject.data.languages);

// =======================
/*
adds: European country -> countries (inside continents , inside of countries object). 
The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective values
*/

let addCountry = (country, capi, Pop) => {

  nestedObject.data.continents.europe.countries[country] = { capital: capi, population: Pop };

}

console.log('\n', nestedObject.data.continents.europe.countries);

addCountry('ireland', "Dublin", 4921500);
addCountry('austria', "Vienna", 8857960);

console.log('\n', nestedObject.data.continents.europe.countries);


let addContinent = (continent, countries) => {

  nestedObject.data.continents[continent] = { countries: countries };
  // nestedObject.data.continents[continent].countries = country;
}

// ===================================

let addAsiaCountry = (country, AsiCapi, AsiPop) => {

  nestedObject.data.continents.asia.countries[country] = { capital: AsiCapi, population: AsiPop };

}

// ===================================

addContinent('asia', {});
console.log('\n Continents:', nestedObject.data.continents);

addAsiaCountry('japan', "tokyo", 126317000);

console.log('\n Continents:', nestedObject.data.continents);


console.log('\n Europe:', nestedObject.data.continents.europe.countries, '\n');
console.log(' Asia:', nestedObject.data.continents.asia.countries);

// =================================================================

console.log('\n ========================================================= \n');
console.log('Array.isArray (nestedObject.speakers) = ', Array.isArray(nestedObject.speakers));
console.log('Array.isArray(nestedObject.data.continents.europe.countries) = ', Array.isArray(nestedObject.data.continents.europe.countries), '\n');

function isArrayConstructor(objToCheck) {
  return Boolean(objToCheck) && objToCheck.constructor === Array;
}
let shortyCountries = nestedObject.data.continents.europe.countries;

console.log('\t \t isArrayConstructor:')
console.log('nestedObject.speakers) \t \t= ', isArrayConstructor(nestedObject.speakers));
console.log('nestedObject. (...) .countries) = ', isArrayConstructor(shortyCountries));

function isArrayInstanceOf(objToCheck) {
  return objToCheck instanceof Array;
}
console.log('\n \t \t isArrayInstanceOf:')
console.log('nestedObject.speakers) \t \t =', isArrayInstanceOf(nestedObject.speakers));
console.log('nestedObject. (...) .countries) = ', isArrayInstanceOf(shortyCountries));
