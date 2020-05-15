grandparent(X,Y) :- parent(X,Z), parent(Z,Y).  
grandmother(X,Y) :- parent(X,Z), parent(Z,Y), female(Y).  
brothers(X,Y) :- parent(X,Z), parent(Y,Z), male(X), male(Y), X\=Y.
mother(X,Y) :- parent(X,Y), female(Y).
father(X,Y) :- parent(X,Y), male(Y).
son(X,Y) :- parent(Y,X), male(X).
daughter(X,Y) :- parent(Y,X), female(X).
siblings(X,Y) :- parent(X,Z), parent(Y,Z),  X\=Y.
aunt(X,Y) :-  parent(X,Z), siblings(Y,Z), female(Y), X\=Y.