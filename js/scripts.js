function Phone(brand, price, color, sim, system) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.sim = sim;
    this.system = system;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", system is " + this.system + ", color is " + this.color + ", " + this.sim + " dual sim " + " and the price is " + this.price + " pln.");
}

var iPhone8 = new Phone("Apple", 3650, "silver", "no", "iOS11");
iPhone8.printInfo();

var SamsungS8 = new Phone("Samsung", 3250, "steel", "no", "Android 7.1.1 Nougat");
SamsungS8.printInfo();

var HuaweiY6 = new Phone("Huawei", 1120, "black", "", "Android 7.1.2 Nougat");
HuaweiY6.printInfo();

var HTCU11 = new Phone("HTC", 2620, "white", "", "Android 8.0 Oreo");
HTCU11.printInfo();