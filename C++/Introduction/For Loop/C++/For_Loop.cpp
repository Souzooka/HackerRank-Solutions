#include <iostream>
#include <cstdio>
using namespace std;

int main() { 
    int start;
    int end;
    scanf("%d %d", &start, &end);
    
    for (int i = start; i <= end; i++) {
        if (i == 1) {
            printf("one");
        }
        else if (i == 2) {
            printf("two");
        }
        else if (i == 3) {
            printf("three");
        }
        else if (i == 4) {
            printf("four");
        }
        else if (i == 5) {
            printf("five");
        }
        else if (i == 6) {
            printf("six");
        }
        else if (i == 7) {
            printf("seven");
        }
        else if (i == 8) {
            printf("eight");
        }
        else if (i == 9) {
            printf("nine");
        }
        else {
            // bitwise check on odd bit
            if (i & 1) {
                printf("odd");
            }
            else {
                printf("even");
            }
        }
        printf("\n");
    }
    return 0;
}
