function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;

    this.callpokemon = () => {
        console.log('i choose you', pokemonName);
    }

}
let peckacho = new Pokemon('peckacho', 'electric', ['electric power']);
peckacho.callpokemon()