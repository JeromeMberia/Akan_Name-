function output() {
  var day = parseInt(document.getElementById("day").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var gender =document.getElementById("gender").value;

  var day = new Date(year + "/" + month + "/" + day);
  var birthday = day.getDay();

  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (gender === "male") {
    alert('Your akan name is ' + maleNames[birthday]);
  }else if (gender === "female") {
    alert('Your name is ' + femaleName[birthday]);
  }else {
      alert("enter a proper gender")
  };
};
