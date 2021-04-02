  class User {
      name: string
      email: string
      age: number
      constructor(name: string ,email: string ,age: number) {
          this.name = name
          this.email = email
          this.age = age

          console.log('User Created: '+ this.name);
      }
  }

  let kachi = new User('John Doe', 'fitx@email.com', 34)


  ////////////////////  mosh

  class Point {

    x: number;
    y: number;

      constructor(x?: number, y?: number) {
          this.x = x;
          this.y = y;
      }

      draw() {
          console.log('X: ' + this.x + ', Y: ' + this.y);
      }
  }

  let point = new Point(1, 2)
//   point.x = 1;
//   point.x = 2;
  point.draw();


//   we cnnot have mutiple constructor in js and ts  so we add a question mark ?

// git branch 
//  * main
//  git branch littlefeature

// git branch
// littlefeature
// *main

//  to go to the littlefeature branch to this =>
// git chechout littlefeature
// Switch to branch littlefeature