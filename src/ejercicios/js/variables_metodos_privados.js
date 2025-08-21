class cuentaBancaria  {
    titular = 'Anderson';
    #saldo = 100;

    #calcularImpuesto(saldo){ 
        saldo *= 0.10;
        return saldo;
    }

    depositar(dinero){
        const saldo = this.#saldo + dinero;
        console.log(`Para ${this.titular} su impuesto es ${this.#calcularImpuesto(saldo)}`)
    };
}

const cuenta = new cuentaBancaria();
cuenta.depositar(22);

/*🔒 Ejercicio 1 – Variables y Métodos Privados (JS)

Crea una clase CuentaBancaria que tenga:

Una propiedad pública titular.

Una propiedad privada saldo.

Métodos públicos para depositar y consultarSaldo.

Un método privado que calcule un “impuesto” sobre el saldo.

👉 Meta: comprender el uso de #propiedadesPrivadas y diferenciar entre lo que puede y no puede usarse desde fuera. */