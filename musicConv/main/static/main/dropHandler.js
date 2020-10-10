const audioFileExtensions = ["mp3", "wav", "wma", "webm", "m4p", "wv"];

function updateTitleAndIcon(file) {
    if(!file) {
        return
    }
    if(!audioFileExtensions.includes(file.name.split('.').pop())) {
      window.alert('Please upload correct audio file!');
      return;
    }
    let title = document.getElementsByClassName("title");
    console.log(title[0].children);
    console.log(title[0].children[0].innerHTML);

    title[0].children[0].innerHTML = file.name;

    console.log(title[0].children[0].innerHTML);

    let upload_icon = document.getElementsByClassName("upload-icon");
    upload_icon[0].src = "https://img.icons8.com/ios-glyphs/452/apple-music.png"
    if(upload_icon[0] && upload_icon[0].style) {
        upload_icon[0].style.marginTop = "18px";
        upload_icon[0].style.height = "50px";
        upload_icon[0].style.width = "50px";
    }

    if(document.getElementsByClassName('upload-input')[0].files.length == 0) {
        console.log("File is empty");
    }
}

function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  // ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
        updateTitleAndIcon(file);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      // updateTitleAndIcon(ev.dataTransfer.files[i]);
    }
  }
}

function selectedFileHandler() {
  selectedFile = document.getElementsByClassName('upload-input')[0].files[0];
  console.log('in selectedFileHandler');
  updateTitleAndIcon(selectedFile);
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone');
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  ev.stopPropagation();
}