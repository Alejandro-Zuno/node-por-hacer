const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada la tarea pendiente'
    }
}
const argv = require('yargs')
    .command('listar', 'Lista todas las tareas por hacer')
    .command('crear', 'crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts2)
    .command('borrar', 'Elimina una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}