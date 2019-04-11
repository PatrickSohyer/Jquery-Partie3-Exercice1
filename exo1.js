var indexClickButton = 0; // je créer une variable indexClickButton que je définis sur 0

$('#buttonClick').click(function(){ //je cible l'id de mon button et lui met un évènement click
  indexClickButton++; //la fonction permettra d'incrémenter mon indexClickButton à chaque click
  $('#numberClick').text(function(){ //je cible l'id de mon texte, je lui met un élément text qui va changer le contenu de mon id
    return indexClickButton; //je renvoie la valeur pour la changer
  });
});
