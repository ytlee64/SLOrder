function action(result) {
    alert(result);
    menuheader='"<table width=200 border=1> \
    <tr> \
      <td>menu</td> \
      <td>id</td> \
    </tr> ';

    menufooter='</table>"';


    chrome.tabs.executeScript({
      code: 'document.querySelector("body").innerHTML='+menu
    });
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' green!');

  chrome.tabs.executeScript({
    code: 'document.querySelector("ul.CommentList").innerText'
  }, action);


});



