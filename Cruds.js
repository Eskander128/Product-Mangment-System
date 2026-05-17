let titleEl = document.getElementById('title')
let priceEl = document.getElementById('price')
let taxesEl = document.getElementById('taxes')
let adsEl = document.getElementById('ads')
let discountEl = document.getElementById('discount')
let totalEl = document.getElementById('total')
let countEl = document.getElementById('count')
let categoryEl = document.getElementById('category')
let createEl = document.getElementById('create')
let searchByTitleEl = document.getElementById('searchByTitle')
let searchByCategoryEl = document.getElementById('searchByCategory')
let searchEl = document.getElementById('search')
let mode = 'createMode';
let tmp;

function totalCalc(){
    if (priceEl.value != ''){
        let result = (+priceEl.value + +taxesEl.value + +adsEl.value) - +discountEl.value;
        totalEl.innerHTML = result; 
        totalEl.style.background = '#040';
    }else{
        totalEl.innerHTML = ''; 
        totalEl.style.background = 'red';
    }
}
let productsData;
if(localStorage.product != null){
    productsData = JSON.parse(localStorage.product)
}else{
    productsData = []
}

createEl.onclick = function(){
    let productDetails = {
        title : titleEl.value.toLowerCase(),
        price : priceEl.value,
        taxes : taxesEl.value,
        ads : adsEl.value,
        discount : discountEl.value,
        total : totalEl.innerHTML,
        count : countEl.value,
        category : categoryEl.value.toLowerCase(),
    }

     if(titleEl.value === '' || priceEl.value === '' || categoryEl.value === ''){
        alert('Please fill in Title, Price, and Category fields!');
        return; 
    }

    if(mode === 'createMode'){
        if (productDetails.count > 1){
            for(let i = 0 ; i < productDetails.count ; i++ ){
                productsData.push(productDetails);
            }
        }else{
                productsData.push(productDetails);
            }
    }else{
        productsData[tmp] = productDetails;
        mood= 'create';
        createEl.innerHTML = 'CreateMode';
        countEl.style.display = 'block'
    }


    localStorage.setItem('product' , JSON.stringify(productsData))

    showData()
    clearData()
}

function clearData(){
    titleEl.value = ''
    priceEl.value = ''
    taxesEl.value = ''
    adsEl.value = ''
    discountEl.value = ''
    totalEl.innerHTML = ''
    countEl.value = ''
    categoryEl.value = ''
}

function showData(){
    totalCalc()
    let table = '';
    for(let i = 0; i < productsData.length; i++){
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${productsData[i].title}</td>
            <td>${productsData[i].price}</td>
            <td>${productsData[i].taxes}</td>
            <td>${productsData[i].ads}</td>
            <td>${productsData[i].discount}</td>
            <td>${productsData[i].total}</td>
            <td>${productsData[i].category}</td>
            <td ><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
    }

    document.getElementById('showTable').innerHTML = table;

    let deleteAllEl = document.getElementById('deleteAll');
    if (productsData.length > 0){
        deleteAllEl.innerHTML = `
        <button onclick='deleteAll()'>Delete All (${productsData.length})</button>`
    }else{
         deleteAllEl.innerHTML = ''
    }
}

showData();

function deleteData(i){
    productsData.splice(i,1);
    localStorage.product = JSON.stringify(productsData)
    showData()
}

function deleteAll(){
    productsData.length = 0;
    localStorage.clear()
    showData()
}

function updateData(i){
    titleEl.value = productsData[i].title;
    priceEl.value = productsData[i].price;
    taxesEl.value = productsData[i].taxes;
    adsEl.value = productsData[i].ads;
    discountEl.value = productsData[i].discount;
    totalCalc()
    countEl.style.display = "none";
    categoryEl.value = productsData[i].category;
    createEl.innerHTML = 'Update';
    mode = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}

let searchMode = 'title';

function getSearchMode(id){
    if(id == 'searchByTitle'){
        searchMode = 'title';
    }else{
        searchMode = 'category';
    }
    searchEl.placeholder = 'Search by '+searchMode;
    searchEl.focus()
    searchEl.value = ''
    showData()
}

function searchData(value) {
    let table = '';
    if(searchMode == 'title'){
        for(let i = 0; i < productsData.length; i++){
            if(productsData[i].title.toLowerCase().includes(value.toLowerCase())){
                table += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${productsData[i].title}</td>
                            <td>${productsData[i].price}</td>
                            <td>${productsData[i].taxes}</td>
                            <td>${productsData[i].ads}</td>
                            <td>${productsData[i].discount}</td>
                            <td>${productsData[i].total}</td>
                            <td>${productsData[i].category}</td>
                            <td ><button onclick="updateData(${i})" id="update">update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                        </tr>`;
            }
        }
    } else {
        for(let i = 0; i < productsData.length; i++){
            if(productsData[i].category.toLowerCase().includes(value.toLowerCase())){
                table += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${productsData[i].title}</td>
                            <td>${productsData[i].price}</td>
                            <td>${productsData[i].taxes}</td>
                            <td>${productsData[i].ads}</td>
                            <td>${productsData[i].discount}</td>
                            <td>${productsData[i].total}</td>
                            <td>${productsData[i].category}</td>
                            <td ><button onclick="updateData(${i})" id="update">update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                        </tr>`;
            }
        }
    }

    
    document.getElementById('showTable').innerHTML = table;
}