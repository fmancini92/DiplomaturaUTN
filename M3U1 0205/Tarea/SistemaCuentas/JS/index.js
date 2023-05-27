document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes agregar la lógica para validar las credenciales del usuario
    
    // Ejemplo básico de verificación
    if (username === "usuario" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a otra página después del inicio de sesión exitoso
    } else {
      alert("Credenciales inválidas");
    }
  });


  
  