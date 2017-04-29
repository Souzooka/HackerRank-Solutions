open System

(* Number Of Parameters: 1
Parameters: [n]
Returns: nil *)
[<EntryPoint>]
let main argv =
  let loops = Console.ReadLine() |> int
  for i = 1 to loops do
    printf "%s" "Hello World\n"
  0s