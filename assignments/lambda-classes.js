// CODE here for your Lambda Classes

// PERSON CLASS 
// First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// LAMBDA CLASSES

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js EXAMPLE
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

class Person {
    constructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
      this.gender = props.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }

// extends is setting the Child's prototype to the Parent's prototype


class Instructor extends Person {
    constructor(props) {
      super(props);
      this.specialty = props.specialty;
      this.favLanguage = props.favLanguage;
      this.catchPhrase = props.catchPhrase;
    }
  
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
  
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }





    
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const  = new student({
   previousBackground:
   className:
   favSubjects:


});
