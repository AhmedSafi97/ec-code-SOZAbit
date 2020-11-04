
function search(nameFrag, targetArray) {
    // chicking array and string
    if (!nameFrag || !targetArray.length) return null;

    return targetArray.filter(obj => obj.name.includes(nameFrag))
}

function addToCartList(id,targetArray,wantedArray) {
    if ( typeof id == "undefined" || !targetArray.length || !Array.isArray(wantedArray) ) return null;
    let rArray = [...wantedArray];
    targetArray.forEach(obj => obj.id==id && rArray.push(obj));
    return rArray;    
}

module.exports = {
    search,
    addToCartList,
    // addToItemList
}
