

var loginBut = document.getElementById("signIn");

function login() {
    var id = document.getElementById("id").value;
    console.log(id)
    var pwd = document.getElementById("password-field").value;

    console.log(id,pwd);
    if (id == "ssafy" && pwd == "1234") {
    //   alert("로그인 성공");

        window.localStorage.setItem('id', id);
        window.localStorage.setItem('pwd', pwd);
        window.localStorage.setItem('loginflg', 1);

        // var loginNav = document.getElementById("loginNav");
        // confirmOnObj.style.display = "none";
    
        // var logoutNav = document.getElementById("logoutNav");
        // confirmOffObj.style.display = "block";

      alert("로그인 성공");

    } else if (id == "admin" && pwd == "admin"){
        alert("관리자 로그인 성공");

        window.localStorage.setItem('id', id);
        window.localStorage.setItem('pwd', pwd);
        
        window.localStorage.setItem('loginflg', 1);
        alert("로그인 성공");
    }
    else {
      alert("아이디 또는 비밀번호를 확인해주세요");
    }
}
  
  function logout() {
    alert("로그아웃 완료!")
    window.localStorage.setItem('loginflg', 0);
    // var loginNav = document.getElementById("loginNav");
    // confirmOnObj.style.display = "block";

    // var logoutNav = document.getElementById("logoutNav");
    // confirmOffObj.style.display = "none";
   
}




  

