const newElement = (elementClass, elementContent) => {
    try {
        document.getElementsByClassName(elementClass)[0].insertAdjacentHTML('afterbegin', elementContent);
    } catch(e) {
        console.error(e);
        return e;
    }
}

export default newElement;