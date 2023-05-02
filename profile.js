function createEmployeeCard(employeeObject){
    let innerFlex = document.createElement("div");
    innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

    let cardDiv = document.createElement("div");
    innerFlex.append(cardDiv);
    cardDiv.classList.add("d-flex", "col-12", "profile-card");

    //カードに情報を埋めるためにユーザーの入力を使います。
    //***左半分***
    let leftInfo = document.createElement("div");
    leftInfo.classList.add("col-8", "py-3");

    let div1 = document.createElement("div");
    div1.classList.add("py-2");
    let div2 = div1.cloneNode(true);
    let div3 = div1.cloneNode(true);

    let nameTitle = document.createElement("h4");

    //nameTitleの中身
    nameTitle.innerHTML = employeeObject.getFullName();

    //スキル紹介などの中身
    let employeeJob = document.createElement("p");
    let employeeSkils = document.createElement("p");
    let employeeCountry = document.createElement("p");

    employeeJob.innerHTML = "job: " + "<br>" + employeeObject.job;
    div1.append(employeeJob);
    employeeSkils.innerHTML = "skils : " + "<br>" + employeeObject.skills;
    div2.append(employeeSkils);
    employeeCountry.innerHTML = "country : " + "<br>" + employeeObject.country;
    div3.append(employeeCountry);

    //leftInfoに格納
    leftInfo.append(nameTitle);
    leftInfo.append(div1);
    leftInfo.append(div2);
    leftInfo.append(div3);
    //***左半分修了***


    //***右半分の作成***
    let rightInfo = document.createElement("div");
    rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");

    let div4 = document.createElement("div");
    let avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = employeeObject.avatarUrl;

    div4.append(avatar);
    rightInfo.append(div4);
    //***右半分修了***

    cardDiv.append(leftInfo);
    cardDiv.append(rightInfo);

    return innerFlex;
}

const profileDiv = document.getElementById("profiles");

//クラスの作成
class employee{
    constructor(firstName, lastName, job, skills, country, avatarUrl){
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = skills;
        this.country = country;
        this.avatarUrl = avatarUrl;
    }

    getFullName(){
        return this.firstName + " " +this.lastName;
    }
}

//オブジェクトの登録
/*
let employee1 = new employee("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
let employee2 = new employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
let employee3 = new employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");
*/

let employee1 = new employee("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
let employee2 = new employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
let employee3 = new employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");


//append
profileDiv.append(createEmployeeCard(employee1));
profileDiv.append(createEmployeeCard(employee2));
profileDiv.append(createEmployeeCard(employee3));
