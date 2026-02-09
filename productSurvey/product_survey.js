function submitFeedback(){
    alert('Thank you for your valuable feedback')
        document.getElementById('userName').innerHTML = u;
    document.getElementById('userAge').innerHTML = a;
    document.getElementById('userEmail').innerHTML = e;
    document.getElementById('userJob').innerHTML = j;
    document.getElementById('userDesignation').innerHTML = d;
    document.getElementById('userProductChoice').innerHTML = p;
    document.getElementById('userFeedback').innerHTML = f;
    document.getElementById('userInfo').style.display = 'block';

}

const u=document.getElementById('name').value;
const a=document.getElementById('age').value;
const e=document.getElementById('email').value;
const j = document.getElementById('job').value;
const d = document.getElementById('designation').value;
const p = document.getElementById('productType').value;
const f = document.getElementById('feedbackText').value;

const submitButton=document.getElementById('submitBtn');
submitButton.onclick=submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

