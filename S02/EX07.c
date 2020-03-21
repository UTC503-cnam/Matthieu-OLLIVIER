#include <stdio.h>
#include <stdlib.h>

#define N 5

void calcul (int e[], int r[], int type)
{
  for (int i=0 ; i<N; i++){
    switch(type){
    case 1: // double
    r[i]=e[i]*2;
    break;
    case 2: //triple
    r[i]=e[i]*3;
    break;
    case 3: //square
    r[i]=e[i]*e[i];
    break;
    case 4: // maximize
    if(e[i]<3){
      r[i]=e[i];}
      else {
      r[i]=3;}
    break;
    }
  }
}
;
int main(int argc, char *argv[]) 
{
  int e[N] = {1, 5, 2, 4, 3};
  int r_double[N];
  calcul (e, r_double, 1);
  int r_triple[N];
  calcul (e, r_triple, 2);
  int r_square[N];
  calcul (e, r_square, 3);
  int maximize3[N];
  calcul (e, maximize3, 4);
};