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

var samsungS8 = new Phone("Samsung", 3250, "steel", "no", "android7Nougat");
samsungS8.printInfo();

var huaweiY6 = new Phone("Huawei", 1120, "black", "", "android7Nougat");
huaweiY6.printInfo();

var htcU11 = new Phone("HTC", 2620, "white", "", "android8Oreo");
htcU11.printInfo();