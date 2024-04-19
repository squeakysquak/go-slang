package main

func main() {
	var test1 = (true || false) && !(true && false) //true
	var test2 = 1 + 1 == 2 //true
	var test3 = 1 + 1 != 3 //true
	var test4 = 500 / 100 <= 5 //true
	var test5 = 400 / 100 <= 5 //true
	var test6 = 500 / 100 >= 5 //true
	var test7 = 600 / 100 >= 5 //true
	var test8 = 6 * 3 > 6 //true
	var test9 = 6 / 3 < 6 //true
}