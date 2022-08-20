let listaDeAlunos = ["Fernando","Kevin","Carla","Joyce","Monique"]

for (let index = 0; index < listaDeAlunos.length; index++) {
    console.log(index) 
    if (index == 0) {
        console.log("Zero localizado: " + listaDeAlunos[index])
      } else if ( index % 2 != 0 ){
        console.log("Número ímpar localizado: " + listaDeAlunos[index])
    } else {console.log("Número par localizado: " + listaDeAlunos[index])}
    }
