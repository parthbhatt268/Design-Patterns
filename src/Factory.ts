interface Truck {
    drive(): void; // Declares a method that every truck must have
  }
  
  // Concrete Products
  class PickupTruck implements Truck {
    drive(): void {
      console.log('Driving a pickup truck!');
    }
  }
  
  class HeavyDutyTruck implements Truck {
    drive(): void {
      console.log('Driving a heavy-duty truck!');
    }
  }
  
  // Factory
  class TruckFactory {
    static getTruck(type: string): Truck {
      if (type === 'pickup') {
        return new PickupTruck();
      } else if (type === 'heavy') {
        return new HeavyDutyTruck();
      } else {
        throw new Error('Invalid truck type');
      }
    }
  }
  
  // Example usage
  const truck1 = TruckFactory.getTruck('pickup');
  truck1.drive(); // Output: Driving a pickup truck!
  
  const truck2 = TruckFactory.getTruck('heavy');
  truck2.drive(); // Output: Driving a heavy-duty truck!
  