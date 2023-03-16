function initMap() {
  // 지도의 중심 좌표를 설정합니다.
  var myLatLng = { lat: 37.566535, lng: 126.9779692 };

  // 지도를 생성합니다.
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });

  // 지도에 마커를 추가합니다.
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "서울시청",
  });
}
