
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
    fullName.textContent = data.name
    sub.textContent = data.sub 
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)

  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "537600170391-nli1lb5rf4s4c5s97gd16ru74acp5a8d.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),{
       theme: "outline", 
        size: "large",  
        type:"standard",
        shape:"pill",
        text:"continue_with",
        locale:"en-US",
        logo_alignment:"center",
        width: "300"
    });
}