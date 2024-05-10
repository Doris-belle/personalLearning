# personalLearning
for git


ED: https://spaces.pfizer/franklin/websites/migrainecarecom 
Github: https://github.com/pfizer/migrainecarecom 
SharePoint：https://pfizer.sharepoint.com/sites/adobesitemigrainecarecom 

document.addEventListener('DOMContentLoaded', (event) => {
  if(window.location.pathname !== '/yao') {
    const floatingButton = document.createElement('div');
    floatingButton.id = 'floating-button';
    floatingButton.innerHTML = '<a href="/yao">点击我</a>';
    floatingButton.style.position = 'fixed';
    floatingButton.style.bottom = '20px';
    floatingButton.style.right = '20px';
    floatingButton.style.padding = '10px';
    floatingButton.style.backgroundColor = '#007bff';
    floatingButton.style.color = '#ffffff';
    floatingButton.style.borderRadius = '5px';
    floatingButton.style.zIndex = '1000';
    document.body.appendChild(floatingButton);
  }

});
