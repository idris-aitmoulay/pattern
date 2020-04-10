interface Strategy {
  execute(a: number, b: number): number
}

class ConcretStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class ConcretStrategySubscrat implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class ConcretStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class Context {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}


const context = new Context();
const strategy = new ConcretStrategyAdd();
context.setStrategy(strategy);
const value = context.executeStrategy(1,2);
console.log(value);
