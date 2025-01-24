console.log('before_dyImport');
import('./moduleC.js').then(module => {
  /**
   * default
   * getUUID
   */
  console.log('_module_', module)
  const {
    default: helloImport,
    getUUID
  } = module
  helloImport()
  getUUID()
}, (error) => {
  console.error(error)
})
console.log('after_dyImport');