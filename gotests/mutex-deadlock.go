package main

var a = 1

func f(m Mutex) {
	mutexLock(m)
	a = a + 1
	mutexUnlock(m)
}

func main() {
	m := makeMutex()
	mutexLock(m)
	/*go*/ f(m)
	mutexUnlock(m)
	return a
}
