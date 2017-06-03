defmodule Recursion do
    def print(n) when n <= 1 do
        IO.puts "Hello World"
    end

    def print(n) do
        IO.puts "Hello World"
        print(n-1)
    end
end

# HackerRank pls
read_integer = fn -> String.to_integer(String.trim(IO.gets(""))) end

Recursion.print(read_integer.())