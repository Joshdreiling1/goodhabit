module.exports = {

    checkPhoneNumber(num) {
        let arr = num.split("")
        console.log(arr)
          console.log(arr.length)
          if (arr.length > 10 || arr.length < 10) {
            return 'Incorrect phone number';
          }
      },
      phoneNumberFormat(num) {
        let arr = num.split('');
        arr.splice(3, 0, '-');
        arr.splice(7, 0, '-');
        let correctNumber = arr.join('');
        return correctNumber;
      },

      firstName(input) {
        if(input === '' ) {
          return ("Please insert first name")
        } else if (input === "Please insert first nam") {
          return " "
        } else {
          return input
        }
      },

      lastName(input) {
        if(input === '') {
          return ("Please insert last name")
        } else if (input === "Please insert last nam") {
          return " "
        } else {
        return input
        }
      },

      username(input) {
        if(input === '') {
          return ("Please insert username")
        } else if (input === "Please insert usernam") {
          return " "
        } else {
        return input
        }
      },

      about(input) {
        if(input === "") {
          return ("Please insert something about yourself")
        } else if (input === "Please insert something about yoursel") {
          return " "
        } else {
          return input
        }
      }

      // about(input) {
      //   let arr = input.split(',');
      //   if(arr.length < 50) {
      //     return false
      //   }
      //   else {
      //   return true
      //   }
      // },

      // validateEmail(mail) {
      //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      //     return (true)  
      //   }  
           
      //     return (false)
      //   }
      
}