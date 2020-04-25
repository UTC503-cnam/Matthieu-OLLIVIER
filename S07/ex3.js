var authors = [{ name: 'Franquin', country: 'be' }, { name: 'Uderzo', country: 'fr' }, { name: 'Hergé', country: 'be' }];
var belgian_authors = authors.filter(function (n) { return n.country == 'be'; }).map(function (n) { return 'M ' + n.name; });
// Ecrivez le code renvoyant un tableau contenant uniquement les noms des auteurs belges précédés de M.
// Instructions de boucle interdites.
console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
//# sourceMappingURL=ex3.js.map