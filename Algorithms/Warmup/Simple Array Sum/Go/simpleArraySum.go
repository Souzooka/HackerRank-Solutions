package main
import "fmt"

func main() {
  var count int
  fmt.Scan(&count)

  var sum int = 0
  for i := 0; i < count; i++ {
    var num int
    fmt.Scan(&num)
    sum += num
  }
  fmt.Print(sum)
}