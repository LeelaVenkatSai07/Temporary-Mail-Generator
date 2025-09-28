function generateMail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  const email = randomString + "@tempmail.com";
  document.getElementById("email").innerText = `Your temporary email: ${email}`;
}
