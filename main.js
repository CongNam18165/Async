//Ví dụ về Promise
let inputElement = document.querySelectorAll(".input");
let calculatorBtn = document.querySelector(".button");
let resultCal = document.querySelector(".result");
let loading = document.querySelector(".loader")
calculatorBtn.addEventListener("click",function(){
    resultCal.innerHTML = ""; 
    const a = inputElement[0].value;
    const b = inputElement[1].value;
    function Calculator(a,b){
        return new Promise (function(resolve,reject){
             setTimeout(()=>{
                if(!isNaN(Number(a)) && !isNaN(Number(b))){
                    resolve( Number(a) + Number(b) )
                }else{
                    reject("Lỗi, hãy nhập 2 số")
                }
             },1000)
        })
    }

    loading.classList.remove("none")
    Calculator(a,b)
    .then (function(result){
        resultCal.innerHTML = `<p>Kết quả : ${result}</p>`  
    })
    .catch (function(mess){
        alert(mess)
    })
    .finally(function(){
        loading.classList.add("none")
    })
})
// Ví dụ về Async/Await.
// Hàm fetchData là hàm giả định call API,sau 1s sé lấy đc data
async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John Doe", age: 30, city: "New York" };
        return resolve(data);
      }, 2000);
    });
  }

  async function getUserData() {
    try {
      console.log("Đang lấy dữ liệu...");
      const userData = await fetchData(); // Chờ kết quả của hàm fetchData (Promise)
      console.log("Dữ liệu người dùng đã được lấy:", userData);
      return userData;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  }
  
  // Gọi hàm getUserData
  getUserData();
//   console.log(fetchData())