const mixins = {
  methods: {

    /**
     * Mask the password by replacing characters with asterisks.
     * @param {*} password
     */
    maskPassword(password) {
      // Check if password is not empty
      if (password && password.length > 0) {
        // Return a string of asterisks of the same length as the password
        return '•'.repeat(password.length);
      } else {
        // Return an empty string if the password is empty
        return '';
      }
    },

    /**
     *
     * @param {*} fullName
     */
    initials(fullName) {
      // Create a array from fullName
      if (fullName.indexOf(" ") < 1) {
        return fullName.charAt(0).toUpperCase();
      } else {
        var arrName = fullName.split(" ");

        // Select the first letter of the name
        var iniName = fullName.charAt(0);

        // Select the first letter of the lastname
        var iniLname = arrName[1].charAt(0);

        // Return the initials
        return (iniName + iniLname).toUpperCase();
      }
    },

    /**
     * Copies the given value to the clipboard
     * @param {string} value - The value to copy to the clipboard
     */
    copyToClipboard(value) {
      if (!value) {
        console.error("No value provided to copy");
        return;
      }

      if (navigator.clipboard) {
        // Use modern clipboard API
        navigator.clipboard
          .writeText(value)
          .then(() => {
            console.log(`Copied to clipboard: ${value}`);
          })
          .catch((err) => {
            console.error("Failed to copy to clipboard:", err);
          });
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed"; // Prevent scrolling to the bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          console.log(`Copied to clipboard: ${value}`);
        } catch (err) {
          console.error("Failed to copy to clipboard:", err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    },

    /**
     *
     * @param {*} el
     */
    scrollTo(el) {
      var element = document.getElementById(el);
      var headerOffset = 100;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },

    /**
     *
     * @param {*} value
     */
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    /**
     *
     * @param {*} value
     */
    formattedText(value) {
      // Replace newline characters with <br> tags
      return value.replace(/\n/g, "<br>");
    },

    /**
     *
     * @param {*} partialValue
     * @param {*} totalValue
     */
    percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    },

    /**
     *
     * @param {*} maxDate
     */
    maxDate(maxDate) {
      let date = new Date();
      let now = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);

      //if same date
      if (now == maxDate) {
        return true;
      }

      //if now > max date
      if (now > maxDate) {
        return true;
      }
      return false;
    },

    /**
     *
     * @param {*} maxDate
     */
    countDay(maxDate) {
      let date = new Date();
      let now = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);

      let dt1 = new Date(now);
      let dt2 = new Date(maxDate);

      let result = Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
      );

      if (result < 0) {
        return 0;
      }

      return result;
    },
  },
};

export default mixins;
