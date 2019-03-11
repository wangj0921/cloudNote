//判断是不是null
const isNull = (value) => {
    if (value === null || value === undefined){
        return true
    }
    return false
}

//判断变量是不是null和空字符串
const isEmpty = (value) => {
    if (isNull(value)) return true
    if (value === '') return true
    return false
}

//判断对象的数据类型 Null Undefined Obeject Array
const isClass = (value) => {
    if (value === null) return 'Null'
    if (value === undefined) return 'Undefined'
    return Object.prototype.toString.call(value).slice(8,-1)
}

//判断是否是日期
const isDate = (date) => {
    if (isNull(date)) return false
    return date instanceof Date
}

//深度拷贝一个对象
const deepClone = (obj) => {
    let result;
    const oClass = isClass(obj);
    if (oClass === 'Object'){
        result = {};
    }else if(oClass === 'Array'){
        result = []
    }else{
        return obj
    }
    for (const key in obj){
        const copy = obj[key];
        if (isClass(copy) === 'Object') {
            result[key] = deepClone(copy);// 递归调用
        }else if(isClass(copy) === 'Array'){
            result[key] = deepClone(copy);
        }else {
            result[key] = obj[key]
        }
    }
    return result

}

