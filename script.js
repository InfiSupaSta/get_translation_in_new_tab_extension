const googleTranslateUrl = new URL('https://translate.google.com/?')

function openTranslationInNewTab(text, from = 'en', to = 'ru') {

    /*
    Opens translate tab with highlighted text for
    getting translation. By default, returns
    translation from En to Ru language.
     */

    const urlWithTextAsQueryParam = googleTranslateUrl + new URLSearchParams(
        {
            'sl': from,
            'tl': to,
            'op': 'translate',
            'text': text
        }
    )

    window.open(urlWithTextAsQueryParam)
}

function getHighlightedText() {

    /*
    Returns selected highlighted text if it exists.
     */

    if (window.getSelection().toString().length) {
        return window.getSelection().toString()
    }
}

window.onkeydown = (event) => {

    /*
    Translation will be opened in new tab if some
    text highlighted and ctrl+alt are pressed in
    the same time.
     */

    const highlightedText = getHighlightedText()

    if (event.ctrlKey && event.altKey && highlightedText) {
        openTranslationInNewTab(highlightedText)
    }
}