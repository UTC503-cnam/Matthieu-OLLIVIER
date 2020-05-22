repas_leger(X, Y, Z) :-
entree(X, X_cal),
plat(Y, Y_cal),
dessert(Z, Z_cal),
(X_cal + Y_cal + Z_cal < 600),
Z\=glace.
entree(carotte, 50).
entree(pate, 700).
plat(choucroute, 200).
dessert(glace, 300).
dessert(pomme, 50).
dessert(orange, 80).