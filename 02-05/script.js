const laptop = {
    screens         :  {
        resolution  : 1080,
        displayType : "LCD",
        touchEnabled: false
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
    }
};

console.log("This is a laptop specs: ", laptop);

