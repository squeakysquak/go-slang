package main

import "fmt"

func add(x int, y int) int {
    return x + y
}

func v(c chan int) {
	c<-42
}

func main() {
	var a, b int = 1, 2
	go add(a, b)
	c := make(chan int)
	go v(c)
	d := <-c
	return d
}
