// Reloj

$(document).ready(function(){
    
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format('h:mm:ss a');
            $('#reloj').html(reloj);
        }, 1000);
    };


// Slider

    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200, //Representa el tamaño de la imagen.
            responsive: true,
            pager: true
        });
    };

// Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: "Titulo de prueba 1",
                date: 'Publicado el día ' + moment().format('D') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut porttitor purus. Duis eget molestie arcu. In hac habitasse platea dictumst. Sed ultrices, magna eget suscipit tempus, sem mi fermentum ligula, rutrum ultricies ex sapien nec leo. Cras in urna eget massa maximus pretium. Integer convallis molestie neque non elementum. Curabitur congue ipsum sit amet porttitor aliquet. Donec ultrices est in tempus varius. Pellentesque in lacus orci. Vestibulum ultrices placerat risus, et maximus ex feugiat vel. Aenean condimentum risus erat, non viverra velit imperdiet nec. Etiam sem libero, auctor ac pulvinar et, blandit et est. Praesent dui erat, venenatis id laoreet non, suscipit eget est. Curabitur eget nunc consequat, auctor ipsum in, aliquet lacus."
            },
        
            {
                title: "Titulo de prueba 2",
                date: 'Publicado el día ' + moment().format('D') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut porttitor purus. Duis eget molestie arcu. In hac habitasse platea dictumst. Sed ultrices, magna eget suscipit tempus, sem mi fermentum ligula, rutrum ultricies ex sapien nec leo. Cras in urna eget massa maximus pretium. Integer convallis molestie neque non elementum. Curabitur congue ipsum sit amet porttitor aliquet. Donec ultrices est in tempus varius. Pellentesque in lacus orci. Vestibulum ultrices placerat risus, et maximus ex feugiat vel. Aenean condimentum risus erat, non viverra velit imperdiet nec. Etiam sem libero, auctor ac pulvinar et, blandit et est. Praesent dui erat, venenatis id laoreet non, suscipit eget est. Curabitur eget nunc consequat, auctor ipsum in, aliquet lacus."
            },
        
            {
                title: "Titulo de prueba 3",
                date: 'Publicado el día ' + moment().format('D') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut porttitor purus. Duis eget molestie arcu. In hac habitasse platea dictumst. Sed ultrices, magna eget suscipit tempus, sem mi fermentum ligula, rutrum ultricies ex sapien nec leo. Cras in urna eget massa maximus pretium. Integer convallis molestie neque non elementum. Curabitur congue ipsum sit amet porttitor aliquet. Donec ultrices est in tempus varius. Pellentesque in lacus orci. Vestibulum ultrices placerat risus, et maximus ex feugiat vel. Aenean condimentum risus erat, non viverra velit imperdiet nec. Etiam sem libero, auctor ac pulvinar et, blandit et est. Praesent dui erat, venenatis id laoreet non, suscipit eget est. Curabitur eget nunc consequat, auctor ipsum in, aliquet lacus."
            },
        
            {
                title: "Titulo de prueba 4",
                date: 'Publicado el día ' + moment().format('D') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut porttitor purus. Duis eget molestie arcu. In hac habitasse platea dictumst. Sed ultrices, magna eget suscipit tempus, sem mi fermentum ligula, rutrum ultricies ex sapien nec leo. Cras in urna eget massa maximus pretium. Integer convallis molestie neque non elementum. Curabitur congue ipsum sit amet porttitor aliquet. Donec ultrices est in tempus varius. Pellentesque in lacus orci. Vestibulum ultrices placerat risus, et maximus ex feugiat vel. Aenean condimentum risus erat, non viverra velit imperdiet nec. Etiam sem libero, auctor ac pulvinar et, blandit et est. Praesent dui erat, venenatis id laoreet non, suscipit eget est. Curabitur eget nunc consequat, auctor ipsum in, aliquet lacus."
            },
        
            {
                title: "Titulo de prueba 5",
                date: 'Publicado el día ' + moment().format('D') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut porttitor purus. Duis eget molestie arcu. In hac habitasse platea dictumst. Sed ultrices, magna eget suscipit tempus, sem mi fermentum ligula, rutrum ultricies ex sapien nec leo. Cras in urna eget massa maximus pretium. Integer convallis molestie neque non elementum. Curabitur congue ipsum sit amet porttitor aliquet. Donec ultrices est in tempus varius. Pellentesque in lacus orci. Vestibulum ultrices placerat risus, et maximus ex feugiat vel. Aenean condimentum risus erat, non viverra velit imperdiet nec. Etiam sem libero, auctor ac pulvinar et, blandit et est. Praesent dui erat, venenatis id laoreet non, suscipit eget est. Curabitur eget nunc consequat, auctor ipsum in, aliquet lacus."
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                <article>
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>

                    <button href="#" class="button-more">Leer más</button>

                </article>
            `;

            $("#posts").append(post);
        
        });
        
    }

// Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr('href', 'css/green.css');
    });

    $("#to-red").click(function(){
        theme.attr('href', 'css/red.css');
    });

    $("#to-blue").click(function(){
        theme.attr('href', 'css/blue.css');
    });

// Validación
    if(window.location.href.indexOf('contact') > -1){
        
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang: 'es'
        });
    };

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("Name", form_name);

        var form_email = $("#form_email").val();
        localStorage.setItem("Email", form_email);
    });

    var form_name = localStorage.getItem("Name");
    var form_email = localStorage.getItem("Email");

    if(form_name != null && form_name != "undefined" && form_email != null && form_email != "undefined"){
        var about_parrafo1 = $("#about p");
        var about_parrafo2 = $("#about p");
        about_parrafo1.html("<br><strong>Bienvenido, "+form_name+"</strong><br>");
        about_parrafo2.append("<strong>Su correo es: "+form_email+"</strong>");
        about_parrafo2.append("<a href='#' id='logout'>Cerrar Sesión</a>");

        $("#login").hide();
        
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    };

    if(window.location.href.indexOf('about') > -1){
            $( "#acordeon" ).accordion();
    };
});