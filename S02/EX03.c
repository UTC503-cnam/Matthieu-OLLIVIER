#include <stdio.h>
#include <stdlib.h>



int factorielle (int n)
{
  int calcul = n;
  for (int i = 1; i < n ; i++) {
    calcul = calcul*(i);
    }
  return calcul;
}
int main(int argc, char *argv[]) 
{
  int n = 5;
  printf ("La factorielle de %d est egale a %d",n,factorielle(n));
}
