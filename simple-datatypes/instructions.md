# Simple Data Types

## Strings
The first simple datatype we will discuss are strings. In JavaScript, strings are used to represent text, and they are one of the common datatypes used. Something important to remember about strings and numbers is that they are immutable, meaning that once you create a string you cannot mutate itss value in place. You can create a copy of that value that is different, but you cannot mutate it. Look at this example...

```javascript
var firstName = 'alex';

firstName.toUpperCase();

console.log(firstName); // 'alex'

var lastName = 'aaro';

lastName + 'n';

console.log(lastName); // 'aaro'
```

The key thing to observe here is that in both cases, simply executing the code on the string does not change the original string. If you want to hold on to these changes, you either have to reassign the original string or create a new variable to hold the new value.

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

It's also important to remember that all of these rules apply with functions and parameters. For example, imagine we have a function called `addExclamation` that takes in a `string`. This function should return that string with an exclamation added to it. You could accomplish using all of the options above.

You could create a new variable to store the value:

```javascript
functon addExclamation(string){
  var exclamationAdded = string + "!";
  return exclamationadded;
}
```

You could simply reassign the existing parameter:

```javascript
functon addExclamation(string){
  string += "!";
  return string;
}
```

Of course, because you are simply returning the string with an "!" added, you could also do this:

```javascript
functon addExclamation(string){
  return string + "!";
}
```
### Important String Methods

Some methods you need to be comfortable with are `toUpperCase()`,
`toLowerCase()`, `split()`, `join()`. 

#### .split() and .join()

Split is a string method that allows you to "split" a string into an array, which can be useful for a variety of reasons. For example, imagine we have a variable of `fullName` which is someone's first and last name. What if we want to only access the first name part of that string, perhaps to use it in a greeting string. For example...

```javascript
var fullName = 'Alex Aaron';

var greeting = "Hello, " + <?>;

console.log(greeting); // => Hello, Alex
```

To do, this we can use the split method to "split" `fullName` into an array that looks like this: `['Alex', 'Aaron']`. We can do that with this code:

```javascript
var fullName = 'Alex Aaron';

var nameArray = fullName.split(" ");

var greeting = "Hello, " + nameArray[0];

console.log(greeting); // => Hello, Alex
```

Notice that in `var nameArray = fullName.split(" ")` we are passing `" "` as an argument to the split method. In essence, we are telling the computer, "split the string at the spaces", which gives us an array of `['Alex', 'Aaron']`. 

The split and join methods are useful methods to learn together because the join method can take an array of strings and join it back into a single string.