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
        if(input === '') {
          return false
        }
        else {
        return true
        }
      },

      lastName(input) {
        if(input === '') {
          return false
        }
        else {
        return true
        }
      },

      username(input) {
        if(input === '') {
          return false
        }
        else {
        return true
        }
      },

      about(input) {
        if(input === "") {
          return false
        }
        else {
          return true
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