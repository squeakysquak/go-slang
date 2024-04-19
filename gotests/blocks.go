package main

func main() {
    var x = 1
    {
        var x = 10
    }
    x = x + 5 //6

	{
		var z = 123
	}

	var z = 100
	{
		var z = 20
		return z //20
	}
}