package main

import "fmt"

func main() {
    /*    */
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
}