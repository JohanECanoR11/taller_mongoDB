db.estudiantes.insertMany([
    {
        nombre: "Alumno1",
        apellidos: "Apellido Alumno1",
        edad: 16,
        telefono: "3114567890",
        email: "alumno1@email.com",
        id_asignatura: [
            ObjectId("66ab091a7109862d5cb6aa91"),
            ObjectId("66ab091a7109862d5cb6aa92"),
            ObjectId("66ab091a7109862d5cb6aa93")
        ]
    },
    {
        nombre: "Alumno2",
        apellidos: "Apellido Alumno2",
        edad: 16,
        telefono: "3114567421",
        email: "alumno2@email.com",
        id_asignatura: [
            ObjectId("66ab091a7109862d5cb6aa94"),
            ObjectId("66ab091a7109862d5cb6aa95"),
            ObjectId("66ab091a7109862d5cb6aa91")
        ]
    },
    {
        nombre: "Alumno3",
        apellidos: "Apellido Alumno3",
        edad: 15,
        telefono: "3114486890",
        email: "alumno3@email.com",
        id_asignatura: [
            ObjectId("66ab091a7109862d5cb6aa92"),
            ObjectId("66ab091a7109862d5cb6aa91"),
            ObjectId("66ab091a7109862d5cb6aa95")
        ]
    },
    {
        nombre: "Alumno4",
        apellidos: "Apellido Alumno4",
        edad: 16,
        telefono: "31358567890",
        email: "alumno4@email.com",
        id_asignatura: [
            ObjectId("66ab091a7109862d5cb6aa93"),
            ObjectId("66ab091a7109862d5cb6aa92"),
            ObjectId("66ab091a7109862d5cb6aa91")
        ]
    },
    {
        nombre: "Alumno5",
        apellidos: "Apellido Alumno5",
        edad: 15,
        telefono: "3114567170",
        email: "alumno5@email.com",
        id_asignatura: [
            ObjectId("66ab091a7109862d5cb6aa95"),
            ObjectId("66ab091a7109862d5cb6aa94"),
            ObjectId("66ab091a7109862d5cb6aa93")
        ]
    }
])