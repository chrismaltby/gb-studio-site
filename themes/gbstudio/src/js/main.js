import styles from "./../css/main.css";

let OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

const downloadBtn = document.getElementById("download-btn");
const downloadLink = document.getElementById("download-link");

if(downloadBtn) {
  switch(OSName) {
    case "Windows":
      downloadBtn.innerHTML = "Download for Windows";
      break;
    case "MacOS":
      downloadBtn.innerHTML = "Download for macOS";
      break;    
    case "Linux":
      downloadBtn.innerHTML = "Download for Ubuntu";
      const redhatDownloadBtn = document.createElement("a");
      redhatDownloadBtn.className = "homepage-landing__button";
      redhatDownloadBtn.innerHTML = "Download for Redhat"
      downloadBtn.parentNode.insertBefore(redhatDownloadBtn, downloadLink);
      break;            
  }
}