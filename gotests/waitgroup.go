package main

var a = 1

func f1(w1 Waitgroup, w2 Waitgroup) {
	waitgroupWait(w1)
	a = a + 1
	waitgroupDone(w2)
}

func f2(w Waitgroup) {
	waitgroupDone(w)
}

func main() {
	w1 := makeWaitgroup()
	w2 := makeWaitgroup()
	waitgroupAdd(w1, 2)
	waitgroupAdd(w2, 2)
	go f1(w1, w2)
	go f1(w1, w2)
	go f2(w1)
	go f2(w1)
	waitgroupWait(w2)
	return a
}
