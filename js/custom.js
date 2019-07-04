var roomdatas=[
    {
        img:"https://i.imgur.com/UdWtDv4.jpg",
        name:"簡約時尚",
        size:10,
        point:"淋浴間-乾濕分離",
        price:2800,
        is_discount: false,
        discount:1
    },{
        img:"https://i.imgur.com/veqrVDi.jpg",
        name:"簡約時尚加大",
        size:15,
        point:"淋浴間-乾濕分離",
        price:3000,
        is_discount: true,
        discount: 0.9
    },{
        img:"https://i.imgur.com/PAZUgpC.jpg",
        name:"森林北歐風",
        size:17,
        point:"浴室 含 浴缸",
        price:3200,
        is_discount: false,
        discount:1
    },{
        img:"https://i.imgur.com/P1lrD0o.jpg",
        name:"景觀房",
        size:19,
        point:"浴室 含 浴缸",
        price:3500,
        is_discount: false,
        discount:1
    },{
        img:"https://i.imgur.com/Ed8JaBc.jpg",
        name:"親子房",
        size:17,
        point:"浴室 含 浴缸",
        price:3200,
        is_discount:true,
        discount: 0.79
    },{
        img:"https://i.imgur.com/g94pqzD.jpg",
        name:"奢華北歐",
        size:19,
        point:"浴室 含 浴缸",
        price:3500,
        is_discount:true,
        discount: 0.89
    },{
        img:"https://i.imgur.com/Asuq425.jpg",
        name:"簡約北歐風",
        size:15,
        point:"兩張單人床、淋浴間-乾濕分離",
        price:2600,
        is_discount: false,
        discount:1
    },{
        img:"https://i.imgur.com/D61p2cS.jpg",
        name:"豪華家庭房",
        size:22,
        point:"雙人床加大、浴室 含 浴缸",
        price:4000,
        is_discount: false,
        discount:1
    },{
        img:"https://i.imgur.com/00JUIGY.jpg",
        name:"星空夜景房",
        size:22,
        point:"雙人床加大、浴室 含 浴缸",
        price:4000,
        is_discount: true,
        discount: 0.89
    }
];
var vm=new Vue({
    el: "#app",
    data: {
      is_discount:false,
      rooms: roomdatas
    }  
});

