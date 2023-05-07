defmodule AlgorithmsTest do
  use ExUnit.Case

  describe "missing_number/1" do
    test "returns the missing number in an array" do
      assert Algorithms.missing_number([0, 1, 2, 3, 5]) == 4
    end

    test "returns the missing number in an array, which is last number" do
      assert Algorithms.missing_number([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) == 21
    end
  end

  describe "plus/2" do
    test "adds two numbers together" do
      assert Algorithms.plus(2, 3) == 5
    end
  end
end