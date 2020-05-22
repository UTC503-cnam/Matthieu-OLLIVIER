conc([], L2, L2).
conc([X|Q], L2, [X|R3]) :- conc(Q, L2, R3).