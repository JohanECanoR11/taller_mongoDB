/* Consulta para obtener un informe del rendimiento de un estudiante en todas las asignaturas en las que está inscrito. */

db.calificaciones.aggregate([
    {
        // Filtra los documentos para obtener solo las calificaciones del estudiante
        $match: {
            id_estudiante: ObjectId("66b5780ade7e56441de74397")
        }
    },
    {
        // Realiza un join con la colección "asignaturas" para obtener los detalles de la asignatura relacionada con la calificación
        $lookup: {
            from: "asignaturas",
            localField: "id_asignatura",
            foreignField: "_id",
            as: "asignatura"
        }
    },
    {
        $unwind: "$asignatura"
    },
    {
        // Se muestra el nombre de la asignatura y el promedio de las calificaciones
        $project: {
            "asignatura.nombre": 1,
            promedio: {
                $avg: ["$calificacion.nota_1", "$calificacion.nota_2"]
            }
        }
    }
])


/* Consulta para generar un informe sobre qué asignaturas dicta cada profesor. */

db.profesores.aggregate([
    {
        // Realiza un join con la colección "asignaturas" para obtener las asignaturas que dicta cada profesor
        $lookup: {
            from: "asignaturas",
            localField: "_id",
            foreignField: "id_profesor",
            as: "asignaturas"
        }
    },
    {
        // Mostramos solo el nombre, apellidos del profesor y los nombres de las asignaturas
        $project: {
            nombre: 1,
            apellidos: 1,
            "asignaturas.nombre": 1
        }
    }
])


/* Consulta para ver la popularidad de las asignaturas. */

db.estudiantes.aggregate([
    {
        // Descompone el arreglo "id_asignatura"
        $unwind: "$id_asignatura"
    },
    {
        // Agrupa los documentos por el id de la asignatura y cuenta el total de estudiantes en cada asignatura
        $group: {
            _id: "$id_asignatura",
            total_estudiantes: { $sum: 1 }
        }
    },
    {
        // Realiza un join con la colección "asignaturas" para obtener los detalles de cada asignatura
        $lookup: {
            from: "asignaturas",
            localField: "_id",
            foreignField: "_id",
            as: "asignatura"
        }
    },
    {
        // Descompone el arreglo "asignatura"
        $unwind: "$asignatura"
    },
    {
        // Mostramos solo el nombre de la asignatura y el total de estudiantes
        $project: {
            "asignatura.nombre": 1,
            total_estudiantes: 1,
            _id: 0
        }
    }
])


/* Consulta para evaluar el rendimiento general de los estudiantes en las asignaturas dictadas por un profesor en específico. */

db.calificaciones.aggregate([
    {
        // Realiza un join con la colección "asignaturas" para obtener los detalles
        $lookup: {
            from: "asignaturas",
            localField: "id_asignatura",
            foreignField: "_id",
            as: "asignatura"
        }
    },
    {
        // Descompone el arreglo "asignatura" en documentos individuales
        $unwind: "$asignatura"
    },
    {
        // Filtra los documentos correspondientes a un profesor en específico
        $match: {
            "asignatura.id_profesor": ObjectId("66ab03e77109862d5cb6aa8c")
        }
    },
    {
        // Agrupa los documentos por el id del profesor y calcula el promedio general de las calificaciones
        $group: {
            _id: "$asignatura.id_profesor",
            promedio_general: {
                $avg: { 
                    $avg: ["$calificacion.nota_1", "$calificacion.nota_2"]
                }
            }
        }
    }
])
