package main

import "fmt"
/*
func add(x int, y int) int {
    x = x + 2
    x = x - 2 
    return x + y
}
*/
func main() {
    /*    
    var reassignTest int = 10
    reassignTest = 3 * (2 + 2) / 2 - 5 // ans: 1

    var i,j int = 1 + 4 , 2 // i = 5, j = 2
    var k int = i + j //k = 7

    var reassignTest2 int = (300 + 21) % 123
    reassignTest2 = reassignTest2 + 1 //76

    var boolTest bool = (true || false) && !(true && false) //true

    var unaryTest1 bool = !true
    var unaryTest2 int = -1

    var relTest1 = 1 + 2 < 2 //false
    var relTest2 = 5 >= 5-22 //true
    var relTest3 = 1 + 2 != 3 || 5 > 10 - 5 //false

    var x = 1
    {
        var x = 10
    }
    x = add(x, i) // 1 + 5 = 6
    

    var a = 0
    if (1 + 1 == 2){
        a = 4
    }else{
        a = 5
    }

    var b = 0
    if (a == 5){
        b = 1
    } else if (a == 4){
        b = 2
    } else if (a == 3){
        b = 3
    }else {
        b = 4
    }

    var c = 1
    if (true){
        c = 4
    }
    if(false){
        c = 5
    }

    //return c
    
    var x1 = 1
    var x2 = 1
    for (x1 < 5){
        x1 = x1 + 1
        x2 = x2 + 2
    }
    x2 //9
    */
    sum := 0
	for x := 1 ; x <= 5; x = x + 1 {
		sum = sum + 2
        if (x == 3){
            break
        }
	}
    return sum
    
}
