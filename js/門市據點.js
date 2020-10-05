let data = [
    {
    storeName:'【新北板橋門市】家電體驗營',
    storeAddress:'桃園市桃園區中華路51號',
    storePhone:'(03)339-7933',
    storeOpening:'平日:11:00-22:00 假日: 11:00-22:00',
    storeService:'服務項目 : 筆電/桌機、印表機、電腦周邊耗材、消費電子、家電體驗與販賣、門號申辦、電腦DIY組裝諮詢、維修中心(維修代送/現場快速檢修)',
    storeMap:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.275337267717!2d121.30843661535589!3d24.99075844617667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681efd2fc940af%3A0x481d8ba8818d92e3!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5Lit6I-v6LevNTHomZ8!5e0!3m2!1szh-TW!2stw!4v1601457441568!5m2!1szh-TW!2stw',
    storePic:[
        {
            img:[
                'http://www.sanjing3c.com.tw/userfiles/201906/STORE/E_001.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_02.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_04.jpg'
            ]
        }
    ]
    },
    {
    storeName:'【ooo橋門市】家電體驗營',
    storeAddress:'桃園市oo區中華路51號',
    storePhone:'(03)339-2222222',
    storeOpening:'平日:11:00-22:00 假日: 11:00-22:00',
    storeService:'服務項目 : 筆電/桌機、印表機、電腦周邊耗材、消費電子、家電體驗與販賣、門號申辦、電腦DIY組裝諮詢、維修中心(維修代送/現場快速檢修)',
    storeMap:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.275337267717!2d121.30843661535589!3d24.99075844617667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681efd2fc940af%3A0x481d8ba8818d92e3!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5Lit6I-v6LevNTHomZ8!5e0!3m2!1szh-TW!2stw!4v1601457441568!5m2!1szh-TW!2stw',
    storePic:[
        {
            img:[
                'http://www.sanjing3c.com.tw/userfiles/201906/STORE/E_001.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_02.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_04.jpg'
            ]
        }
    ]
    },
    {
    storeName:'【xxx橋門市】家電體驗營',
    storeAddress:'桃園市xx區中華路51號',
    storePhone:'(03)339-111111',
    storeOpening:'平日:11:00-22:00 假日: 11:00-22:00',
    storeService:'服務項目 : 筆電/桌機、印表機、電腦周邊耗材、消費電子、家電體驗與販賣、門號申辦、電腦DIY組裝諮詢、維修中心(維修代送/現場快速檢修)',
    storeMap:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.275337267717!2d121.30843661535589!3d24.99075844617667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681efd2fc940af%3A0x481d8ba8818d92e3!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5Lit6I-v6LevNTHomZ8!5e0!3m2!1szh-TW!2stw!4v1601457441568!5m2!1szh-TW!2stw',
    storePic:[
        {
            img:[
                'http://www.sanjing3c.com.tw/userfiles/201906/STORE/E_001.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_02.jpg',
                'http://www.sanjing3c.com.tw/userfiles/201809/store/E_04.jpg'
            ]
        }
    ]
    },
]


// 清除附元素崩塌
$(function(){
    let h = $('#list-header').height() ;
    let y = $('.list-body').height();
    $('#list-header').height('52px');
    $('.list').height(h+y);

    let w = $('.list').width();
    $('.list-body').width(w);
    $('.list-body').width(w);
    $('.list-box').width(w-24)
})

// TabDOM
let tabBack = document.getElementById('list-tabback');
let tabFirst = document.getElementById('list-tab')
tabBack.addEventListener('click',tabSwitch,false);
tabFirst.addEventListener('click',tabTwist,false);

// ModalDOM
let modalTitle = document.getElementById('exampleModalLabel');
let modalBody = document.getElementById('modal-body');

// Tab Function
function tabSwitch(){
    // Tabs Colors Change

    let listHeader = document.getElementById('list-header');
    let listBody = document.getElementById('list-body');
    tabBack.classList.remove('list-tabback');
    tabBack.classList.add('tabBack');
    tabFirst.classList.remove('list-tab');
    tabFirst.classList.add('tabFirst');

    // ListBody

    let allStore = document.getElementById('allStore');
    let areaSearch = document.getElementById('areaSearch');
    allStore.style.display='none';
    areaSearch.classList.remove('d-none');
    areaSearch.classList.add('d-block');
}
function tabTwist(){
    // Tabs Colors Change

    let listHeader = document.getElementById('list-header');
    let listBody = document.getElementById('list-body');
    tabBack.classList.remove('tabBack');
    tabBack.classList.add('list-tabback');
    tabFirst.classList.remove('tabFirst');
    tabFirst.classList.add('list-tab');

    // ListBody

    let allStore = document.getElementById('allStore');
    let areaSearch = document.getElementById('areaSearch');
    allStore.style.display='block';
    areaSearch.classList.remove('d-block');
    areaSearch.classList.add('d-none');
};

// Modal function

$("#list-body .list-box").click(function (){
    modalFun($(this).index());
});

function modalFun(i){
    let str = '';
    let str1 = '';
    let str2='';
    str +=`
    ${data[i].storeName}
    `;
    str1 +=`
    <ul class="list-item mb-0" style="list-style: none;">
        <li class="pl-1 py-2 border-bottom"><i class="fas fa-map-marker-alt mx-1" style="color:#f5b617 ;"></i><span class="backicon">${data[i].storeAddress}</span></li>
        <li class="pl-1 py-2 border-bottom"><i class="fas fa-mobile-alt mx-1" style="color:#348acb ;"></i><span class="backicon">${data[i].storePhone}</span id="call"></li>
        <li class="pl-1 py-2 border-bottom"><i class="far fa-clock mx-1" style="color:#81bf2d;"></i><span class="backicon">${data[i].storeOpening}</li>
        <li class="pl-1 py-2 backicon">${data[i].storeService}</li>
        <li>
            <iframe src="${data[i].storeMap}" width="100%"frameborder="0" style="border:0;zoom: 3;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </li>
    </ul>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" >
            <div class="carousel-item active">
            <img src="${data[i].storePic[0].img[0]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${data[i].storePic[0].img[1]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${data[i].storePic[0].img[2]}" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev mt-5" style="background-color: black; height: 50px;" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next mt-5" style="background-color: black; height: 50px;" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div> 
    `;
    modalTitle.innerHTML=str;
    modalBody.innerHTML=str1 + str2;
}