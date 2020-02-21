document.querySelector('.sort-size-lower').onclick = function() {
    sortAsc('data-size');
};
// document.querySelector('.sort-size-bigger').onclick = function() {
//     sortDesc('data-size');
// };
// document.querySelector('.sort-price-lower').onclick = function() {
//     sortAsc('data-price');
// };
// document.querySelector('.sort-price-bigger').onclick = function() {
//     sortDesc('data-price');
// };

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function sortAsc(sortType) {
    let catalogueItems = document.querySelector('.section-catalogue-items');
    for (let i=0; i < catalogueItems.children.length; i++) {
        for (let j = i; j < catalogueItems.children.length; j++) {
            if (+catalogueItems.children[i].getAttribute(sortType) > +catalogueItems.children[j].getAttribute(sortType)) {
                replacedNode = catalogueItems.replaceChild(catalogueItems.children[j], catalogueItems.children[i]);
                insertAfter(replacedNode, catalogueItems.children[i]);
            }
        }
    }
}

function sortDesc(sortType) {
    let catalogueItems = document.querySelector('.section-catalogue-items');
    for (let i=0; i < catalogueItems.children.length; i++) {
        for (let j = i; j < catalogueItems.children.length; j++) {
            if (+catalogueItems.children[i].getAttribute(sortType) < +catalogueItems.children[j].getAttribute(sortType)) {
                replacedNode = catalogueItems.replaceChild(catalogueItems.children[j], catalogueItems.children[i]);
                insertAfter(replacedNode, catalogueItems.children[i]);
            }
        }
    }
}


let expandBtn = document.querySelector('.section-catalogue-header-buttons__sort--expand');

expandBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    expandBtn.classList.toggle('section-catalogue-header-buttons__sort--expanded');
});