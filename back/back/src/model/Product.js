//product dabase
const prod=[
    {
        "_id": "1001",
        "pName": "Asus Zenfone Max Pro M2",
        "pDescription": "an economical phone by Asus",
        "pRating": 3.5,
        "pCategory": "Electronics",
        "price": 14999,
        "color": "Black",
        "image": "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/ASUS_ZenFone_Max_Pro_M2/ASUS_ZenFone_Max_Pro_M2_L_1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Asus@Seller",
          "pDiscount": 0.2,
          "pQuantity": 661,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1002",
        "pName": "Redmi Note 6 Pro",
        "pDescription": "an economical phone by Xiaomi",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 13999,
        "color": "Black",
        "image": "https://i.gadgets360cdn.com/products/large/1537272524_635_xiaomi_redmi_note_6_pro.png",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Xiaomi@Seller",
          "pDiscount": 0.2,
          "pQuantity": 665,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1003",
        "pName": "Moto G7 Plus",
        "pDescription": "a prime phone by Moto",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 23599,
        "color": "Silver",
        "image": "https://www.91-img.com/pictures/130432-v6-moto-g7-plus-mobile-phone-large-1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Moto@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1004",
        "pName": "Lenovo Tab 2 A8-50",
        "pDescription": "a high end phone by Lenovo",
        "pRating": 4.5,
        "pCategory": "Electronics",
        "price": 19999,
        "color": "Blue",
        "image": "https://www.91-img.com/pictures/lenovo-tab-2-a8-wifi-16gb-tablet-large-1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Lenovo@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1005",
        "pName": "iphone 8 plus",
        "pDescription": "a high end phone by apple",
        "pRating": 4.9,
        "pCategory": "Electronics",
        "price": 79999,
        "color": "Rose Gold",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71Ybg7nIAHL._SX569_.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Apple@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1006",
        "pName": "Stiletto",
        "pDescription": "a pair of light weight Stiletto",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2599,
        "color": "Nude Shade",
        "image": "https://ya-webdesign.com/images250_/slippers-clipart-red-stiletto-9.png",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Adidas@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1007",
        "pName": "Heels",
        "pDescription": "2 inches heels ",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2099,
        "color": "White",
        "image": "https://hochzeitshaus.berlin/media/image/product/45854/md/s18008_s18008-brautschuhe-blush-ivory-rauleder~5.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Mocchi@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1008",
        "pName": "Stiletto",
        "pDescription": "Renata heels",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 3599,
        "color": "Silver",
        "image": "https://sites.create-cdn.net/siteimages/6/4/7/64731/17/2/3/17231719/350x263.jpg?1553370193",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Inch@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1009",
        "pName": "Sneakers",
        "pDescription": "A pair of light weight sneakers",
        "pRating": 3,
        "pCategory": "Shoes",
        "price": 1599,
        "color": "Peach",
        "image": "https://ekpo.com.ng/wp-content/uploads/2016/03/71-350x300.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Reebok@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1010",
        "pName": "Wedges",
        "pDescription": "a pair of Wedges ",
        "pRating": 4.8,
        "pCategory": "Shoes",
        "price": 1500,
        "color": "Off white",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDWtKJ43aiJQrLpLPaNjSHX9QoVuFBvv2fNuyKKdVLTjQloW6C&usqp=CAU",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Nike@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1011",
        "pName": "Block heels",
        "pDescription": "a pair of block heels",
        "pRating": 4.8,
        "pCategory": "Shoes",
        "price": 2000,
        "color": "Off white",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBRRpLesIiDwivobfOqOJrg_fs5gJDluehQ5NKL3p2LYlCCO9_&usqp=CAU",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Puma@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1012",
        "pName": "Luxury Bed by Zuari",
        "pDescription": "sunmica finished zuari luxury bed",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 8999,
        "color": "Beige",
        "image": "https://www.royaloakindia.com/uploads/ROYIND-royaloak-aletta-queen-bed-lifestyle27.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Zuari@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1013",
        "pName": "Organised Cupboards by Zuari",
        "pDescription": "sunmica finished zuari cupboards",
        "pRating": 4.3,
        "pCategory": "Furniture",
        "price": 6999,
        "color": "Coffee Brown",
        "image": "https://www.hometown.in/media/product/81/4453/84097/1-product_500.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Decor@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1014",
        "pName": "Dressing Table by Zuari",
        "pDescription": "sunmica finished zuari Dressing table",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 8599,
        "color": "Beige",
        "image": "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Zua@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1015",
        "pName": "Recliner sofa set by Grihshobha",
        "pDescription": "A luxurious and comfortable sofa set by Grihshobha furniture makers",
        "pRating": 4.8,
        "pCategory": "Furniture",
        "price": 12500,
        "color": "Dark grey",
        "image": "https://secure.img2-fg.wfcdn.com/im/37140646/resize-h800-w800%5Ecompr-r85/7282/72827414/Ibiza+Sofa.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Grihshobha@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1016",
        "pName": "Dining table by @HOME",
        "pDescription": "Teak wood dining table with glass top",
        "pRating": 4.4,
        "pCategory": "Furniture",
        "price": 18999,
        "color": "caramel",
        "image": "https://5.imimg.com/data5/UV/XP/MY-2036153/wooden-dining-table-500x500.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "HOME@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
/////home decor

      {
        "_id": "1017",
        "pName": "Small Flower Pots",
        "pDescription": "Artificial and washable Plastic Flower",
        "pRating": 4.4,
        "pCategory": "home-decor",
        "price": 1899,
        "color": "caramel",
        "image": "https://cf.shopee.ph/file/e6baee9ff68b1cc33b05200b331a9c96",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "HOMEDesign@Seller",
          "pDiscount": 0.2,
          "pQuantity": 66,
          "pShippingCharges": 150
        }
      },



      {
        "_id": "1018",
        "pName": "Curtain",
        "pDescription": "Soft Material",
        "pRating": 4.4,
        "pCategory": "home-decor",
        "price": 18999,
        "color": "Blue",
        "image": "https://tanbeenhomedecor.com/wp-content/uploads/2019/07/imageService.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Shobha@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1019",
        "pName": "Curtain",
        "pDescription": "Maroon soft material",
        "pRating": 4.4,
        "pCategory": "home-decor",
        "price": 18999,
        "color": "maroon",
        "image": "https://rukminim1.flixcart.com/image/352/352/jave1zk0/curtain/k/m/z/2-piece-scroll-frill-door-curtains-7-feet-maroon-213-original-imafyc2gzsmsee9p.jpeg?q=70",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Flora@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },




      {
        "_id": "1020",
        "pName": "Bedsheet",
        "pDescription": "Bedsheet Double bed",
        "pRating": 4.4,
        "pCategory": "home-decor",
        "price": 1899,
        "color": "caramel",
        "image": "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-king-size-double-bedsheet-with-pillow-covers-100902-m.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "BombayDine@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1021",
        "pName": "Wallpaper",
        "pDescription": "Stick it on wall",
        "pRating": 4.4,
        "pCategory": "home-decor",
        "price": 2999,
        "color": "Red",
        "image": "https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v7009331843815331063/products/81504.main.png&height=500&width=500&quality=0.88",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Asian@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },


//makeup

      {
        "_id": "1022",
        "pName": "Lipstick",
        "pDescription": "Light Pink Glossy Matte By Make Up Forever",
        "pRating": 4.4,
        "pCategory": "make-up",
        "price": 3099,
        "color": "Pink",
        "image": "https://i.ebayimg.com/images/g/aUEAAOSwAZxcuT1v/s-l400.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Huda@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1023",
        "pName": "Lipstick",
        "pDescription": "Wine Matte Make up Forever Lipstick",
        "pRating": 4.4,
        "pCategory": "make-up",
        "price": 18999,
        "color": "Wine",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51dv1sZOjkL._SY450_.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Makeupforvere@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },


      {
        "_id": "1024",
        "pName": "Liner",
        "pDescription": "Blue Colorbar liner",
        "pRating": 4.4,
        "pCategory": "make-up",
        "price": 18999,
        "color": "blue",
        "image": "https://dynamic.zacdn.com/h4uqG3uPW09g4osxUIbCzRW2-6g=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.ph.zalora.net/p/make-up-factory-4487-640037-1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Nykaa@Seller",
          "pDiscount": 0.2,
          "pQuantity": 100,
          "pShippingCharges": 150
        }
      },



      {
        "_id": "1025",
        "pName": "Liner and Kajal",
        "pDescription": "Blue Make up Forever Smooth kajal long lasting ",
        "pRating": 4.4,
        "pCategory": "make-up",
        "price": 18999,
        "color": "Navy Blue",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61WMVNQOSzL._SY355_.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Mabelline@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },


      {
        "_id": "1026",
        "pName": "Dining table by @HOME",
        "pDescription": "Teak wood dining table with glass top",
        "pRating": 4.4,
        "pCategory": "make-up",
        "price": 18999,
        "color": "caramel",
        "image": "https://cdn11.nnnow.com/web-images/medium/styles/HF5S4H6NKWX/1547543905806/1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Lakme@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      
     
      {
        "_id": "1027",
        "pName": "Middy",
        "pDescription": "Western Dress Knee length",
        "pRating": 4,
        "pCategory": "Clothing",
        "price": 1499,
        "color": "Olive Green",
        "image": "https://img0.junaroad.com/uiproducts/16798806/pri_175_p-1576495082.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Ethnic@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1028",
        "pName": "Jumpsuit ",
        "pDescription": "Cotton Ankel Length Jumpsuit",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 1200,
        "color": "white and blue",
        "image": "https://images.express.com/is/image/expressfashion/0094_07859602_0026?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "FabIndia@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1029",
        "pName": "Dress",
        "pDescription": "Polyster Full Length Dress",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "Black",
        "image": "https://img1.junaroad.com/uiproducts/16992655/pri_175_p-1583754852.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Mukti@Seller",
          "pDiscount": 0.2,
          "pQuantity": 660,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1030",
        "pName": "US Polo T-shirt",
        "pDescription": "100 % pure cotton t shirt by US polo",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 3299,
        "color": "Orange",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81DVZD43gQL._UX342_.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "USPolo@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1031",
        "pName": "UCB T-shirt",
        "pDescription": "100 % pure cotton t shirt by UCB",
        "pRating": 4.2,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "Blue",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1780799/2018/5/10/c98861e4-b517-4b4c-8ce7-d41c744323c41525936766062-United-Colors-of-Benetton-Men-Purple-Solid-Polo-Collar-T-shirt-2601525936765892-1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "UCB@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
//books
      {
        "_id": "1032",
        "pName": "Say that Again",
        "pDescription": "A novel by N Gemini Sasson",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 599,
        "color": "",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/5113ojBfBlL.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Library@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1033",
        "pName": "The Love that feels right",
        "pDescription": "Novel by Ravindra Singh",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 699,
        "color": "",
        "image": "https://i.pinimg.com/originals/46/2a/d4/462ad4c512cdad14b6982de670330c65.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Pathshala@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 50
        }
      },
      {
        "_id": "1034",
        "pName": "The boy who loved",
        "pDescription": "One of the famous novels of Durjoy Dutta",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 899,
        "color": "",
        "image": "https://www.bookgeeks.in/wp-content/uploads/2017/06/The-Boy-Who-Loved-by-Durjoy-Datta.jpeg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Yukti@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },

      {
        "_id": "1035",
        "pName": "Kite Runner",
        "pDescription": "By national Bestseller Khaled Hosseini",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 1299,
        "color": "",
        "image": "https://cdn.lifehack.org/wp-content/uploads/2015/05/31055903/1-The-Kite-Runner-Riverhead-Edition.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "BritishLib@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      
      {
        "_id": "1036",
        "pName": "Kinapped By the Pirate",
        "pDescription": "By Kiera Andrews",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 999,
        "color": "",
        "image": "https://i.pinimg.com/474x/37/35/68/373568ee3e6472274ae22e9528741d3d.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Flipbook@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1037",
        "pName": "The Perfect Us",
        "pDescription": "By Durjoy Dutta",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 3299,
        "color": "",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71-WFR7cOVL.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "MyntraBook@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1038",
        "pName": "Combo Books",
        "pDescription": "By Durjoy Dutta",
        "pRating": 4.8,
        "pCategory": "books",
        "price": 1299,
        "color": "",
        "image": "https://apollo-singapore.akamaized.net/v1/files/i2gc3dma6hit3-IN/image;s=850x0",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Kitaab@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1039",
        "pName": "Combo Pack",
        "pDescription": "100 % pure cotton t shirt by US polo",
        "pRating": 4.8,
        "pCategory": "home-decor",
        "price": 3299,
        "color": "",
        "image": "https://i.pinimg.com/originals/a6/2c/f2/a62cf22833225efff5a0e45ad02a594f.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "USdesign@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
]
module.exports=prod;

