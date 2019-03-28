require "min_sort_swaps/min_sort_swaps"

module Alg
  def self.method_missing(a, *params)
    self.instance_method(a).bind(self).call(*params)
  end
end
