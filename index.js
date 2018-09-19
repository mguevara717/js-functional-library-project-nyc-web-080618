// 1. Write pure functions
// 2. Avoid sharing or mutating state
// 3. Avoid side effects

fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //const testArr = [1, 2, 3, 4]
    //Iterates over a collection of elements, passing each element in turn to a callback function.
    //Each invocation of callback is called with three arguments: (element, index, collection).
    //If collection is a JavaScript object, callback's arguments will be (value, key, collection).
    //Returns the original collection for chaining.

    each: function(collection, callback) {

      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      }
      else {
        for (const key in collection) {
            callback(collection[key], key, collection)
      } //end of for loop
    }
      return collection;
  },

    map: function(collection, callback) {
      let array_list = [];

      if(Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        array_list.push(callback(collection[i], i, collection))
      }
        return array_list;
    }
     else {
       let obj = Object.assign({}, collection)
       let arr = [];

         for (let key in collection) {
           obj[key] = callback(collection[key], key, collection)
             arr.push(obj[key])
          }

          return arr;
     }

},

    reduce: function(collection, callback, acc) { //acc = accumulator
      acc = acc || 0; //check first if acc value exists (passes into the function)

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection) //that makes reduce work

      }
      return acc;
    },

    find: function(collection, callback) {

      for (var i = 0; i < collection.length; i++) {
          if (callback(collection[i])) {
            return collection[i]
          }
      }//end of for loop

    },

    filter: function(collection, callback) { //i > 10
      let list = [];

        for (var i = 0; i < collection.length; i++) {
          if (callback(collection[i]))  {
            list.push(collection[i])
          }
        }
          return list;
    },

    size: function(collection) {
        if(Array.isArray(collection)) {
          let array_counter = 0;
        for (var i = 0; i < collection.length; i++) {
          array_counter += 1
        }
        return array_counter;
      }
      else {
        let object_counter = 0
        for (let key in collection) {
           object_counter += 1
          }
        return object_counter;
      }
    },

    first: function(collection, num) {
        for (var i = 0; i < collection.length; i++) {
          if (!num) {
            return collection[0]
          }

          else {
            return collection.slice(0,num)
          }
        }

    },

    last: function(collection, num) {
      for (var i = 0; i < collection.length; i++) {
        if (!num) {
          return collection[collection.length - 1] //return the last element
        }

        else {
          return collection.slice(collection.length - num)
        }
      }

    },

    compact: function(collection) {
        let list = [];

        for (var i = 0; i < collection.length; i++) {
          if (collection[i]) {
            list.push(collection[i])
          }
        } //end of for loop
        return list;
    },

    sortBy: function(collection, callback) {
      const list = collection.slice(); //make copy of the original array

      return list.sort(function(a , b) {
        return (callback(a) - callback(b))
      })

  }, //end of sortBY

    flatten: function(collection, shallow) {
      let list = [];

      if (shallow) {
        for (let i = 0; i < collection.length; i++) {
          if (Array.isArray(collection[i])) {
            for (let j = 0; j < collection[i].length; j++) {
              list.push(collection[i][j])
            }
          }
          else {
            list.push(collection[i]) //push single elements
          }
        }//end of loop
      } //end of if statement

          else  {
              for (var i = 0; i < collection.length; i++) {
                if (Array.isArray(collection[i])) {
                  list =list.concat(this.flatten(collection[i]))
                }
                else {
                  list.push(collection[i])
              }
            }
          }
        return list;
    }, //end of flatten function

    uniq: function(collection, isSorted, callback) {
        let list = [];

        for (var i = 0; i < collection.length; i++) {
          if (callback) {
              if (!list.map(x => callback(x)).includes(callback(collection[i]))) {
                list.push(collection[i])
          }
        }
          else {
            if (list.indexOf(collection[i]) < 0) {
              list.push(collection[i])
            }
          }
        } //end of loop
        return list;
    },

    keys: function(object) {
      let list = [];
      for (let key in object) {
        list.push(key)
      }

      return list;
    },

    values: function(object) {
      let list = [];

      for (let key in object) {
        list.push(object[key]) //accessing the objects value
      }

      return list;

    },

    functions: function(object) {
      let list = [];

      for (let key in object) {
        if (typeof(object[key]) === "function") {
          list.push(key)
        }
      }
          return list;
    },

    giveMeMore: function() {
      return true;
    }

  }// end of first return
})()

fi.libraryMethod()
