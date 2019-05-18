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
const appScreenshot = document.getElementById("app-screenshot");

const downloadUrls = {
  windows:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-win32-x64-squirrel-1.1.0.zip",
  windows32:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-win32-ia32-squirrel-1.1.0.zip",
  mac:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-darwin-x64-1.1.0.zip",
  deb:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/gb-studio_1.1.0_amd64.deb",
  rpm:
    "https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/gb-studio-1.1.0.x86_64.rpm"
};

if (downloadBtn) {
  switch (OSName) {
    case "Windows":
      downloadBtn.innerHTML = "Download for Windows";
      appScreenshot.src = "/img/screenshot_win.png";
      if (
        navigator.userAgent.indexOf("WOW64") != -1 ||
        navigator.userAgent.indexOf("Win64") != -1
      ) {
        downloadBtn.innerHTML = "Download for Windows 64-bit";
        downloadBtn.href = downloadUrls.windows;
      } else {
        downloadBtn.innerHTML = "Download for Windows 32-bit";
        downloadBtn.href = downloadUrls.windows32;
      }
      break;
    case "MacOS":
      downloadBtn.innerHTML = "Download for macOS";
      downloadBtn.href = downloadUrls.mac;
      appScreenshot.src = "/img/screenshot.png";
      break;
    case "Linux":
      downloadBtn.innerHTML = "Download for Ubuntu";
      downloadBtn.href = downloadUrls.deb;
      const redhatDownloadBtn = document.createElement("a");
      redhatDownloadBtn.className = "homepage-landing__button";
      redhatDownloadBtn.innerHTML = "Download for Redhat";
      redhatDownloadBtn.href = downloadUrls.rpm;
      downloadBtn.parentNode.insertBefore(redhatDownloadBtn, downloadLink);
      appScreenshot.src = "/img/screenshot.png";
      break;
    default:
      downloadBtn.innerHTML = "Download GB Studio";
      appScreenshot.src = "/img/screenshot.png";
  }
}
