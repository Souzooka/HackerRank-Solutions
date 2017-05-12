object Solution extends App {

  def f(args: Int) {
    for (a <- 1 to args) {
      println("Hello World");
    }
  }

  var n = scala.io.StdIn.readInt
  f(n)
}
