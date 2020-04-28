function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
People.prototype.singing = function () {
    console.log(`啦啦啦啦啦我是卖报的${this.name}`);
}

module.exports = People;