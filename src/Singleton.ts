// Singleton.ts
export class Singleton {
    private static instance: Singleton;
  
    // Private constructor to prevent direct instantiation
    private constructor() {
      console.log('Singleton instance created.');
    }
  
    // Static method to provide global access to the single instance
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    greet(): void {
      console.log('Hello from the Singleton instance!');
    }
  }
  
  // Example usage directly in Singleton.ts
  const singleton1 = Singleton.getInstance();
  singleton1.greet(); // Output: Hello from the Singleton instance!
  
  const singleton2 = Singleton.getInstance();
  console.log(singleton1 === singleton2); // Output: true (only one instance is created)
  