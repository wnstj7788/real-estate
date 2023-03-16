var serviceKeyApart =
  "k5EKhcvEVcfEXIn2mnb2nd7hZtlbvquM7M0AbKZeLZmT58550frSYtSymQCTNjpqQNDu0S7bfuYN0Q18CYRQzg%3D%3D";
var apart_MonthandYear_url =
  "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?serviceKey=" +
  serviceKeyApart +
  "&LAWD_CD=11110&DEAL_YMD=201512";

var serviceKeyMulti =
  "k5EKhcvEVcfEXIn2mnb2nd7hZtlbvquM7M0AbKZeLZmT58550frSYtSymQCTNjpqQNDu0S7bfuYN0Q18CYRQzg%3D%3D";
var Multi_MonthandYear_url =
  "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent?serviceKey=" +
  serviceKeyMulti +
  "&LAWD_CD=11110&DEAL_YMD=201512";

var apart_Month_Object = [];
var apart_Year_Object = [];
var multi_Year_Object = [];
var multi_Month_Object = [];



var but = document.getElementById("searchApartYear");

window.onload = function () {
  // makeApartMonthandYear();
  makeMultiMonthandYear();
};

function makeApartMonthandYear() {
  fetch(apart_MonthandYear_url)
    .then(function (resp) {
      return resp.text();
    })
    .then((data) => makeObject(data, "apart"));
}

function makeMultiMonthandYear() {
  fetch(Multi_MonthandYear_url)
    .then(function (resp) {
      return resp.text();
    })
    .then((data) => makeObject(data, "multi"));
}

function makeObject(data, apartOrMulti) {
  let parser = new DOMParser();
  const xml = parser.parseFromString(data, "application/xml");

  console.log(xml);

  let items = xml.querySelectorAll("item");

  if (apartOrMulti == "apart") {
    var i = 0;
    var j = 0;
    items.forEach(function (item) {
      console.log(item);
      if (item.querySelector("월세금액").textContent == 0) {
        var tmp = {
          법정동: item.querySelector("법정동").textContent,
          보증금액: item.querySelector("보증금액").textContent,
          아파트: item.querySelector("아파트").textContent,
          // 월세금액: item.querySelector("월세금액").textContent,
          전용면적: item.querySelector("전용면적").textContent,
          층: item.querySelector("층").textContent,
        };

        apart_Year_Object[i++] = tmp;
      } else {
        var tmp = {
          법정동: item.querySelector("법정동").textContent,
          보증금액: item.querySelector("보증금액").textContent,
          아파트: item.querySelector("아파트").textContent,
          월세금액: item.querySelector("월세금액").textContent,
          전용면적: item.querySelector("전용면적").textContent,
          층: item.querySelector("층").textContent,
        };
        apart_Month_Object[j++] = tmp;
      }
    });

    apart_Year_Object.sort(function (a, b) {
      return parseInt(removeCommas(b.보증금액), 10) - parseInt(removeCommas(a.보증금액), 10);
    });
    apart_Month_Object.sort(function (a, b) {
      return parseInt(removeCommas(b.보증금액), 10) - parseInt(removeCommas(a.보증금액), 10);
    });

    console.log(apart_Year_Object);
    console.log(apart_Month_Object);
  }
  // 아파트 끝
  else {
    var i = 0;
    var j = 0;
    items.forEach(function (item) {
      console.log(item);
      if (item.querySelector("월세금액").textContent == 0) {
        var tmp = {
          법정동: item.querySelector("법정동").textContent,
          보증금액: item.querySelector("보증금액").textContent,
          연립다세대: item.querySelector("연립다세대").textContent,
          // 월세금액: item.querySelector("월세금액").textContent,
          전용면적: item.querySelector("전용면적").textContent,
          //   층: item.querySelector("층").textContent,
        };

        multi_Year_Object[i++] = tmp;
      } else {
        var tmp = {
          법정동: item.querySelector("법정동").textContent,
          보증금액: item.querySelector("보증금액").textContent,
          연립다세대: item.querySelector("연립다세대").textContent,
          월세금액: item.querySelector("월세금액").textContent,
          전용면적: item.querySelector("전용면적").textContent,
          //   층: item.querySelector("층").textContent,
        };
        multi_Month_Object[j++] = tmp;
      }
    });

    multi_Year_Object.sort(function (a, b) {
      return parseInt(removeCommas(b.보증금액), 10) - parseInt(removeCommas(a.보증금액), 10);
    });
    multi_Month_Object.sort(function (a, b) {
      return parseInt(removeCommas(b.보증금액), 10) - parseInt(removeCommas(a.보증금액), 10);
    });

    console.log(multi_Year_Object);
    console.log(multi_Month_Object);
  }
}

function removeCommas(str) {
  return str.replace(/,/g, "");
}








var butSearch = document.getElementById("searchSubmit");

