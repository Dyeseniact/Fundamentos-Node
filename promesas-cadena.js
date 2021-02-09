const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Ana'
    },
    {
        id: 3,
        nombre: 'Tomas'
    }
];

const salarios = [
    {
        id: 1,
        salario: '800'
    },
    {
        id: 2,
        salario: '1000'
    },
    {
        id: 3,
        salario: '5000'
    }
];

const getEmpleado = ( id , callback ) => {
    
    const promesa = new Promise ((resolve, rejact) => {

        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        (empleado)
            ?resolve(empleado)
            :rejact(`No existe el empleado con id ${id}.`);
        

    });
    return promesa;
    
}

const getSalrio = ( id , callback ) => {
    
    const promesa = new Promise ((resolve, rejact) => {

        const salario = salarios.find( (e) => e.id === id)?.salario;

        (salario)
            ?resolve(salario)
            :rejact(`No existe el salario con id ${id}.`);
        

    });
    return promesa;
    
}
const id = 10;

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalrio(id)
    })
    .then( salario => console.log('El empleado: ', nombre,'tiene un salario de: ', salario))
    .catch(err => console.log(err));
    