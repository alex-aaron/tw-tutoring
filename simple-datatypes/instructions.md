### Simple Data Types are Immutable

The first simple datatype we will discuss are strings. In JavaScript, strings are used to represent text, and they are one of the common datatypes used. Something important to remember strings and numbers is that they are immutable, meaning that once you create a string you cannot mutate it's value in place. You can a copy of that value that is different, but you cannot mutate it. Look at this example...

```javascript
var firstName = 'alex';

firstName.toUpperCase();

console.log(firstName); // 'alex'

var lastName = 'aaro';

lastName + 'n';

console.log(lastName); // 'aaro'
```

The key thing to observe her is that in both cases, simply executing the code on the string does not change the original string. If you want to hold on to these changes, you either have to reassign the original string or create a new variable to hold the new value.

```javascript
var firstName = 'alex'
firstName = firstName.toUpperCase();

var anotherFirstName = 'Steph';
var uppercasedName = anotherFirstName;toUpperCase();

var lastName = 'aaro';
lastName = lastName + 'n';

var anotherLastName = 'Coope';
var addR = anotherLastName + 'r';

console.log(firstName); // 'ALEX'
console.log(anotherFirstName); // 'STEPH
console.log(lastName); // 'Aaron'
console.log(addR); // 'Cooper'
```

In addition, to these examples you can the `+= operator` to reassign a string.

```javascript

var x = 'Hello';

x += ' World';

console.log(x); // 'Hello World'
```

When viewing the example above, you have to understand the syntax. When you code `x += ' World'` it is the same thing as coding `x = x += ' World'`. Any time you this += operator syntax, think of it as "I'm reassigning <variable> to its current value plus something else."