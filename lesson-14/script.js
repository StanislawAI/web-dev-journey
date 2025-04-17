const userDataJSON = `{
    "name": "Sarah",
    "email": "sarah@example.com",
    "age": 27,
    "hobbies": ["coding", "painting", "hiking"],
    "address": {
      "street": "123 Elm Street",
      "city": "San Francisco",
      "zip": "94105"
    },
    "social": {
      "twitter": "@sarahcodes",
      "github": "sarahdev"
    }
  }`;



const userData = JSON.parse(userDataJSON);


const formatted = `
Name: ${userData.name}
Email: ${userData.email}
Age: ${userData.age}
Hobbies: ${userData.hobbies.join(", ")}

Address:
  ${userData.address.street}
  ${userData.address.city}, ${userData.address.zip}


Social:
Twitter: ${userData.social.twitter}
GitHub: https://github.com/${userData.social.github}

`;


document.getElementById("profile-output").innerText = formatted;