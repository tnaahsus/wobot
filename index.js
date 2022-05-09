const selection = (e) => {
  for (let i = 1; i < 6; i++) {
    if (document.getElementById(i).classList.contains("selected")) {
      document.getElementById(i).classList.add("boxInputValue");
      document.getElementById(i).classList.remove("selected");
    }
  }
  document.getElementById(e).classList.remove("boxInputValue");
  document.getElementById(e).classList.add("selected");
};
