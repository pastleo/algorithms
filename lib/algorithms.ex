defmodule Algorithms do
  def missing_number(arr) do
    Enum.sum(1..(length(arr))) - Enum.sum(arr)
  end

  def plus(a, b) do
    a + b
  end
end
