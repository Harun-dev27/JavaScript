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
    wifibands       : function(wb_2_5g, wb_5g) {
        this.speed_wb_2_5g = wb_2_5g;
        this.speed_wb_5g = wb_5g;
    },
};

console.log("The laptop specs: ", laptop);
console.log("The laptop storage is: ", laptop.storage);
console.log("The laptop screen resolution is: ", laptop.screens.resolution);
// console.log("The laptop Ram is: ", laptop["ram"]);
let query = "ram";
console.log("The laptop Ram is: ", laptop[query]);
