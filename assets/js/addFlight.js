const addFlight = document.querySelector('.booking--btn');

const formContainer = document.querySelector('.booking--form-container');



class Form {
    addForm = (newId, dateInput, selectedTime, duration, age ) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        

        var dateObj = new Date();
        var mName = monthNames[dateObj.getMonth()];
        console.log(mName);
        var month = monthNames[dateObj.getUTCMonth() + 1]; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newDate = `${mName} ${day}, ${year}`;
        console.log(`${newDate}`);
        console.log(`form ID: ${newId}`);
        console.log(new Date());

        
        formContainer.innerHTML += `
            <div class="row" id=${newId}>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Date</label>
                        <div class="input-group date" data-provide="datepicker">
                            <input type="text" class="form-control input" id="my_hidden_input" value="${dateInput}"placeholder="${dateInput}">
                            <div class="input-group-addon">
                                <i style="color: #fdbe13;" class="far fa-calendar-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Time</label>
                        <select class="form-control" value=${selectedTime} placeholder=${selectedTime}>
                            <option>11:00AM AST</option>
                            <option>12:00NN AST</option>
                            <option>1:00PM AST</option>
                            <option>2:00PM AST</option>
                            <option>3:00PM AST</option>
                            <option>4:00PM AST</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Flight Duration</label>
                        <div class="input-group date" data-provide="datepicker">
                            <input type="text" class="form-control" value=${duration} placeholder=${duration}>
                                <div class="input-group-addon">
                                    <i style="color: #fdbe13;" class="far fa-clock"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Age</label>
                        <div class="input-group date">
                            <input type="text" class="form-control" value=${age} placeholder=${age}>
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-th"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}


document.addEventListener("DOMContentLoaded", () => {



    const form = new Form();
    let id = formContainer.children.length + 1;

    $(".date").datepicker().on('changeDate', (e) => {
        console.log(e);
    })

    addFlight.addEventListener('click', () => {
        const dateInput = document.querySelector('.date-input');
        const durationInput = document.querySelector('.duration-input');
        const ageInput = document.querySelector('.age-input');

        let selectedTime = document.querySelector('.selected-time');

        let newId = formContainer.children.length + id;

        form.addForm(newId, dateInput.value, selectedTime.value, durationInput.value, ageInput.value);
        $('.date').datepicker({
            format: "DD - MM dd, yyyy",
        });
        
        console.log(dateInput.value);
        console.log(selectedTime.value);
    })
    console.log($(".date").datepicker());
    
})

