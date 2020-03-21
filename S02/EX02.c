#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
  int n = 5;
  int factorielle = n;
   for (int i = 1; i < n ; i++) {
    factorielle = factorielle*(i);
    }
  printf ("La factorielle de %d est egale a %d",n,factorielle);
}
