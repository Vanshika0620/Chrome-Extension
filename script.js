
//we create a recursive function that looks through all the content in the page and removes the inappropriate words

replaceText(document.body)
function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/idiot/gi)|| element.textContent.match(/jerk/gi) || element.textContent.match(/shit/gi) || element.textContent.match(/rape/gi) || element.textContent.match(/dumb/gi) || element.textContent.match(/assault/gi)){
        element.parentElement.remove()
      }
    }
}