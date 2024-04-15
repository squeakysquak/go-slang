package main

func v(c chan int) {
	c<-4
}

func main() {
	a := make(chan int, 1)
	b := make(chan int, 2)

	a <- 2
	b <- 3

	c := make(chan int, 3)
	go v(c) //4
}