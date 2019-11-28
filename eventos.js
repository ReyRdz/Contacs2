window.onload = function(){
    document.addEventListener("deviceready",onDeviceReady,false);
};
 
// Cuando el dispositivo este listo
function onDeviceReady(){
    // accedemos a los eventos de Lungo
    Lungo.Events.init({
        // tap seria al pinchar en la pantalla
        // evento, seccion#id_elemento elemento hijo numero 2 del nav
        'tap section#form footer a:nth-child(2)': function(){
            guardarContacto();
    // Mostramos un notificacion, que en lungo son una delicia
            Lungo.Notification.success("Contactos","Contacto guardado","info");
            // La notificacion se ocultara a los 3 segundos
            setTimeout(Lungo.Notification.hide,3000);
        },
        // evento que se genera al mantener presionado
        'hold section#form footer a:nth-child(1)': function(){
            nuevoContacto();
        }
    });
}
function guardarContacto(){
    var nombres = document.getElementById("nombre").value + " " + document.getElementById("apellidos").value;
    var nota = document.getElementById("nota").value;
 
    // navigator.contacts.create esta en la documentacion de phonegap
    var contacto = navigator.contacts.create({
        "displayName" : nombres
    });
    contacto.note = nota;
    contacto.save();
}
 
function nuevoContacto(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("nota").value = "";
}