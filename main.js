
const form = document.getElementById('consultationForm');

if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    // Replace with your Google Apps Script URL
    const scriptURL = 'PASTE_GOOGLE_SCRIPT_URL_HERE';

    try{
      await fetch(scriptURL,{
        method:'POST',
        body:new FormData(form)
      });

      window.location.href='thankyou.html';
    }catch(err){
      alert('Unable to submit form.');
    }
  });
}
