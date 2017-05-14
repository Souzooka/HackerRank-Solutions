defmodule Solution do
  defp sum(a, b), do: a + b

  def main() do
    total = 0
    length = IO.gets("") |> String.strip |> String.to_integer
    for x <- 0..length, do: total = (sum, IO.gets("") |> String.to_integer)
    IO.puts(sum)
  end
end