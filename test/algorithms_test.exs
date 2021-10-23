defmodule AlgorithmsTest do
  use ExUnit.Case
  import Algorithms

  test "1 + 1 = 2" do
    assert plus(1, 1) == 2
  end
end
