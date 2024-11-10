class Car {
    public engine: string = '';
    public wheels: number = 0;
    public color: string = '';
  
    showDetails(): void {
      console.log(`Car with engine: ${this.engine}, wheels: ${this.wheels}, color: ${this.color}`);
    }
  }
  
  // Builder interface
  interface CarBuilder {
    setEngine(engine: string): this;
    setWheels(wheels: number): this;
    setColor(color: string): this;
    build(): Car;
  }
  
  // Concrete Builder
  class ConcreteCarBuilder implements CarBuilder {
    private car: Car;
  
    constructor() {
      this.car = new Car();
    }
  
    setEngine(engine: string): this {
      this.car.engine = engine;
      return this;
    }
  
    setWheels(wheels: number): this {
      this.car.wheels = wheels;
      return this;
    }
  
    setColor(color: string): this {
      this.car.color = color;
      return this;
    }
  
    build(): Car {
      return this.car;
    }
  }
  
  // Example usage
  const builder = new ConcreteCarBuilder();
  const car = builder.setEngine('V8').setWheels(4).setColor('Red').build();
  car.showDetails(); // Output: Car with engine: V8, wheels: 4, color: Red
  