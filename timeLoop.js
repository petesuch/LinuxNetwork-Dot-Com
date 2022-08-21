let tzMap = {
  "PHX":"America/Phoenix",
  "JFK":"America/New_York",
  "PNH":"Asia/Phnom_Penh",
  "LAX":"America/Los_Angeles",
  "DEN":"America/Denver",
  "NRT":"Asia/Tokyo",
  "MEL":"Australia/Melbourne",
  "ORD":"America/Chicago",
  "FRA":"Europe/Berlin",
  "AKL":"Pacific/Auckland",
  "AMS":"Europe/Amsterdam",
  "LHR":"Europe/London",
  "PER":"Australia/Perth",
  "PVG":"Asia/Shanghai",
  "HKT":"Asia/Hong_Kong",
  "TLV":"Asia/Tel_Aviv",
  "MAA":"Asia/Kolkata",
  "GRU":"America/Sao_Paulo",
  "DME":"Europe/Moscow",
  "HNL":"Pacific/Honolulu",
  "ICN":"Asia/Seoul",
};


anyNumberSuffix = function (n) {
  if (typeof (n) === 'string' || n < 0) {
    return n;
  }
  let suffix = '';
  let num = '';
  let secondtoLast;
  let lastDigit;
  let last2Digits;
  try {
    if (n !== undefined) {
      num = Math.floor(n);
      last2Digits = num.toString().match(/(?<secondtoLastDigit>\d?)(?<lastDigit>\d\b)/);
      secondtoLast = last2Digits.groups.secondtoLastDigit;
      lastDigit = last2Digits.groups.lastDigit;
    }
  } catch (err) {
  // console.log("Error: "+ err);
  }
  if (secondtoLast === '1') {
    suffix = 'th';
  }
  else {
    switch (lastDigit) {
      case undefined:
        suffix = '';
        break;
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
        break
    }
  }
  return num + suffix;
};


mkLongOptions = function(tz=string, hr12=boolean) {
  // return map of options that include timeZone and hour12
  let options = {weekday:'long', year: 'numeric',month: 'long',day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'};
  options.timeZone = tz;
  options.hours12 = hr12;
  return options;
}


function changeTime() {
  let t=setInterval("getFullDateAndTime();", 1000); // every second
}


function getFullDateAndTime() {
  //let pat =  ;
  let pat = /\b\d\b/ ;
  let dnow = new Date();
  for (airportCode in tzMap ) {
    dateTimeFormat = new Intl.DateTimeFormat('en-US', mkLongOptions(tzMap[airportCode], true));
    let d = dateTimeFormat.format(dnow); // apply formatting using options
    let day = Number(d.match(pat));
    d = d.replace(pat,anyNumberSuffix(day)); // turn 18 into 18th
    document.getElementById(airportCode).innerHTML =  airportCode + ":  "+ d;
  };
}

changeTime();