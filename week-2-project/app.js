/*
  many of the exercises have focused on avoiding side effects
  this project is the opposite, you want to modify object.entries
  otherwise how can it save anything!

  You can even think of this week's object as a mini data base
  - there's a store of data in object.entries
  - and users can access & modify that data
*/




const object = {
  entries: {},
  isPrimitive: function (value) {
    return (value !== Object(value));
    // write me!
  },
  hasKey: function (obj, key) {
    let keyArr = Object.keys(obj);
    return keyArr.length >=0 ? (keyArr.includes(key) ? true : false ) : false;// write me!
  },
  hasValue: function (obj, value) {
    /*let valArr = Object.values(obj);
    if (valArr.includes(value)) {
      return true
    }
     */ 
    let valuesArray = Object.values(obj);
    return valuesArray.includes(value);
    
    // write me!
  },
  addEntry: function (key, value) {
    if (typeof key !== "string") {
       // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (value === Object(value)) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new Error(`addEntry: key "${key}" already exists`);
    }

    this.entries[key] = value;
    return true;// write me!
  },
  removeEntry: function (key) {
    if (typeof key !== "string") { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!(this.hasKey(this.entries, key))) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }

    delete this.entries[key]
    return true
    // write me!
  },
  updateEntry: function (key, value) {
    if (typeof key !== "string") { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (value === Object(value)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!(this.hasKey(this.entries, key))) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }

    this.entries[key] = value;
    return true;// write me!
  },
  readAll: function () {
    let newObj = Object.assign({}, this.entries)
    let newArr = Object.keys(this.entries);
    if (newArr.length !== 0) {
      return newObj;
    } else {
      return false;
    }

    // write me!
  },
  findByKey: function (key) {
    if (typeof key !== "string") { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!(this.hasKey(this.entries, key))) { // write me! (using this.hasKey)
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }

    let newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
  },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    let newObj = {};
    if (this.hasValue(this.entries, value)) {
      let keyArr = Object.keys(this.entries);
      for (let i=0; i<keyArr.length; i++) {
        if (this.entries[keyArr[i]] === value) {
          newObj[keyArr[i]] = value;
        }
      }
      return newObj;
    } else {
      return newObj;
    } 
    // write me! (this one is a bit trickier)
  },
}
