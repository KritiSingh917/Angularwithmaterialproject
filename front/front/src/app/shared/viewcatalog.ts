export class ViewCatalog {
    "_id": string
    "pName": string
    "pDescription": string
    "pRating": number
    "pCategory": string
    "price": number
    "color": string
    "image": string
    "specification": string
    "dateFirstAvailable": string
    "dateLastAvailable":string
    "pSeller": {
        "sId": string
        "pDiscount": number
        "pQuantity": number
        "pShippingCharges": number
    }
}