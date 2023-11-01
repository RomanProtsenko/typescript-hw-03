class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean;
  private key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false; // Початково двері закриті
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log('The door is closed. Please open the door first.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('Invalid key. The door remains closed.');
    }
  }
}

// Створення об'єктів
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Відкриття дверей та спроба зайти в будинок
house.openDoor(person.getKey());
house.comeIn(person);
