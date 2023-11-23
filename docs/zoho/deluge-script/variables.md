---
sidebar_position: 3
title: Variables
description: An Introduction variables
---

A variable is a name for a piece of data in the program. It gives a user-friendly way to modify and reference data that otherwise would be very clunky. Any [data type](/docs/zoho/deluge-script/data-types) can be assigned to a variable.

```js title=".deluge"
iAmAVariable = 1;
iAmAlsoAVariable = 2;

info iAmAVariable + iAmAlsoAVariable; //prints 3
```

# Best Practices
Deluge does not list best practices as they feel that people should do what they prefer. That is fine in theory as long as you are being consistent and don't write code with others.

Here is a short list of things to do to follow best practices:
- Don't abbreviate variable names and make them descriptive
- If a variable is used throughout an entire function, declare it at the top of the file
- If a variable is used in a small portion of a function, declare it right before use
  - Try to declare variables in a way that if you go line by line it is easy to follow the steps of what the function is doing
- Don't use multiple variables for the same thing
  - It runs slower and is much harder to read. **For example:**
```js title=".deluge"
//Dont do this
startDate = "01-Jan-1992";
tempDateVar = startDate.toDate();
expirationDate = tempDateVar.addYear(2);
info expirationDate; //Prints "1-Jan-1992"

//Do this instead
startDate = "01-Jan-1992";
startDate = startDate.toDate(); //overwrites the variable instead of making a new one
expirationDate = startDate.addYear(2);
info expirationDate; //Prints "1-Jan-1992"
```


## Naming Conventions to Choose From

### camelCase
**camelCase** is the most common way to name variables in languages. It is where the first word is lowercase and the rest of the words after have the first letter uppercase. This makes it much more readable. I would suggest using this convention for variables as it's the most common, it will make it easier for you to read other's code.

In other languages, the first letter is lowercase to signify that it is a variable and not a class or type. Deluge does not support this so the distinction is not required. This is the most common way people name variables in Deluge.

```js title=".deluge"
thisIsCamelCase = true;
iPreferThisWay = 2;
```
### PascalCase
**PascalCase** is the same as lowerCamelCase but the first letter is capitalized. Since there are no classes or similar in Deluge, this is not a problem to use as variable names.
```js title=".deluge"
ThisIsPascalCase = true;
IDontUseThis = "at least not in deluge";
```

### Upper_Snake_Case
**Upper_Snake_Case** is where the first letter of each word is uppercase and separate the words with a `_`. I use Upper_Snake_Case when naming functions and schedules in Zoho apps as it makes it more readable for non-tech users in the organization.
```js title=".deluge"
This_Is_Upper_Snake_Case = true;
IDontUseThis = "at least not in deluge";
```

### lower_snake_case
**lower_snake_case** is where you have every letter lowercase and separate the words with a `_`. Personally I don't use the lower_snake_case at all anywhere in Zoho
```js title=".deluge"
ThisIsUpperCamelCase = true;
IDontUseThis = "at least not in deluge";
```

# Reserved Keywords

There are certain keyworks you can not use because they are reserved by Deluge. Some are:
- `true`
- `false`
- `null`
- `void`
- `return`