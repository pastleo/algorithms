# Algorithms

My algorithm practices

## Browser

use a static http server to serve this whole project, then use a browser to navigate to `index.html`

> Browser need to support [`ES modules: dynamic import()`](https://caniuse.com/es6-module-dynamic-import)

> With Mocha test suite browser UI, click play button of a test in the webpage to run that test only; To start solving a new question, create a test, empty function and wire them up first, then use this feature to focus on the question

## NodeJS

```bash
npm install
npm run test [test/algorithms.js]
node lib/algorithms.js # run main-like block in "if (typeof testing === 'undefined') {}"
```

## Elixir

```bash
mix deps.get # actually we don't need any deps
mix test [test/algorithms_test.exs]
iex -S mix
```

## Ruby

```bash
gem install bundler
bundle
bundle exec rspec [spec/algorithms_spec.rb]
./bin/irb
```

## Rust

```bash
cargo test
cargo run
```

## C++

> [CMake](https://cmake.org/install/) is required
>> install on ArchLinux: `pacman -Sy cmake`

```bash
./bin/cmake_build test
./bin/cmake_build run
```

## Python 3

```bash
python -m unittest
python algorithms/algorithms.py
```

> [unittest](https://docs.python.org/3/library/unittest.html) is python's built-in unit testing framework
