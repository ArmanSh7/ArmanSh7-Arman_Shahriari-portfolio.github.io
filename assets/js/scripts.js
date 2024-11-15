window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    //var status = document.getElementById("status");
    var statusParent =document.body.getElementsByClassName("status")
    // Success and Error functions for after the form is submitted
  
    function success() {
        form.reset();
        const statusElement = statusParent[0];
      
        // Add success styles
        statusElement.classList.add("success-card");
        statusElement.innerHTML = "I will do my best to get back to you as I can!";
      
        // Remove the message after 5 seconds
        setTimeout(() => {
          statusElement.classList.remove("success-card");
          statusElement.innerHTML = "";
        }, 5000);
      }
  
    function error() {
      statusParent[0].classList.add("error");
      statusParent[0].innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  