chemin(D, A, []) :- arc(D, A).
chemin(D, A, [X|Q]) :- arc(D, X), chemin(X, A, Q).

/* arc existants */
arc(aa, bb).
arc(aa, cc).
arc(cc, dd).
arc(bb, dd).
arc(bb, ee).
arc(dd, ff).
arc(ee, ff).