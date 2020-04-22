class Product{
    constructor ( obj ) {
        this._id=1,
        this.pName=obj.pName,
        this.pCategory=obj.pCategory,
        this.price=obj.price,
        this.pSeller={
            sId: obj.sId,
            pDiscount: obj.pDiscount,
            pQuantity: obj.pQuantity
        }
    }

}
module.exports=Product;

