/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return '';
  else {
    const date = new Date(time);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
}

export function judgeRoute(city){
  let title = ""
  switch (city){
    case "chifeng":
      title = "赤峰"
      break
    case "huhehaote":
      title = "呼和浩特"
      break
    case "tongliao":
      title = "通辽"
      break
    case "hulunbeier":
      title = "呼伦贝尔"
      break
    case "wulanchabu":
      title = "乌兰察布"
      break
    case "xinganmeng":
      title = "兴安盟"
      break
    case "eerduosi":
      title = "鄂尔多斯"
      break
    case "xilinguole":
      title = "锡林郭勒"
      break
    case "baotou":
      title = "包头"
      break
    case "bayannaoer":
      title = "巴彦淖尔"
      break
    case "wuhai":
      title = "乌海"
      break
    case "alashan":
      title = "阿拉善"
      break

    default:
      title = "内蒙古"
  }
  return title;
}

// 把获取到的数据通过调用JSON.parse()方法转换成对象
export const isJSON = s => {
  try {
    JSON.parse(s)
  } catch (e) {
    return false
  }
  return true
}