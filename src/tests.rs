#[cfg(test)]

use crate::algorithms;

#[test]
fn one_plus_one_equals_two() {
    assert_eq!(algorithms::plus(1, 1), 2);
}
