import * as types from './../constants/ActionTypes'
var initialState = [
    {
        "id": 1,
        "category_id": 1,
        "name": "iPhone 11 Pro Max 512GB",
        "price": "43990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg",
        "description": "/Man hinh: 6.5 inch, Super Retina XDR/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 512 GB/Camera: 3 camera 12 MP, Selfie: 12 MP/PIN: 3969 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 2,
        "category_id": 1,
        "name": "iPhone 11 Pro Max 256GB",
        "price": "37990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-600x600.jpg",
        "description": "/Man hinh: 6.5 inch, Super Retina XDR/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 256 GB/Camera: 3 camera 12 MP, Selfie: 12 MP/PIN: 3969 mAh",
        "trending": 0,
        "rating":3
    },
    {
        "id": 3,
        "category_id": 1,
        "name": "iPhone Xs Max 256GB",
        "price": "32490000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190322/TimerThumb/iphone-xs-max-256gb-halloween.jpg",
        "description": "/Man hinh: 6.5 inch, Super Retina/HDH: iOS 12/CPU: Apple A12 Bionic 6 nhan/RAM: 4 GB, ROM: 256 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 3174 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 4,
        "category_id": 1,
        "name": "iPhone 11 Pro 256GB",
        "price": "34990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-gold-600x600.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina XDR/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 256 GB/Camera: 3 camera 12 MP, Selfie: 12 MP/PIN: 3046 mAh",
        "trending": 0,
        "rating":3
    },
    {
        "id": 5,
        "category_id": 1,
        "name": "iPhone 11 Pro Max 64GB",
        "price": "33990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
        "description": "/Man hinh: 6.5 inch, Super Retina XDR/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 64 GB/Camera: 3 camera 12 MP, Selfie: 12 MP/PIN: 3969 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 6,
        "category_id": 1,
        "name": "iPhone Xs 256GB",
        "price": "28990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190324/TimerThumb/iphone-xs-256gb-halloween.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina/HDH: iOS 12/CPU: Apple A12 Bionic 6 nhan/RAM: 4 GB, ROM: 256 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 2658 mAh",
        "trending": 0,
        "rating":3
    },
    {
        "id": 7,
        "category_id": 1,
        "name": "iPhone 11 Pro 64GB",
        "price": "30990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-green-600x600.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina XDR/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 64 GB/Camera: 3 camera 12 MP, Selfie: 12 MP/PIN: 3046 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 8,
        "category_id": 1,
        "name": "iPhone Xs Max 64GB",
        "price": "26990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190321/TimerThumb/iphone-xs-max-halloween.jpg",
        "description": "/Man hinh: 6.5 inch, Super Retina/HDH: iOS 12/CPU: Apple A12 Bionic 6 nhan/RAM: 4 GB, ROM: 64 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 3174 mAh",
        "trending": 0,
        "rating":4
    },
    {
        "id": 9,
        "category_id": 1,
        "name": "iPhone X 256GB",
        "price": "27990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-600x600.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina/HDH: iOS 12/CPU: Apple A11 Bionic 6 nhan/RAM: 3 GB, ROM: 256 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 2716 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 10,
        "category_id": 1,
        "name": "iPhone Xs 64GB",
        "price": "24990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190323/TimerThumb/iphone-xs-halloween.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina/HDH: iOS 12/CPU: Apple A12 Bionic 6 nhan/RAM: 4 GB, ROM: 64 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 2658 mAh",
        "trending": 0,
        "rating":3
    },
    {
        "id": 11,
        "category_id": 1,
        "name": "iPhone 11 128GB",
        "price": "23990000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-purple-600x600.jpg",
        "description": "/Man hinh: 6.1 inch, Liquid Retina/HDH: iOS 13/CPU: Apple A13 Bionic 6 nhan/RAM: 4 GB, ROM: 128 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 12 MP/PIN: 3110 mAh",
        "trending": 1,
        "rating":3
    },
    {
        "id": 12,
        "category_id": 1,
        "name": "iPhone X 64GB",
        "price": "20490000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114115/TimerThumb/iphone-x-64gb-halloween.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina/HDH: iOS 12/CPU: Apple A11 Bionic 6 nhan/RAM: 3 GB, ROM: 64 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 2716 mAh",
        "trending": 1,
        "rating":3
    },

];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.LIST_PRODUCT_TRENDING:
            var result = [];
            for (let i=0;i<state.length;i++){
                if(state[i].trending===1) result.push(state[i])
            }
            return result.slice(0,12);
        default: return state;
    }
};
export default appReducer;