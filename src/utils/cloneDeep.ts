const cloneDeep: any = (obj: any) => {
  const type: string = Object.prototype.toString.call(obj); //通过原型对象获取对象类型
  let newObj: any;
  if (type === "[object Array]") {
    //数组
    newObj = [];
    if (obj.length > 0) {
      for (let i = 0; i < obj.length; i++) {
        newObj.push(cloneDeep(obj[i]));
      }
    }
  } else if (type === "[object Object]") {
    //对象
    newObj = {};
    for (const i in obj) {
      newObj[i] = cloneDeep(obj[i]);
    }
  } else {
    //基本类型和方法可以直接赋值
    newObj = obj;
  }
  return newObj;
};

export { cloneDeep };
export default cloneDeep;
