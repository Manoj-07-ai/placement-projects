document.getElementById('Submit').addEventListener('click',function(m)
{
    m.preventDefault();
    const user=document.getElementById('username').value
    const pass=document.getElementById('password').value
    const message=document.getElementById('result')

    if(user==='Student' && pass==='1234!@#$qwer')
    {
        message.textContent = 'Login successful'
        message.className = 'success'
    }
    else
    {
        message.textContent='*Invalid credentials'
        message.className = 'failed'
    }
})