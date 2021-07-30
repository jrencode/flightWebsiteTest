const addFlight = document.querySelector('.booking--btn');
const formContainer = document.querySelector('.booking--form-container');

let id = 0;

class Form {
    addForm = () => {
        let newId = id + 1;
        formContainer.innerHTML += `
            <div class="row" id=${newId+1}>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Date</label>
                        <div class="input-group date" data-provide="datepicker">
                        <input type="text" class="form-control">
                        <div class="input-group-addon">
                            <span class="glyphicon glyphicon-th"></span>
                        </div>
                    </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Time</label>
                        <select class="form-control">
                            <option>11:00 AM AST</option>
                            <option>12:00 NN AST</option>
                            <option>1:00 PM AST</option>
                            <option>2:00 PM AST</option>
                            <option>3:00 PM AST</option>
                            <option>4:00 PM AST</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Flight Duration</label>
                        <div class="input-group date">
                            <input type="text" class="form-control">
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-th"></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Age</label>
                        <div class="input-group date">
                            <input type="text" class="form-control">
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

    addFlight.addEventListener('click', () => {
        form.addForm();
    })
})

