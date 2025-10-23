class Computer {
    constructor(
        // Parameters
        name,
        processor,
        ram,
        storage,
        os,
        wifi,
        monitor,
        wifiBand2g,
        wifiBand5g,
        dateAcquired
    ) {
    // Properties
    this.name = name;
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
    this.os = os;
    this.wifi = wifi;
    this.monitor = monitor;
    this.wifispeed = {
        lowSpeed  : wifiBand2g,
        highSpeed : wifiBand5g,
    };

    this.dateAcquired = dateAcquired;
    }
    toggleWifi(wifiStatus) {
        this.wifi = wifiStatus;
    }
    newWifiSpeed(upgrade2g, upgrade5g) {
  this.wifispeed.lowSpeed = upgrade2g;
  this.wifispeed.highSpeed = upgrade5g;
    }

computerAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daySinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daySinceAcquired;
}

}

export default Computer;