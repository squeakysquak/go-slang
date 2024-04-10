package main

import "fmt"

func add(x int, y int) int {
    x = x + 2
    return x + y
}

func main() {
	var a, b int = 1, 2
	go add(a, b)
	go add(b, a)
	c, d, e := 3, add, 5
	go d(c, e)
}
