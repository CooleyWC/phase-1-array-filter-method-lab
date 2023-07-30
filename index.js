// Code your solution here


/* 

1. normally the filter function is in the format of 

const something = array.filter(callbackfunction)

or 

function filter(collection, cb) {
    -for of statement-
    -conditional statement-
    -return-
}

then the callback is invoked with the various things you're looking for

so how do you set this up so the filter function is applied to the required 
"findMatching" function that only takes one argument?

2. What does it mean to "have a string as arguments"

2. how do you make sure the function is case insensitive?
*/

function findMatching(drivers, name){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    }
    )
}


/* here is my initial attempt at the second function
function fuzzyMatch(drivers, name){
    return drivers.filter(function(letters){
        if(letters[0,1] === name[0,1]){
            return driver.name
        }
    })
}
- I believe the problem is with how I'm attempting to indicate the 
first two letters of each name with the brackets and indeces
*/

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driver){
      return driver[0] === name[0] && driver[1] === name[1];
    });
  }

/* in the above correction - what I attempted to do with the
if statement, could be done using && and checking each index individually
*/

/* 
my initial attempt at function 3
the problem is with how I'm attempting to access the object properties
function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver[name] === drivers[name];
    })
}
*/

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name;
    })
}

