const mycountry = {
    country: "spain",
    capital: "mardid",
    language: "espanol",
    population: "46",
    neighbours: ["portugal", "italy"],
    describe: function() {
        return (`${this.country} has ${this.population} million people, their mother tongue is ${this.language} they 
        have 2 neighbouring countries ${this.neighbours} and a capital called ${this.capital}`);
    }

}


console.log(mycountry.describe());