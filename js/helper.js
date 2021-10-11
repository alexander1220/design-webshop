const productButton = function(img, name, price) {

    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    a.href = '#';
    a.className = 'hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200';
    div.className = 'w-full aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-5';
    //INSERT IMAGE FROM SERVER
    img.src = img;
    img.className = 'w-full h-full object-center object-cover opacity-50 group-hover:opacity-100';
    h3.className = 'mt-4 text-sm text-gray-700';
    //TEXT FROM SERVER
    h3.appendChild(document.createTextNode(name));
    p.className = 'mt-1 text-lg font-medium text-gray-900';
    //PRICE FROM SERVER
    p.appendChild(document.createTextNode(price));
    a.appendChild(div);
    div.appendChild(img);
    a.appendChild(h3);
    a.appendChild(p);

    return a;

};

module.exports = {
    productButton : productButton
}