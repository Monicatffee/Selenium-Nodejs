Funcionamiento 
Para este ejemplo, se usa el paquete SheetJS js-xlsx para la manipulación de archivos Excel, y Selenium-webdriver para la automatización de funciones básicas.
Se accede a un archivo de Excel y por medio del navegador (En este caso Firefox) se registra en un formulario información extraída desde el archivo de Excel.
Para hacer más fácil la prueba del ejemplo, se proporcionan credenciales de prueba.
Instalación
Este proyecto se prueba a partir de la version v6.10.0  ya que las versiones anteriores de Node pueden ser compatibles, pero no se han probado ni verificado.
Node.JS: Instale desde el sitio: https://nodejs.org/en/ tome la versión LTS según su sistema operativo. Asegúrese de instalar NodeJS a nivel global. Si tiene nvm instalado globalmente, ejecute nvm install para obtener la última versión del Node. Si no usa nvm, asegúrese de estar usando una versión compatible. Se pueden encontrar más detalles sobre nvm en la página oficial de GitHub . 
Una vez finalizada la instalación, abra el terminal (macOS) o el símbolo del sistema (para el sistema operativo Windows) y escriba el siguiente comando para verificar que NodeJS se haya instalado correctamente.
node –version 
npm --version
El comando anterior debe imprimir la versión que ha instalado.

Selenium-webdriver: Podrá encontrar toda la documentación en https://www.npmjs.com/package/selenium-webdriver
Debe descargar unos componentes adicionales que dependerán del navegador que quiera usar para las pruebas y adicionalmente colocarlos como variables del sistema. 


