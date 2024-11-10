# Static Methods vs. Instance Methods

### Static Methods
- **Called on the class itself**: `ClassName.methodName()`.
- **Cannot be called on an instance**.
- Example:

  ```typescript
  class MathUtils {
    static add(a: number, b: number): number {
      return a + b;
    }
  }

  MathUtils.add(5, 3); // ✅ Works
  const sum = new MathUtils();
  sum.add(5, 3); // ❌ Error: add() is not available on instances
  ```

### Instance Methods
- **Called on an instance of the class**: `instance.methodName()`.
- **Cannot be called on the class itself**.
- **No need to use the `static` keyword** in front of the method.
- Example:

  ```typescript
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    greet(): void {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const person1 = new Person('Alice');
  person1.greet(); // ✅ Works, Output: Hello, my name is Alice
  Person.greet(); // ❌ Error: greet() is not available on the class
  ```

### Summary
- **Static Methods**: Called on the class itself (`ClassName.methodName()`).
- **Instance Methods**: Called on an instance (`instance.methodName()`). No need to use `static` for instance methods.



---

# Interface Analogy: Index in a Book

- An **interface** in TypeScript is like an **index in a book**.
  - The **index lists** all the topics covered, but does not provide the actual content.
  - Similarly, an **interface lists** all the methods and properties a class must implement, without providing their implementation.

- When a class **implements an interface**, it’s like **writing the actual content** for the topics listed in the index.

- This helps maintain **consistency** and provides a clear structure, just like how an index provides structure for a book.
---


