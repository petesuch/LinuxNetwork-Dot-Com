let tzMap = {
  "JFK": "America/New_York",
  "PHX": "America/Phoenix",
  "PNH": "Asia/Phnom_Penh",
  "SFO": "America/San_Francisco",
  "DEN": "America/Denver",
  "NRT": "Asia/Tokyo",
  "MEL": "Australia/Melbourne",
  "ORD": "America/Chicago",
  "FRA": "Europe/Berlin",
  "AKL": "Pacific/Auckland",
  "AMS": "Europe/Amsterdam",
  "LHR": "Europe/London",
  "PER": "Australia/Perth",
  "PVG": "Asia/Shanghai",
  "HKT": "Asia/Hong_Kong",
  "TLV": "Asia/Tel_Aviv",
  "MAA": "Asia/Kolkata",
  "GRU": "America/Sao_Paulo",
  "DME": "Europe/Moscow",
  "HNL": "Pacific/Honolulu",
  "ICN": "Asia/Seoul",
};

anyNumberSuffix = function (n) {
  if (typeof (n) === 'string') {
    n = Number(n);
  }
  let suffix = '';
  let num = '';
  let secondtoLast = '';
  let lastDigit = '';
  let last2Digits = '';

  if (n > 9) {
    num = n;
    last2Digits = num.toString().match(/(?<secondtoLastDigit>\d)(?<lastDigit>\d\b)/);
    secondtoLast = last2Digits.groups.secondtoLastDigit;
    lastDigit = last2Digits.groups.lastDigit;
  }
  if (n <= 9) {
    num = n;
    lastDigit = String(num);
  }
  if (secondtoLast == '1') {
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
  return num + suffix + ', ';
};


//  Map of options that include timeZone and a 12 hour clock
mkLongOptions = function (tz = string, hr12 = boolean) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  options.timeZone = tz;
  options.hours12 = hr12;
  return options;
};


//  A function to keep the seconds and minutes up and running
function clockIsTicking() {
  let ticktok = setInterval("getFullDateAndTime();", 1000); // every second
};


//  Gets date/time, applies timezone and finally exports to DOM
function getFullDateAndTime() {
  const regex = new RegExp('\\b(?<grpDay>\\d+),\\ ', 's');
  //const regex = /\b(?<grpDay>\d+)\ /s);
  let dnow = new Date();
  for (airportCode in tzMap) {
    intlDateTimeFormat = new Intl.DateTimeFormat('en-US', mkLongOptions(tzMap[airportCode], true));
    let idtf = intlDateTimeFormat.format(dnow); // Apply formatting options
    let idtf_str = String(idtf);  // turn the International Date Time into string
    let grpDay = idtf_str.match(regex);
    idtf_str = idtf_str.replace(regex, anyNumberSuffix(grpDay[1])); // turn 18 into 18th, etc
    //console.log("last idtf_str:", idtf_str);
    document.getElementById(airportCode).innerHTML = airportCode + ":  " + idtf_str;
  }
};

//  It takes a licking but keeps on ticking
clockIsTicking();

// End of File
