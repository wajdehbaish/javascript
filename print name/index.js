const obj = {
    name: 'wajde',
    age: 23,

    isWajde: function() {
        console.log(this.name);
    },
    iswajdehb: function() {
        setTimeout((obj.isWajde.bind(obj)), 1000);


    }
}
obj.isWajde()
obj.iswajdehb()