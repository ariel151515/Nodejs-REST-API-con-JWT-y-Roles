import Role from './../models/Role.js'

export const createRoles = async () => {

    try {

        const count = await Role.estimatedDocumentCount() // estimatedDocumentCount() pregunta si en la loecciona ya existen documentos
        if (count > 0) return;
        // Promise.all ejecuta todas las funciones el mismo tiempo
        const values = await Promise.all([
            new Role({ name: 'user' }).save(), // crea un nuevo rol y lo guarda
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ])

        console.log(values)

    } catch (err) {
        console.err(err)
    }

}