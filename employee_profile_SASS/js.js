// Function to open the modal
function openEditdetails() {
  document.getElementById("myModal").style.display = "block";
}
function openEditprofile() {
  document.getElementById("editProfile").style.display = "block";
}





// Function to close the modal
function closeEditdetails() {
  document.getElementById("myModal").style.display = "none";
}
function closeEditprofile() {
  document.getElementById("editProfile").style.display = "none";
}





// Function to the 3 btn
function toggleDescription() {
  var descriptions = document.getElementById("discription");
  if (descriptions.style.display === "none") {
    descriptions.style.display = "block";
  } else {
    descriptions.style.display = "none";
  }
}
// function toggleDescription() {
//   var description = document.getElementById("kpi-discription");
//   if (description.style.display === "none") {
//     description.style.display = "block";
//   } else {
//     description.style.display = "none";
//   }
// }

// function toggleDescriptionMore() {
//   var description = document.getElementById("more-discription");
//   if (description.style.display === "none") {
//     description.style.display = "block";
//   } else {
//     description.style.display = "none";
//   }
// }

function closeDetails() {
  // document.getElementById("about-discription").style.display = "none";
  // document.getElementById("kpi-discription").style.display = "none";
  document.getElementById("discription").style.display = "none";

}




// Function to the dark-mode
function call(name) {
    return document.querySelector(name);
  }
  
  const night = call("#dark");
  const light = call("#light");
  
  night.addEventListener("click", () => {
    night.style.display = "none";
    light.style.display = "block";
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  });
  
  light.addEventListener("click", () => {
    night.style.display = "block";
    light.style.display = "none";
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("theme");
  });
  
  function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");
  
    if (localStorageTheme !== null && localStorageTheme === "dark-theme") {
      document.body.classList.add("dark-theme");
    }
  }
  
  checkTheme();






  // ------- for the see more and les in certificate ------

  function toggleContent(divId) {
    var content = document.getElementById("content-" + divId);
    var a = document.getElementById("toggle-btn-" + divId);

    if (content.style.display === "none") {
        content.style.display = "block";
        a.innerHTML = "SHOW LESS";
    } else {
        content.style.display = "none";
        a.innerHTML = "SHOW MORE";
    }
}


  // ------- for the see more and les in supervisor ------

  function toggleMembers(divId) {
    var show_members = document.getElementById("content-" + divId);
    var button = document.getElementById("toggle-btn-" + divId);

    if (show_members.style.display === "none") {
        show_members.style.display = "block";
        button.innerHTML = "SHOW LESS MEMBERS";
    } else {
        show_members.style.display = "none";
        button.innerHTML = "SHOW ALL MEMBERS";
    }
}


// -------------- for the dowload of the certificate ----------------

function confirmDownload() {
  // Show a confirmation alert
  const confirmation = confirm('Do you want to download the file?');

  // If the user confirms, initiate the download
  if (confirmation) {
      downloadFile();
  }
}

function downloadFile() {
  // Create a new element anchor link
  const link = document.createElement('a');

  // Set the file URL
  link.href = 'path/to/your/file.ext';

  // Set the file name
  link.download = 'filename.ext';

  // Append the anchor link to the document body
  document.body.appendChild(link);

  // Simulate a click on the anchor link
  link.click();

  // Remove the anchor link from the document body
  document.body.removeChild(link);

  // Show a download completed alert
  alert('File download completed!');
}

// Attach the click event listener to the download button
const downloadBtn = document.getElementById('download-btn');
const downloadBtn1 = document.getElementById('download-btn1');
const downloadBtn2 = document.getElementById('download-btn2');
const downloadBtn3 = document.getElementById('download-btn3');
const downloadBtn4 = document.getElementById('download-btn4');
const downloadBtn5 = document.getElementById('download-btn5');
downloadBtn.addEventListener('click', confirmDownload);
downloadBtn1.addEventListener('click', confirmDownload);
downloadBtn2.addEventListener('click', confirmDownload);
downloadBtn3.addEventListener('click', confirmDownload);
downloadBtn4.addEventListener('click', confirmDownload);
downloadBtn5.addEventListener('click', confirmDownload);

