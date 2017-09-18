// 根据项目类型和后端（php/java）获取相应后端域名
var urls = {
  'web': {
    'php': {
      'test': '//web.api.chaoke.com',
      'pre': '//web-api.esn.ren',
      'prod': '//web-api.yonyoucloud.com'
    },
    'java': {
      'test': '//123.103.9.195:6680',
      'pre': '//123.103.9.195:6680',
      'prod': '//ezone.yonyoucloud.com'
    }
  },
  'h5': {
    'php': {
      'test': '//h5.api.chaoke.com:6061',
      'pre': '//h5-api.esn.ren',
      'prod': '//h5-api.yonyoucloud.com'
    },
    'java': {
      'test': '//123.103.9.195:6680',
      'pre': '//123.103.9.195:6680',
      'prod': '//ezone.yonyoucloud.com'
    }
  }
}
module.exports = function getBaseurl (projType, lang, env) {
  return urls[projType][lang][env]
}
