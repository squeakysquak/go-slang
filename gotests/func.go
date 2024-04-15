package main

func add(x int, y int) int {
    return x + y
}


func add2(x int, y int) int {
    x = x + 2
    x = x - 2 
    return x + y
}

func add3(x int, y int) int {
    return add(x, y)
}

func main() {
	var x1 = add(1,2)
	var x2 = add2(1,2)
	var x3 = add3(1,2)
	var x4 = add(0+1,5-3)
}