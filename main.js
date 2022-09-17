let nombreUsuario=prompt('Ingrese su nombre de usuario')

if(confirm('Eres administrador?')){

    var pass=prompt('¿Cual es la contraseña?')
    
    if(pass==='admin'){
        alert(`Bienvenido ${nombreUsuario}, eres administrador!`)
        document.write(`<p>Bienvenido ${nombreUsuario}, eres administrador!</p>`)
    }else{
        alert('Contraseña incorrecta \nIntentos disponibles: 1')

        if(prompt('¿Cual es la contraseña? \n...pss, es admin')==='admin'){
            alert(`Bienvenido ${nombreUsuario}, eres administrador!`)
            document.write(`<p>Bienvenido ${nombreUsuario}, eres administrador!</p>`)
        }else{
            alert('Contraseña incorrecta :P \nIntentos disponibles: 0 \nSu usuario será bloqueado por 30 dias.')
        }
    }

}else{
    alert(`${nombreUsuario} eres visitante, bienvenido!`)
    document.write(`<p>${nombreUsuario} eres visitante, bienvenido!<p>`)
}