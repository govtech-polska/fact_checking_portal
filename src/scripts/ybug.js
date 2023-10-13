export default function ybug() {
  window.ybug_settings = { id: '3hmw4syhxj' }
  var ybug = document.createElement('script')
  ybug.type = 'text/javascript'
  ybug.async = true
  ybug.src = 'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ybug, s)
}
export default function gtag() {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-9FWBX7CQFY')
}
