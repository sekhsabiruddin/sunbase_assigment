

//add input filed function start here 

function addInputField() {
    var formBox = document.createElement("div");
    formBox.classList.add("form-box");

    var formBoxLabel = document.createElement("div");
    formBoxLabel.classList.add("form-box-label");
    formBox.appendChild(formBoxLabel);

    var label = document.createElement("label");
    label.textContent = "Sample Label";
    formBoxLabel.appendChild(label);

    var deleteButton = document.createElement("div");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener("click", function() {
     
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this field?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red", // Changed to red color
            cancelButtonColor: "#C1C1C1",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                formBox.remove(); 
                Swal.fire({
                    title: "Deleted!",
                    text: "Your filed has been deleted.",
                    icon: "success",
                    timer: 1500
                });
                 
            }
        });
    });
    formBoxLabel.appendChild(deleteButton);

    var inputBox = document.createElement("div");
    inputBox.classList.add("input-box");
    formBox.appendChild(inputBox);

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Sample Placeholder"); 
    inputBox.appendChild(input);

    document.querySelector(".right-form-inner").appendChild(formBox);
    Toastify({
        text: "Input field added successfully!",
        duration: 3000,
        close: true,
        gravity: "top",
    }).showToast();
}

//add input filed function end here


//seleted  filed function start here 

function addSelectField() {
    var formBox = document.createElement("div");
    formBox.classList.add("form-box");

    var formBoxLabel = document.createElement("div");
    formBoxLabel.classList.add("form-box-label");
    formBox.appendChild(formBoxLabel);

    var label = document.createElement("label");
    label.textContent = "Select";
    formBoxLabel.appendChild(label);

    var deleteButton = document.createElement("div");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener("click", function() {
      
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this field?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red", 
            cancelButtonColor: "#C1C1C1",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                formBox.remove(); 
                Swal.fire({
                    title: "Deleted!",
                    text: "Your filed has been deleted.",
                    icon: "success",
                    timer: 1500
                });
                 
            }
        });
    });
    formBoxLabel.appendChild(deleteButton);

    var inputBox = document.createElement("div");
    inputBox.classList.add("input-box");
    formBox.appendChild(inputBox);

    var select = document.createElement("select");
    var option1 = document.createElement("option");
    option1.textContent = "option 1";
    var option2 = document.createElement("option");
    option2.textContent = "option 2";
    var option3 = document.createElement("option");
    option3.textContent = "option 3";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    inputBox.appendChild(select);

    document.querySelector(".right-form-inner").appendChild(formBox);
    Toastify({
        text: "Select field added successfully!",
        duration: 3000,
        close: true,
        gravity: "top",
    }).showToast();
}
new Sortable(document.querySelector('.right-form-inner'), {
    animation: 150, 
    ghostClass: 'sortable-ghost' 
});

//seleted  filed function end here 

//text area  filed function start here
function addTextareaField() {
    var formBox = document.createElement("div");
    formBox.classList.add("form-box");

    var formBoxLabel = document.createElement("div");
    formBoxLabel.classList.add("form-box-label");
    formBox.appendChild(formBoxLabel);

    var label = document.createElement("label");
    label.textContent = "Textarea";
    formBoxLabel.appendChild(label);

    var deleteButton = document.createElement("div");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener("click", function() {
        // Show confirmation dialog using SweetAlert2
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this field?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red", // Changed to red color
            cancelButtonColor: "#C1C1C1",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                formBox.remove(); 
                Swal.fire({
                    title: "Deleted!",
                    text: "Your filed has been deleted.",
                    icon: "success",
                    timer: 1500
                });
                 
            }
        });
    });
    formBoxLabel.appendChild(deleteButton);

    var inputBox = document.createElement("div");
    inputBox.classList.add("input-box");
    formBox.appendChild(inputBox);

    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "75");
    textarea.setAttribute("rows", "7");
    textarea.setAttribute("placeholder", "Sample Placeholder"); // Add placeholder attribute
    inputBox.appendChild(textarea);

    document.querySelector(".right-form-inner").appendChild(formBox);

    // Display Toastify notification
    Toastify({
        text: "Textarea field added successfully!",
        duration: 3000,
        close: true,
        gravity: "top",
    }).showToast();
}

//text area  filed function end here

// Add event listeners
document.getElementById("input-btn").addEventListener("click", addInputField);
document.getElementById("select-btn").addEventListener("click", addSelectField);
document.getElementById("teatarea-btn").addEventListener("click", addTextareaField);


//save btn start here 
let saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
    let formData = [];
    let formBoxes = document.querySelectorAll(".form-box");
    formBoxes.forEach(formBox => {
        let data = {};
        let elementType = formBox.querySelector(".input-box > input") ? "input" :
                          formBox.querySelector(".input-box > select") ? "select" : "textarea";
        let label = formBox.querySelector(".form-box-label label").textContent;
        const id = Date.now() + Math.random().toString(36).substring(2, 8);
        data["id"] = id;
        data["type"] = elementType;
        data["label"] = label;
        if (elementType === "input") {
            let placeholder = formBox.querySelector(".input-box input").getAttribute("placeholder");
            data["placeholder"] = placeholder;
        } else if (elementType === "select") {
            let options = [];
            formBox.querySelectorAll(".input-box select option").forEach(option => {
                options.push(option.textContent);
            });
            data["options"] = options;
        } else if (elementType === "textarea") {
            let placeholder = formBox.querySelector(".input-box textarea").getAttribute("placeholder");
            data["placeholder"] = placeholder;
        }
        formData.push(data);
    });
    console.log(JSON.stringify(formData, null, 2));
    Swal.fire({
        icon: 'success',
        title: 'Data Saved Successfully!',
        text: 'Your form data has been saved.',
        timer: 1500
    });
});


//save btn end here 