## Exercice Gestion de stock

Créer un component qui va afficher une gestion de stock d'un magasin lambda.
Afficher tous les produits que le magasin dispose.
Permettre à l'utilisateur d'acheter les produits avec une action d'achat sur chaque produit
Choisissez quelques produit de votre choix !!!

### Modèle d'un produit

- id
- nom
- description
- prix
- quantité
- image du produit

Demandes d'affichage spécifiques

- Les produits qui coûtent moins de 10 EUR doivent afficher leur prix en VERT
- La quantité des produits doit respecté:
  * Si la quantité est supérieure à 5 : VERT
  * Si la quantité est inférieur à 5 et supérieur 0 : JAUNE
- Si un produit a une quantité à 0 => MASQUER LE PRODUIT
