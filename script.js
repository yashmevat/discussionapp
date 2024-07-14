let submitbutton = document.getElementById("submitbutton")
let subject = document.getElementById("subject")
let question = document.getElementById("question")
let allquestions =document.getElementById("allquestions")
let right = document.getElementById("right")
newquestionform=document.getElementById("newquestionform")

let temp=""
let tempresponses=""
let clearAll=document.getElementById("clearAll")
allquestions.innerHTML=JSON.parse(localStorage.getItem("questions"))
submitbutton.addEventListener("click",function(e){
    e.preventDefault()
    var subvalue = subject.value
    var quesval = question.value
    var questionelement=`<div class="questionsAskedleft">
                            <h1 class="subjectques">${subvalue}</h1>
                            <p class="quesinner">${quesval}</p>
                        </div>`
if(subvalue && quesval){
    var temp=allquestions.innerHTML
    temp=temp+questionelement
    console.log(temp)
    localStorage.setItem("questions",JSON.stringify(temp))
    allquestions.innerHTML=JSON.parse(localStorage.getItem("questions"))
    subject.value=""
    question.value=""
}

})

allquestions.addEventListener("click",function(e){
   e.preventDefault()
   let newcontent = `<div class="questionsAskedright">
    <h1 class="subjectques">${e.target.parentNode.children[0].innerHTML}</h1>
    <p class="quesinner">${e.target.parentNode.children[1].innerHTML}</p>
     <button class="resolve btn btn-primary" id="resolve">Resolve</button>
</div>`;

right.innerHTML=newcontent
right.innerHTML+=`   <div id="responses"><h1 id="reshead">Response</h1></div>
                        <div class="container my-5">
                        <h1>Submit Response</h1>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="responsename"
                                    aria-describedby="emailHelp" placeholder="name">
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                    id="answer" style="height: 100px" noresize></textarea>
                                <label for="question">Question</label>
                            </div>
    
                            <button type="submit" id="submitresponse" class="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>`
let submitresponse = document.getElementById("submitresponse");
submitresponse.addEventListener("click",function(e){
    e.preventDefault()
   let resname= e.target.parentNode.children[0].children[0].value
   let restext= e.target.parentNode.children[1].children[0].value
   let responses= document.getElementById("responses")
   if(resname && restext){
       tempresponses=`<div class="res my-3">
        <h3 class="resname">${resname}</h3>
        <p class="restext">${restext}</p>
    </div>`
    tempresponses=responses.innerHTML + tempresponses;
    localStorage.setItem("res",JSON.stringify(tempresponses))
    responses.innerHTML=JSON.parse(localStorage.getItem("res"))
    
   }
e.target.parentNode.children[0].children[0].value=""
e.target.parentNode.children[1].children[0].value="";
})

let resolvebtn=document.getElementById("resolve");
let questionlist=document.querySelectorAll(".questionsAskedleft")
resolvebtn.addEventListener("click",function(e){
     Array.from(questionlist).forEach((item)=>{
            let temp1=item.children[0].innerHTML;
            let temp2=item.children[1].innerHTML;
            let temp3=e.target.parentNode.children[0].innerHTML
            let temp4=e.target.parentNode.children[1].innerHTML
            // console.log(temp1,temp3)
            // console.log(temp2,temp4)
            if(temp1==temp3 && temp2==temp4){
                item.remove()
                localStorage.setItem("questions",JSON.stringify(allquestions.innerHTML))
                allquestions.innerHTML=JSON.parse(localStorage.getItem("questions"))
            }
     })
})
})

newquestionform.addEventListener("click",function(e){
    e.preventDefault();
    right.innerHTML=`<div class="row">
                    <div class="col-md-12">
                        <div class="container my-5">
                        <h1>Welcome to discussion portal</h1>
                        <p>Enter your question to Get started!</p>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="subject"
                                    aria-describedby="emailHelp" placeholder="subject">
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                    id="question" style="height: 100px" noresize></textarea>
                                <label for="question">Question</label>
                            </div>
    
                            <button type="submit" id="submitbutton" class="btn btn-primary my-3" onclick="(e)>{e.preventDefault();}">Submit</button>
                        </form>
                    </div>
                    </div>
                    
                    <div class="col-md-12">
                        <div class="container">
                            asdgkj
                        </div>
                    </div>
                </div>`
})


clearAll.addEventListener("click",function(e){
    e.preventDefault();
    localStorage.removeItem("questions");
    allquestions.innerHTML=""
})
