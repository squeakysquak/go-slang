package main

func main() {
    var x1 = 1
    var x2 = 1
    for (x1 < 5){
        x1 = x1 + 1
        x2 = x2 + 2
    }
    //x1 = 5
	//x2 = 9

	var x3 = 1
	for (x3 < 5){
		x3 = x3 + 1
		if (x3 == 3){
			break
		}
	}
	//x3 = 3

	var x4 = 1
	for (x4 < 5){
		if (x4 == 3){
			x4 = x4 + 5
			continue
		}
		x4 = x4 + 1
	}
	//x4 = 8

    sum := 0
	for loopy := 1 ; loopy <= 5; loopy = loopy + 1 {
		sum = sum + 2
        if (loopy == 3){
            break
        }
	}
	//sum = 6
    
    sum2 := 0
    for loopyy := 1 ; loopyy <= 5; loopyy = loopyy + 1 {
        if (loopyy < 3) {
            continue
        }
        sum2 = sum2 + 1
    }
	//sum2 = 3
}