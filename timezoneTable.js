// timezoneTable.js

function timedMsg() {
    var t=setInterval("change_time();",1000);
}

function change_time() {
    var d1 = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"})
    var d2 = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    var d3 = new Date().toLocaleString("en-US", {timeZone: "Asia/Phnom_Penh"})
    var d4 = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})

    var d5 = new Date().toLocaleString("en-US", {timeZone: "America/Denver"})
    var d6 = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"})
    var d7 = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne"})
    var d8 = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})

    var d9  = new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})
    var d10 = new Date().toLocaleString("en-US", {timeZone: "Pacific/Auckland"})
    var d11 = new Date().toLocaleString("en-US", {timeZone: "Europe/Amsterdam"})
    var d12 = new Date().toLocaleString("en-US", {timeZone: "Europe/London"})

    var d13 = new Date().toLocaleString("en-US", {timeZone: "Australia/Perth"})
    var d14 = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"})
    var d15 = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"})
    var d16 = new Date().toLocaleString("en-US", {timeZone: "Asia/Tel_Aviv"})

    var d13 = new Date().toLocaleString("en-US", {timeZone: "Australia/Perth"})
    var d14 = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"})
    var d15 = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"})
    var d16 = new Date().toLocaleString("en-US", {timeZone: "Asia/Tel_Aviv"})

    var d17 = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
    var d18 = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})
    var d19 = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})
    var d20 = new Date().toLocaleString("en-US", {timeZone: "Pacific/Honolulu"})


    document.getElementById("phx_time").innerHTML = '<a href="https://www.timeanddate.com/weather/usa/phoenix/ext" target="_blank">Tucson: ' +d1+ '</a>';
    document.getElementById("jfk_time").innerHTML = "New York: " + d2;
    document.getElementById("pnh_time").innerHTML = "Phnom Penh: "+ d3;
    document.getElementById("lax_time").innerHTML = "San Francisco: "+ d4;

    document.getElementById("den_time").innerHTML = "Boulder: " +d5;
    document.getElementById("nrt_time").innerHTML = "Tokyo: " + d6;
    document.getElementById("mel_time").innerHTML = "Melbourne: "+ d7;
    document.getElementById("ord_time").innerHTML = "Chicago: "+ d8;

    document.getElementById("fra_time").innerHTML = "Frankfurt: "+ d9;
    document.getElementById("akl_time").innerHTML = "Auckland: " + d10;
    document.getElementById("ams_time").innerHTML = "Amsterdam: "+ d11;
    document.getElementById("lhr_time").innerHTML = "London: "+ d12;

    document.getElementById("per_time").innerHTML = "Perth: "+ d13;
    document.getElementById("pvg_time").innerHTML = "Shanghai: " + d14;
    document.getElementById("hkt_time").innerHTML = "Hong Kong: "+ d15;
    document.getElementById("tlv_time").innerHTML = "Tel Aviv: "+ d16;

    document.getElementById("maa_time").innerHTML = "Chennai: "+ d17;
    document.getElementById("gru_time").innerHTML = "Sao Paulo: " + d18;
    document.getElementById("dme_time").innerHTML = "Moscow:  "+ d19;
    document.getElementById("hnl_time").innerHTML = "Honolulu: "+ d20;
}
timedMsg();
