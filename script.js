
const Utils = (() => {

    const reverseString = str => {
        str.split('').reverse().join('');
    }

    return {
        reverseStr (str) {
            return reverseString(str);
        }
    }

})();

const App = (() => {
        
    const htmlElements = {
        inputValue: document.querySelector('#input-value'), 
        spanValue: document.querySelector('#span-value'),
        form: document.querySelector('form')
    }

    const handlers = {
        onFormSubmit(e) {
            e.preventDefault()
            const inputValue = htmlElements.inputValue.value;
            htmlElements.spanValue.textContent = inputValue;
            const reverStr = reverseStr(inputValue);
            return htmlElements.spanValue.textContent = reverStr;
        }
    }

    const bindEvent = () => {
        htmlElements.form.addEventListener('submit', handlers.onFormSubmit);
    }

    return {
        init() {
            bindEvent();
        }
    }

})(Utils);

App.init();