#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) 
{
  int n = 5;
  int factorielle = n;
  int valeur = n;
  debut:
    if (valeur>1) {
    factorielle = factorielle*(valeur-1);
    valeur--;
    goto debut;}
    else {
    goto fin;
    }
  fin:
  printf ("La factorielle de %d est egale a %d",n,factorielle);
}