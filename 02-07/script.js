const laptop = {
    screens         :  {
        resolution  : 1080,
        displayType : "LCD",
        touchEnabled: false,
    },
    pointingDevice  :  "Trackpad",
    ram             :  "16 GB",
    storage         :  "512 GB",
    wifi            :   true,
    toggleWifi      : function(wifi_status) {
        this.wifi = wifi_status;
    },

    bands           : {
        speed_wb_2_5g  : 250,
        speed_wb_5g    : 5000,
    },

    wifibands       : function(wb_2_5g, wb_5g) {
        this.bands.speed_wb_2_5g = wb_2_5g;
        this.bands.speed_wb_5g = wb_5g;
    },
};

console.log("The laptop specs: ", laptop);
console.log("The laptop storage is: ", laptop.storage);
console.log("The laptop screen resolution is: ", laptop.screens.resolution);
// console.log("The laptop Ram is: ", laptop["ram"]);
let query = "ram";
console.log("The laptop Ram is: ", laptop[query]);
console.log("2.5g speed before: ", laptop.bands.speed_wb_2_5g);
console.log("5g speed before: ", laptop.bands.speed_wb_5g);
laptop.wifibands(300, 15000);
console.log("2.5g speed after : ", laptop.bands.speed_wb_2_5g);
console.log("5g speed after : ", laptop.bands.speed_wb_5g);