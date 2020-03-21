#include <stdio.h>
#include <stdlib.h>

#define N 5

void mapDouble (int e[], int r[])
{
  for (int i=0 ; i<N; i++){
    r[i]=e[i]*2;
  }
  }
void mapTriple (int e[], int r[])
{
  for (int i=0 ; i<N; i++){
    r[i]=e[i]*3;
  }
  }
void mapSquare (int e[], int r[])
{
  for (int i=0 ; i<N; i++){
    r[i]=e[i]*e[i];
  }
  }
void mapMaximize3 (int e[], int r[])
{
  for (int i=0 ; i<N; i++){
    if(e[i]<3){
      r[i]=e[i];}
      else {
      r[i]=3;}
    }
}
;
int main(int argc, char *argv[]) 
{
  int e[N] = {1, 5, 2, 4, 3};
  int r_double[N];
  mapDouble (e, r_double);
  int r_triple[N];
  mapTriple (e, r_triple);
  int r_square[N];
  mapSquare (e, r_square);
  int maximize3[N];
  mapMaximize3 (e, maximize3);
};