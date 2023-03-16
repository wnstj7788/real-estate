var btn = document.getElementById("search");

btn.onclick = function () {
  var keyword = document.getElementById("keyword").value;
  fetch("http://192.168.214.40:7777/rest/naver/xml/shop?keyword=" + keyword)
    .then(function (resp) {
      return resp.text();
    })
    .then(function (data) {
      let parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      console.log(data);
      let items = xml.querySelectorAll("item");
      console.log(items);
      var table = document.createElement("table");
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.append(document.createTextNode("상품명"));

      var el = `<table border="1">
    <tr>
        <th>상품명</th>
        <th>최저가</th>
        <th>이미지</th>
        <th>바로가기링크</th>
    </tr>
    `;

      items.forEach(function (item) {
        el += `<tr>
            <td>${item.querySelector("title").textContent}</td>
            <td>${item.querySelector("lprice").textContent}</td>
            <td><img src="${item.querySelector("image").textContent}" alt="" width = 200px "></td>
            <td><a href="${item.querySelector("link").textContent}"> 바 가</a></td>
            </tr>`;
      });

      el += `</table>`;

      document.getElementById("result").innerHTML = el;
    });
};

console.log("언제 출력");
