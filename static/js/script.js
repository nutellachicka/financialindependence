// this function hides the text that shows up whenever you choose "yes" or "no"
function show_emergency_info() {
  var emergency_fund = document.getElementById("emergency_fund");

  if (emergency_fund.checked == true) {
    document.getElementById("emergency_info_yes").style.display = 'block';
    document.getElementById("emergency_info_no").style.display = 'none';
  } else {
    document.getElementById("emergency_info_no").style.display = 'block';
    document.getElementById("emergency_info_yes").style.display = 'none';
  }
}
// this function brings up the hidden text that asks you whether you understand your monthly expenses and hides the other option
function show_monthly_expenses() {
  var monthly_expenses = document.getElementById("monthly_expenses")
  if (monthly_expenses.checked == true) {
    document.getElementById("monthly_expenses_info_yes").style.display = 'block';
    document.getElementById("monthly_expenses_info_no").style.display = 'none';
  } else {
    document.getElementById("monthly_expenses_info_no").style.display = 'block';
    document.getElementById("monthly_expenses_info_yes").style.display = 'none';
  }
}
// this function brings up content on page2 and hides page1 content
function show_page2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

function show_page3() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
}

function show_page4() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "block";
}

function show_company_accounts() {
  var sponsored_accounts = document.getElementById("company_accounts")
  if (company_accounts.checked == true) {
    document.getElementById("company_accounts_yes").style.display = "block";
    document.getElementById("company_accounts_no").style.display = "none";
  } else {
    document.getElementById("company_accounts_no").style.display = "block";
    document.getElementById("company_accounts_yes").style.display = "none";
  }
}

function show_page5() {
  document.getElementById("page4").style.display = "none";
  document.getElementById("page5").style.display = "block";
}
