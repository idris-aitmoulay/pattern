function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
  },
  unsubscribe: function(fnToRemove) {
    this.observers = this.observers.filter( fn => fn != fnToRemove);
  },
  fire: function() {
    this.observers.forEach(fn => {
      fn.call();
    })
  }
};

const subject = new Subject()

function Observer1() {
  console.log('observer1')
}

function Observer2() {
  console.log('observer2')
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire();
subject.unsubscribe(Observer1);
subject.fire();
