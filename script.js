

// Corrected selectors and variable order
let profile = document.querySelector('.header .flex .profile');
let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#user-btn').onclick = () => {
  if (profile) {
    profile.classList.toggle('active');
  } else {
    console.warn('Element with class .profile not found.');
  }
  
  if (searchForm) {
    searchForm.classList.remove('active');
  } else {
    console.warn('Element with class .search-form not found.');
  }
};

document.querySelector('#search-btn').onclick = () => {
  if (searchForm) {
    searchForm.classList.toggle('active');
  } else {
    console.warn('Element with class .search-form not found.');
  }
  
  if (profile) {
    profile.classList.remove('active');
  } else {
    console.warn('Element with class .profile not found.');
  }
};
let sideBar = document.querySelector('.sidebar');
//let profile = document.querySelector('.profile');
let body = document.querySelector('body');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    profile.classList.remove('active');
    body.classList.toggle('active');
};



window.onscroll = () => {
  if (profile) {
    profile.classList.remove('active');
  } else {
    console.warn('Element with class .profile not found.');
  }

  if (searchForm) {
    searchForm.classList.remove('active');
  } else {
    console.warn('Element with class .search-form not found.');
  }
  window.onload = () => {
    let sideBar = document.querySelector('.sidebar');
    let profile = document.querySelector('.profile');
    let body = document.querySelector('body');

    document.querySelector('#menu-btn').onclick = () => {
        sideBar.classList.toggle('active');
        profile.classList.remove('active');
        body.classList.toggle('active');
      
}
  }
};


//let toggleBtn = document.querySelector('#toggle-btn');
//let darkMode = localStorage.getItem('dark-mode');

//const enabelDarkMode = () =>{
//toggleBtn.classList.replace('fa-sun , fa-moon');
//body.classList.add('dark');
//localStorage.setItem('dark-mode', 'enabled');
//}
//const disableDarkMode = () =>{
  //toggleBtn.classList.replace('fa-moon , fa-sun');
  //body.classList.remove('dark');
  //localStorage.setItem('dark-mode', 'disabled');
  //}
 //if(darkMode === 'enabled') {
 // enabelDarkMode();
 //}
  
 // toggleBtn.onclick =(e) =>{
 //    let darkMode = localStorage.getItem('dark-mode');
  //if(darkMode === 'disabled'){
  //  enabelDarkMode();
  //}else{
  //  disableDarkMode();
 // }
  
 // }
  
 let toggleBtn = document.querySelector('#toggle-btn');
 let darkMode = localStorage.getItem('dark-mode');
 
 const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   document.body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
 };
 
 const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   document.body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
 };
 
 if (darkMode === 'enabled') {
   enableDarkMode();
 }
 
 toggleBtn.onclick = () => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
     enableDarkMode();
   } else {
     disableDarkMode();
   }
 };
 
  
  






















