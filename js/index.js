/*
    <a href="#" class="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover opacity-50 group-hover:opacity-100">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
        Earthen Bottle
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
        $48
        </p>
    </a>
*/

//const helper = require('./helper');

//import { helper } from './helper.js';
/*
const a = document.createElement("a");
const div = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const p = document.createElement("p");

a.href = '#';
a.className = 'hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200';
div.className = 'w-full aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-5';
//INSERT IMAGE FROM SERVER
img.src = 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';
img.className = 'w-full h-full object-center object-cover opacity-50 group-hover:opacity-100';
h3.className = 'mt-4 text-sm text-gray-700';
//TEXT FROM SERVER
h3.appendChild(document.createTextNode('Danke merkel'));
p.className = 'mt-1 text-lg font-medium text-gray-900';
//PRICE FROM SERVER
p.appendChild(document.createTextNode('34€'));
a.appendChild(div);
div.appendChild(img);
a.appendChild(h3);
a.appendChild(p);
*/

const productButton = function(imgUrl, name, price) {

    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    a.href = '#';
    a.className = 'hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200';
    div.className = 'w-full aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-5';
    //INSERT IMAGE FROM SERVER
    img.src = imgUrl;
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


let imgurl = 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';
const btn = productButton(imgurl, "{product-name}", "{product-price}");

const element = document.getElementById("itemHolder");
for (let i = 0; i < 50; i++) {
    const dupe = btn.cloneNode(true);
    element.appendChild(dupe);  
}

