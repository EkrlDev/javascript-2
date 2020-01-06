const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== "string") { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!(this.entries.hasOwnProperty(key))) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
    this.currentKey = key;
    // write me!
  },
  get currentEntry() {
    if (!(this.entries.hasOwnProperty(this.currentKey))) {
      //if the current entry has been removed, return the key with it's error
      return new ReferenceError(`findByKey: no property "${this.currentEntry}" in this.entries`);
    } else {
      return { [this.currentKey]: this.entries[this.currentKey] };
    }
   
    
    // write me!
  },
  likedKeys: [],
  get likedEntries() {
    let newObj = {};
    for (let i=0; i < this.likedKeys.length; i++) {
      if (!(this.hasKey(this.entries, this.likedKeys[i]))) {
        return new ReferenceError(`likedKeys: key "${this.likedKeys[i]}" does not exist`)
      } else {
        newObj[this.likedKeys[i]] = this.entries[this.likedKeys[i]];
      }
    }
    return newObj;

    // write me!
  },
  likeEntry: function (key) {
    if (typeof key !== "string") { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (!(this.entries.hasOwnProperty(key))) {
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (this.likedKeys.includes(key)) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }
    this.likedKeys.push(key);
    return true;

    // write me!
  },
  unlikeEntry: function (key) {
    if (typeof key !== "string") { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (!(this.likedKeys.includes(key))) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }
    for (let i=0; i < this.likedKeys.length; i++) {
      if (this.likedKeys[i] === key) {
        this.likedKeys.splice(i, 1);
      }
    }
    return true;
    // write me!
  },
  entries: {},
  isPrimitive: function (value) {
    if (value !== Object(value)) {
      return true;
    } else {
      return false;
    }
      
    // write me!
  },
  hasKey: function (obj, key) {
    return obj.hasOwnProperty(key);

  },
  hasValue: function (obj, value) {
    if (Object.values(obj).includes(value)) {
      return true;
    }
    return false;// write me!
  },
  addEntry: function (key, value) {
    if(typeof key !== "string"){
      return new TypeError("addEntry: key should be a string")
    }
    if (value === Object(value)) {
      return new TypeError("addEntry: value should be a primitive");
    }
    if (this.hasKey(this.entries, key)) {
      return new Error (`addEntry: key "${key}" already exists`);
      
    }
    this.entries[key] = value;
    return true;
    // write me!
  },
  removeEntry: function (key) {
    if(typeof key !== "string"){
      return new TypeError("removeEntry: key should be a string")
    }
    if (!this.hasKey(this.entries, key)) {
      return new Error (`removeEntry: no property "${key}" in this.entries`);
      
    }
    delete this.entries[key];
    return true;// write me!
  },
  updateEntry: function (key, value) {
    if(typeof key !== "string"){
      return new TypeError("updateEntry: key should be a string")
    }
    if (value === Object(value)) {
      return new TypeError("updateEntry: value should be a primitive");
    }
    if (!this.hasKey(this.entries, key)) {
      return new ReferenceError (`updateEntry: no property "${key}" in this.entries`); 
    }
    
    this.entries[key] = value;
    return true;// write me!// write me!
  },
  readAll: function () {
    let newreadAllObj = {...this.entries};
    return newreadAllObj;// write me!
  },
  findByKey: function (key) {
    if (typeof key !== "string") {
      return new TypeError("findByKey: key should be a string");
    }
    if (!this.entries.hasOwnProperty(key)) {
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    const newObj = {};// write me!
    newObj[key] = this.entries[key];
    return newObj;
  },
  findByValue: function (value) {
    if (value === Object(value)) {
      return TypeError("findByValue: value should be a primitive");
    }
    if(!this.hasValue(this.entries, value)) {
      return new ReferenceError (`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    let newObj = {};
    let keys =  Object.keys(this.entries).filter(keyValue => this.entries[keyValue] === value);
    for (let i = 0; i < keys.length; i++) {
      if (this.entries[keys[i]] === value) {
        newObj[keys[i]] = value;
      }
    }
    return newObj;
    // write me!
  },
}

