// Create a StopWatch class that has a start() method and a stop() method and a reset() method.
// The start() method should start the stopwatch.
// The stop() method should stop the stopwatch.
// The reset() method should reset the stopwatch.

// The stopwatch should have a property that specifies the duration in seconds that the stopwatch has been running.

// The start() can be called only one time unless the stopwatch is stopped.
// The stopwatch can be stopped only one time.
// The reset() method can be called only if rh stopwatch has a value different than 0.

function Stopwatch() {
  let startTime=0, endTime, running, duration = 0;

  this.start = function() {
    if (running) {
      throw new Error("Stopwatch has already been started");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error("Stopwatch has not been started");
    }
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration = seconds;

  }

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;        
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

const sw = new Stopwatch();

