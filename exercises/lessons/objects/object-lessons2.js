var person3 = {
  firstName: "Ali",
  lastName: "Baba",
  middleName: "Ibn",
  birthYear: 1989,
  birthDay: 23,
  birthMonth: 3,
  starsigns: [],
  fullName: function () {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  },
  age: function () {
    let today = new Date();
    return today.getFullYear() - this.birthYear;
  }
};

//  =============================
// 
// /*  Zodiac
//      Aquarius       =  January 20 - February 18
//      Pisces         =  February 19 - March 20
//      Aries          =  March 21 - April 19
//      Taurus         =  April 20 - May 20
//      Gemini         =  May 21 - June 20
//      Cancer         =  June 21 - July 22
//      Leo            =  July 23 - August 22
//      Virgo          =  August 23 - September 22
//      Libra          =  September 23 - October 22
//      Scorpio        =  October 23 - November 21
//      Sagittarius    =  November 22 - December 21
//      Capricorn      =  December 22 - January 19

//      Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn
//   */
// 

let starSign = {

  birthDay: '',

  birthMonth: '',

  monthNames: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],

  starSigns: ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'],

  starsign: '',

  zodiac: function () {

    if (this.birthMonth === 1) {  // January
      if (this.birthDay <= 19) {
        this.starsign = this.starSigns[11];
      } else {
        this.starsign = this.starSigns[0];
      };
    };

    if (this.birthMonth === 2) {  // February
      if (this.birthDay <= 18) {
        this.starsign = this.starSigns[0];
      } else {
        this.starsign = this.starSigns[1];
      }
    };

    if (this.birthMonth === 3) {  // March
      if (this.birthDay <= 20) {
        this.starsign = this.starSigns[1];
      } else {
        this.starsign = this.starSigns[2];
      }
      console.log('March-controll:', this.starsign);
    };

    if (this.birthMonth === 4) {  // April
      if (this.birthDay <= 19) {
        this.starsign = this.starSigns[2];
      } else {
        this.starsign = this.starSigns[3];
      }
    };

    if (this.birthMonth === 5) {  // May
      if (this.birthDay <= 20) {
        this.starsign = this.starSigns[3];
      } else {
        this.starsign = this.starSigns[4];
      }
    };

    if (this.birthMonth === 6) {  // June
      if (this.birthDay <= 20) {
        this.starsign = this.starSigns[4];
      } else {
        this.starsign = this.starSigns[5];
      }
    };

    if (this.birthMonth === 7) {  // July
      if (this.birthDay <= 22) {
        this.starsign = this.starSigns[5];
      } else {
        this.starsign = this.starSigns[6];
      };
    };

    if (this.birthMonth === 8) {  // August
      if (this.birthDay <= 22) {
        this.starsign = this.starSigns[6];
      } else {
        this.starsign = this.starSigns[7];
      }
    };

    if (this.birthMonth === 9) {  // September
      if (this.birthDay <= 22) {
        this.starsign = this.starSigns[7];
      } else {
        this.starsign = this.starSigns[8];
      }
    };

    if (this.birthMonth === 10) {  // October
      if (this.birthDay <= 22) {
        this.starsign = this.starSigns[8];
      } else {
        this.starsign = this.starSigns[9];
      }
    };

    if (this.birthMonth === 11) {  // November
      if (this.birthDay <= 21) {
        this.starsign = this.starSigns[9];
      } else {
        this.starsign = this.starSigns[10];
      }
    };

    if (this.birthMonth === 12) {  // December
      if (this.birthDay <= 21) {
        this.starsign = this.starSigns[10];
      } else {
        this.starsign = this.starSigns[11];
      }
    };

  },

  get myZodiac() {
    this.zodiac();
    return (`\n Poeple who were born on ${this.birthDay} of ${this.monthNames[this.birthMonth - 1]}, have the starsign: ${this.starsign}.`);
  }
};

starSign.birthDay = person3.birthDay;
starSign.birthMonth = person3.birthMonth;

console.log(starSign.myZodiac);



console.log('\n', person3.fullName());
console.log(person3.age());

// console.log();
starSign.birthDay = 15;
starSign.birthMonth = 9;
console.log(starSign.myZodiac);

starSign.birthDay = 22;
starSign.birthMonth = 10;
console.log(starSign.myZodiac);