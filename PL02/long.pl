long([], 0).
long([_|Q], R) :- long(Q, S), R is S+1.