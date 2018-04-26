const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Aana, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

 // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const borntIn1500 = inventors.filter(function(inventor){
        if (inventor.year >= 1500 && inventor.year < 1600) {
            return true;
        }
    })

        console.log(borntIn1500);

        const borntIn1500arrow = inventors.filter(inventor=>inventor.year >= 1500 && inventor.year < 1600);
        
        console.table(borntIn1500arrow);

    //2. Give us an array of the inventor first and last names

    const nameSurname = inventors.map(function(inventor){
        return inventor.first +' '+ inventor.last
    })
    console.log(nameSurname);

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);

     // 3. Sort the inventors by birthdate, oldest to youngest

     const oldestToYoungest = inventors.sort(function(a, b){
         return b.year-a.year;
     })

    console.log(oldestToYoungest);

    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);
    
    
    // 4. How many years did all the inventors live?

    var totalYearsAll = inventors.reduce(function(total, inventor){
        return total + inventor.passed - inventor.year;
    },0);

   console.log(totalYearsAll)

   const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
     }, 0);
    console.log(totalYears)

// 5. Sort the inventors by years lived
     const yearsAlive = inventors.sort(function(a,b){
        const oldest = a.passed - a.year;
        const youngest = b.passed - b.year;
        return oldest-youngest;
     })



    const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);

     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));
    
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name
        const alphabet = people.sort(function(a, b){
            return a-b;
            
        });
        
        console.log(alphabet);




    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
      console.log(alpha);





