Dir[File.join(File.dirname(__FILE__), "*.rb")].each {|file| require file }

module Alg
  def self.method_missing(a, *params)
    self.instance_method(a).bind(self).call(*params)
  end
end
