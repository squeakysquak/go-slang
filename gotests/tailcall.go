package main

func tc(n int) chan int {
	if n == 0 {
		return make(chan int);
	}
	return tc(n - 1);
}

func main() {
	return tc(2);
}
