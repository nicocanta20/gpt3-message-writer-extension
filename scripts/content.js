// Declare new function
const insert = (content) => {
  const elements = document.getElementsByClassName('Am Al editable LW-avf tS-tW');

  if (elements.length === 0) {
    return;
  }
 
  const element = elements[0];

  // Grab the first p tag so we can replace it with our injection
  const pToRemove = element.childNodes[0];
  pToRemove.remove();

  // Split content by \n
  const splitContent = content.split('\n');

 // Wrap in p tags
  splitContent.forEach((content) => {
    const p = document.createElement('p');
  
    if (content === '') {
      const br = document.createElement('br');
      p.appendChild(br);
    } else {
      p.textContent = content;
    }
  
    // Insert into HTML one at a time
    element.appendChild(p);
  });


//if any p tags are empty, remove them
    const pTags = element.getElementsByTagName('p');
    for (let i = 0; i < pTags.length; i++) {
        if (pTags[i].textContent === '') {
            pTags[i].remove();
        }
        }




}



chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
			
      // Call this insert function
      const result = insert(content);
			
      // If something went wrong, send a failed status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);