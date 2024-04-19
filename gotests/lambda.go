package main

func f(g func(int) int, x int) {
	return g(x)
}

func main() {
	return f(func(x int) int {
		return x * x
	}, 7)
}