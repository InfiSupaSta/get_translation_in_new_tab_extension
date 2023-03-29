const googleTranslateUrl = new URL('https://translate.google.com/?')
const googleSearchUrl = new URL('https://google.com/search?')

function formUrlForSearch(text) {

    /*
    Forms URL with highlighted text as query param
    for searching.
    */

    return googleSearchUrl + new URLSearchParams(
        {
            'q': text
        }
    )

}

function formUrlForTranslate(text, from = 'en', to = 'ru') {

    /*
    Forms URL with highlighted text as query param
    for translating. By default, translation from
    En to Ru language.
     */

    return googleTranslateUrl + new URLSearchParams(
        {
            'sl': from,
            'tl': to,
            'op': 'translate',
            'text': text
        }
    )

}

function getHighlightedText() {

    /*
    Returns selected highlighted text if it exists.
     */

    if (window.getSelection().toString().length) {
        return window.getSelection().toString()
    }

}

function openInNewTab(url) {
    window.open(url)
}

window.onkeydown = (event) => {

    /*
    Translation tab will be opened in new tab if some
    text highlighted and ctrl+alt are pressed in
    the same time, search tab in case of shift+alt.
     */

    const highlightedText = getHighlightedText()

    if (highlightedText && event.altKey && event.shiftKey) {
        const url = formUrlForSearch(highlightedText)
        openInNewTab(url)
    }

    if (highlightedText && event.ctrlKey && event.altKey ) {
        const url = formUrlForTranslate(highlightedText)
        openInNewTab(url)
    }

}