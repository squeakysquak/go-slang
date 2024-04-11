package main

func a(x, y, z chan int) {
	x<-1
	<-y
	z<-1
}

func b(x, y, z chan int) {
	y<-1
	<-x
	z<-2
}

func main() {
	x := make(chan int)
	y := make(chan int)
	z := make(chan int, 2)
	go a(x, y, z)
	go b(x, y, z)
	return <-z
}
