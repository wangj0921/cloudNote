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

// 获取窗口可视范围的高度
 const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ?
        document.body.clientHeight :
        document.documentElement.clientHeight;
    } else {
      clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ?
        document.body.clientHeight :
        document.documentElement.clientHeight;
    }
    return clientHeight;
  };

  // 获取窗口可视范围的宽度
   const getClientWidth = () => {
    let clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
      clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ?
        document.body.clientWidth :
        document.documentElement.clientWidth;
    } else {
      clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ?
        document.body.clientWidth :
        document.documentElement.clientWidth;
    }
    return clientWidth;
  };
  
  // 获取页面滚动高度
   const getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  };
  
  //
   const getScrollHeight = () => Math.max(document.body.scrollHeight,
    document.documentElement.scrollHeight);
  
   const getDocumentToBottomHeight = () => {
    // 客户端高度
    const height = getClientHeight();
    // 页面滚动高度
    const theight = getScrollTop();
  
    const rheight = getScrollHeight();
    return rheight - theight - height;
  };

export {
    isNull,
    isEmpty,
    isClass,
    isDate,
    deepClone,
    getClientHeight,
    getClientWidth,
    getScrollTop,
    getScrollHeight,
    getDocumentToBottomHeight

}