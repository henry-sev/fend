function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]

    if(inputText.length > 6) {
        return true;
    }
    return false;
}

export { checkForName }
