/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-01-24 10:21:30
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-01-24 10:22:39
 */
function getUUID() {
  return Math.random().toString(16).slice(2);
}

function helloImport() {
  console.log('dyImport_success')
}

export default helloImport
export {
  getUUID
}