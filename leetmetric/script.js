document.addEventListener("DOMContentLoaded", function(){
    const searchButton= document.getElementById("search-button");
    const usernameInput= document.getElementById("user-input");
    const statContainer= document.querySelector(".stat-container");
    const easyProgressCircle= document.querySelector(".easy-progress");
    const mediumProgresscircle= document.querySelector(".medium-progress");
    const hardProgresscircle= document.querySelector(".hard-progress");
    const easyLabel= document.getElementById("easy-label");
    const mediumLabel= document.getElementById("medium-label");
    const hardLabel= document.getElementById("hard-label");
    const cardStatContainer= document.querySelector(".stats-cards");
   
    //return true or false based on regular expression
    function validateUsername(username){
        if(username.trim()=== ""){
            alert("Username should not be empty");
            return false;
        }
        const regex= /^[a-zA-Z0-9-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("invalid username");
        }
        return isMatching;
    }
    async function fetchUserDetails(username){
          const url= `https://leetcode-stats-api.herokuapp.com/${username}`;
          try{
            searchButton.textContent= "Searching...";
            searchButton.disabled=true;
            const response= await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch user details");
            }
            const data= await response.json();
            console.log("logging data",data);
            displayUserData(data);
          }
          catch(error){
           statContainer.innerHTML= `<p>${error.message}</p>`
          }
          finally{
            searchButton.textContent="Search";
            searchButton.disabled=false;
          }
    }

    function updateProgress(solved,total, label, circle){
      const progressDegree= total > 0 ? (solved/total)*100 : 0;
      circle.style.setProperty("--progress-degree",`${progressDegree}%`);
      label.textContent= `${solved}/${total}`;
    }
    function displayUserData(data){
        const totalQues = data.totalQuestions || 0;
        const totaleasy = data.totalEasy || 0;
        const EasyQues = data.easySolved || 0;
        const totalmedi = data.totalMedium || 0;
        const MediQues = data.mediumSolved || 0;
        const totalhard = data.totalHard || 0;
        const HardQues = data.hardSolved || 0;

        updateProgress(EasyQues,totaleasy,easyLabel,easyProgressCircle);
        updateProgress(MediQues,totalmedi,mediumLabel,mediumProgresscircle);
        updateProgress(HardQues,totalhard,hardLabel,hardProgresscircle);

        const cardData= [
            {label: "Overall Submissions", value:data.totalSolved}
        ];

        console.log("card ka data",cardData);

        cardStatContainer.innerHTML= cardData.map(
            data => {
                return `
                <div class="card">
                <h4>${data.label}</h4>
                <p>${data.value}</p>
                </div>
                `
            }
        )
        .join('');
    }
    searchButton.addEventListener('click',function(){
        const username= usernameInput.value
        console.log("Loggin username", username);
        if(validateUsername(username)){
        fetchUserDetails(username);
        }
    })


})