package main

func main() {
    var a = 0
    if (1 + 1 == 2){
        a = 4 //4
    }else{
        a = 5
    }

    var b = 0
    if (a == 5){
        b = 1
    } else if (a == 4){
        b = 2 //2
    } else if (a == 3){
        b = 3
    }else {
        b = 4
    }

    var c = 1
    if (true){
        c = 4 //4
    }
    if(false){
        c = 5
    }
}