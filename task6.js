// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_-+=<>?/{}~";
  
    const allChars =
      uppercase + lowercase + numbers + special;
  
    let password = "";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(random);
    }
  
    return password;
  }

  const passwordLength = 15;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  