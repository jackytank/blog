---
title: "Functional Programming Concepts in Rust"
description: "Exploring functional programming principles and how they apply to Rust development"
date: 2024-05-15
tags: ["rust", "functional-programming", "development"]
cover: "/images/rust-fp.jpg"
published: true
author: "Your Name"
---

# Functional Programming Concepts in Rust

Rust embraces many functional programming concepts while maintaining memory safety and performance.

## Immutability by Default

```rust
let x = 5; // immutable by default
let mut y = 10; // explicitly mutable

// This won't compile:
// x = 6;

// This will work:
y = 15;
```


## Higher-Order Functions

::code-demo{language="rust"}
fn main() {
let numbers = vec!;
let doubled: Vec<i32> = numbers
    .iter()
    .map(|x| x * 2)
    .collect();

let evens: Vec<&i32> = numbers
    .iter()
    .filter(|&x| x % 2 == 0)
    .collect();

println!("Doubled: {:?}", doubled);
println!("Evens: {:?}", evens);
}
::

## Pattern Matching

Pattern matching in Rust is powerful and exhaustive:
```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5]; // Example values

    let doubled: Vec<i32> = numbers
        .iter()
        .map(|x| x * 2)
        .collect();

    let evens: Vec<&i32> = numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .collect();

    println!("Doubled: {:?}", doubled);
    println!("Evens: {:?}", evens);
}
```

::note{type="tip"}
Rust's ownership system naturally encourages functional programming patterns!
::

