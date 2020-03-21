#include <stdio.h>
#include <stdlib.h>


int factorielle (int n){
  if (n>1){
     return n*factorielle(n-1);}
}
int main(int argc, char *argv[]) 
{
  int n = 5;
  printf ("La factorielle de %d est egale a %d",n,factorielle(n));
}