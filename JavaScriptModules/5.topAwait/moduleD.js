const jquery = fetch('https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js')
  .then(module => {
    console.log('_module_', module)
    return module.text()
  })

// 请求资源可以使用 异步await方式实现
export default await jquery;