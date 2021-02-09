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
    const empleado = empleados.find( (e) => e.id === id)?.nombre;
    if(empleado){
        callback(null , empleado);
    }else{
        callback(`El empleado con id ${id} no existe`);
    }
    
}
getSalario = ( id , callback ) => {
    const salario = salarios.find( (e) => e.id === id)?.salario;
    if(salario){
        callback(null , salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
    
}

/*
getEmpleado(1, (err, empleado) => {

    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
});

getSalario(10, (err, salario) => {

    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Salario existe!');
    console.log(salario);
});*/
let id = 1;
getEmpleado(id, (err, empleado) => {

    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {

        if( err ){
            return console.log(err);
        }
        console.log('El empleado:',empleado, 'tiene un salario de: ', salario);

        
    });
});