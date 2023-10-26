export default function ybug() {
  window.ybug_settings = { id: '3hmw4syhxj' }
  var ybug = document.createElement('script')
  ybug.type = 'text/javascript'
  ybug.async = true
  ybug.src = 'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ybug, s)
}
