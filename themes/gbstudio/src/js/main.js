import styles from "./../css/main.css";

let OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (
  navigator.appVersion.indexOf("Mac") != -1 &&
  navigator.appVersion.indexOf("iPhone") == -1 &&
  navigator.appVersion.indexOf("iPad") == -1
)
  OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (
  navigator.appVersion.indexOf("Linux") != -1 &&
  navigator.appVersion.indexOf("Android") == -1
)
  OSName = "Linux";

const downloadBtn = document.getElementById("download-btn");
const downloadLink = document.getElementById("download-link");

const downloadUrls = {
  windows:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/GB.Studio-win32-x64-squirrel-1.0.0.zip",
  mac:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/GB.Studio-darwin-x64-1.0.0.zip",
  deb:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/gb-studio_1.0.0_amd64.deb",
  rpm:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.0.0/gb-studio-1.0.0.x86_64.rpm"
};

if (downloadBtn) {
  switch (OSName) {
    case "Windows":
      downloadBtn.innerHTML = "Download for Windows";
      downloadBtn.href = downloadUrls.windows;
      break;
    case "MacOS":
      downloadBtn.innerHTML = "Download for macOS";
      downloadBtn.href = downloadUrls.mac;
      break;
    case "Linux":
      downloadBtn.innerHTML = "Download for Ubuntu";
      downloadBtn.href = downloadUrls.deb;
      const redhatDownloadBtn = document.createElement("a");
      redhatDownloadBtn.className = "homepage-landing__button";
      redhatDownloadBtn.innerHTML = "Download for Redhat";
      redhatDownloadBtn.href = downloadUrls.rpm;
      downloadBtn.parentNode.insertBefore(redhatDownloadBtn, downloadLink);
      break;
    default:
      downloadBtn.innerHTML = "Download GB Studio";
  }
}
