(() => {
   /**
    * ## 🚀 Ejercicio: Sistema de Usuarios
   
   1. **Crea una interfaz `IUsuario`** que defina:
   
      * `id: number`
      * `nombre: string`
      * `email: string`
      * un método `mostrarInfo(): string` */

   interface IUsuario {
      id: number;
      nombre: string;
      email: string;
      mostraInformacion(): void;
   }
   /**
   2. **Crea una clase abstracta `UsuarioBase`** que:
   
      * Implemente la interfaz `IUsuario`.
      * Tenga constructor para inicializar `id`, `nombre` y `email`.
      * Tenga un método abstracto `rol(): string` que cada subclase deba implementar.
      * Implemente `mostrarInfo()` usando `template string`.*/

   abstract class UsuarioBase implements IUsuario {
      constructor(
         public id: number,
         public nombre: string,
         public email: string
      ) { }

      abstract rol(): string;

      public mostraInformacion(): void {
         console.log(`${this.id} - ${this.nombre} - ${this.email}`);
      }
   }

   /**
   4. **Crea un decorador de clase `ConFechaCreacion`** que agregue automáticamente una propiedad `fechaCreacion` con la fecha actual.
   */

   function ConFechaCreacion<T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
         fechaCreacion = new Date(); // agrega propiedad
      };
   }


   /**
   5. **Crea un decorador de método `LogMetodo`** que imprima en consola:
      * el nombre del método
      * los argumentos recibidos
      * el valor retornado
   */

   function LogMetodo() {
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
         const metodoOriginal = descriptor.value; // guardamos la función original

         descriptor.value = function (...args: any[]) {
            console.log(`Llamando a: ${propertyKey}`);
            console.log(`Argumentos:`, args);

            const resultado = metodoOriginal.apply(this, args); // llamamos al método original

            console.log(`Valor retornado:`, resultado);
            return resultado;
         }
      }
   }


   /**
      3. **Crea dos clases que extiendan de `UsuarioBase`**:
   
      * `Admin` → su rol debe devolver `"Administrador"`.
      * `Cliente` → su rol debe devolver `"Cliente"`.  */

   @ConFechaCreacion
   class Admin extends UsuarioBase {
      rol(): string {
         return 'Administrador'
      }

      @LogMetodo()
      test(text: string): string {
         return text
      }
   }

   @ConFechaCreacion
   class Cliente extends UsuarioBase {
      rol(): string {
         return 'Cliente'
      }
   }


   /**
   6. **Instancia un `Admin` y un `Cliente`**, llama a sus métodos, y verifica que:
   
      * tienen `fechaCreacion`
      * se loguean correctamente los métodos decorados
      * el polimorfismo funcione al llamar `mostrarInfo()`
   */

   const a = new Admin(1, 'Alice', 'alice@mail.com') as any;
   console.log(a.fechaCreacion); // muestra la fecha
   a.mostraInformacion(); // muestra la fecha
   console.log(a.test('asdflkj')); // muestra la fecha



   const c = new Cliente(1, 'Ander', 'a@a.com') as any;
   console.log(c.fechaCreacion);

})()

/**
          ┌─────────────────────────────┐
          │    Clase original (Admin)   │
          │-----------------------------│
          │ constructor(id, nombre, ...)│
          │ método rol()                │
          │ método mostraInformacion()  │
          └───────────────┬─────────────┘
                          │
                          │  pasa como argumento
                          ▼
        ConFechaCreacion<T extends { new(...args:any[]):{} }>
                          │
                          │  recibe T = tipo de Admin
                          ▼
          ┌─────────────────────────────┐
          │  Función decorador          │
          │  constructor: T             │
          │                             │
          │  return class extends T     │
          │  { fechaCreacion = new Date()} │
          └───────────────┬─────────────┘
                          │
                          │  nueva clase anónima
                          ▼
          ┌─────────────────────────────┐
          │ Clase decorada (Admin + fechaCreacion) │
          │-----------------------------│
          │ constructor(id, nombre, ...)│
          │ método rol()                │
          │ método mostraInformacion()  │
          │ fechaCreacion               │
          └─────────────────────────────┘
 */