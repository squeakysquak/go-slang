package main

var a = 1

func f(m Mutex) {
	lockMutex(m)
	a = a + 1
	unlockMutex(m)
}

func main() {
	m := makeMutex()
	lockMutex(m)
	go f(m)
	unlockMutex(m)
	return a
}
