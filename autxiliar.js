Vue.createApp({
    data() {
      return {
        taskName: "",
        taskDetails: "",
        taskDate: "",
        taskList: [{
          name: "Tarea de prueba",
          details: "esto es una tarea de ",
          date: "2003-07-18",
          complete: false
        }],
        typeTaskName: "",
        typeTaskColor: "#b9ef94",
        listTypeOfTask: [{
          type: "hogar",
          color: "#b9ef94"
        }]
      }
    },
    methods: {
      addTask() {
        if (this.taskName != "" && this.taskDetails != "" && this.taskDate != "") {
          let taskListTemp = {
            name: this.taskName,
            details: this.taskDetails,
            date: this.taskDate,
            complete: false
          }
          Swal.fire(
            'Tarea agregada con exito',
            "ya puede verla en su lista de tareas!",
            'success'
          )
            .then(() => {
              this.taskList.push(taskListTemp);
              console.log(this.taskDate)
              this.taskName = "";
              this.taskDetails = "";
              this.taskDate = ""
            })
  
        }
        else {
          Swal.fire(
            'Algo salio mal',
            'Asegurate de tener todos los campos completados!',
            'error'
          )
        }
      },
      changeStatus(tarea) {
        tarea.complete = tarea.complete ? false : true
  
      },
      deleteTask(tarea) {
        Swal.fire({
          title: 'Estas seguro de borrar la tarea?',
          text: "No podras recuperarla!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado!',
              'Su tarea ya no esta mas',
              'success'
            )
            this.taskList = this.taskList.filter(task => task != tarea)
          }
        })
  
      },
      editTask(tarea) {
        Swal.fire({
          title: 'Mas detalles de la tarea',
          html:
            ` 
                    <section>
                      <div class="form-floating mb-2">
                          <textarea class="form-control" placeholder="ingrese el nombre de su tarea"
                              id="nameInput">${tarea.name}</textarea>
                          <label for="nameInput">Nombre</label>
                      </div>
                      <div class="form-floating mb-2">
                          <textarea class="form-control" placeholder="ingrese detalles de la tarea"
                              id="detailsInput"> ${tarea.details}</textarea>
                          <label for="detailsInput">Detalles</label>
                      </div>
                      <div class="form-floating mb-2">
                          <input type="date" class="form-control" placeholder="ingrese la fecha limite de la tarea"
                              id="dateInput" value=${tarea.date}></input>
                          <label for="dateInput">Fecha para realizar</label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                        </label>
                      </div>
                  </section>
  
                    `,
          focusConfirm: false,
          preConfirm: () => {
            let taskTemp = {
              name: document.getElementById("nameInput").value,
              details: document.getElementById("detailsInput").value,
              date: document.getElementById("dateInput").value,
              complete: tarea.complete
            }
            this.taskList[this.taskList.indexOf(tarea)] = taskTemp
          }
        })
      },
      addTypeTask(event) {
        event.preventDefault();
        let typeTaskAux = {
          "type": this.typeTaskName,
          "color": this.typeTaskColor
        }
        this.listTypeOfTask.push(typeTaskAux)
        this.typeTaskName = ""
      }
    },
  }).mount('#app')





