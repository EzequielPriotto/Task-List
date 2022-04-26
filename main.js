Vue.createApp({
  data() {
    return {
      taskList: [{
        name: "Tarea de prueba",
        details: "esto es una tarea de ",
        date: "2003-07-18",
        complete: false,
        color: "#b9ef94"
      }],
      taskName: "",
      taskDetails: "",
      taskDate: "",
      
      typeTaskName: "",
      typeTaskColor: "#b9ef94",
      listTypeOfTask: [{
        type: "hogar",
        color: "#b9ef94"
      }],
      
      nombreInput: "",
      detallesInput: "",
      fechaInput: "",
      typesTaskArray: []
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
    openModal(tarea) {
     this.nombreInput = tarea.name
     this.detallesInput = tarea.details
     this.fechaInput = tarea.date
    },
    editTask(){

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