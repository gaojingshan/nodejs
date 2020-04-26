/* exports.yuan = function () {
  return 1;
};
 */

function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
People.prototype.singing = function () {
  console.log(`我是${this.name},跳舞使我快乐`);
};

module.exports = People;
