/*
Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
    Nombre del titular
    Número de cuenta
    Apellido del titular
    Saldo
    Movimientos
*/
function CuentaBancaria(nombre, apellido, nroCuenta, saldo){

    this.nombreTitular = nombre;
    this.apellidoTitular = apellido;
    this.nroCuenta = nroCuenta;
    this.saldoCuenta = saldo;
    this.movimientos = [];

    this.mostrarNombreTitular = function(){
        return this.nombreTitular + this.apellidoTitular;
    }

    this.retirarDineroCuenta = function(monto) {
        if(monto > this.saldoCuenta || this.saldoCuenta === 0) {
            console.log('Fondos insuficientes');
        } else {
            this.saldoCuenta -= monto;
            this.movimientos.push({ tipoMovimiento: 'retiro', montoMovimiento: monto });
            console.log('Se ha retirado ' + monto + ' en la cuenta');
        }
    }

    this.depositarDineroCuenta = function(monto){
        this.saldoCuenta += monto;
        this.movimientos.push({ tipoMovimiento: 'deposito', montoMovimiento: monto });
        console.log('Se ha depositado ' + monto + ' en la cuenta');
    }

    this.mostrarDineroCuenta = function(){
        console.log('Saldo cuenta: ' + this.saldoCuenta);
    }

    this.mostrarMovimientosCuenta = function(){
        console.log(this.movimientos);
    }

    this.calcularTotalMovimientos = function(tipoMov){
        let total = 0;
        this.movimientos.forEach(mov => {
            if(mov.tipoMovimiento === tipoMov) total += mov.montoMovimiento;
        });
        return total;;
    }

}

// Cuentas
const cuenta1 = new CuentaBancaria('Migue', 'Molina', 1002662, 2000);
const cuenta2 = new CuentaBancaria('Julian', 'Vera', 2038443, 5000);

// Operaciones cuenta 1
cuenta1.mostrarDineroCuenta();
cuenta1.depositarDineroCuenta(500);
cuenta1.depositarDineroCuenta(200);
cuenta1.retirarDineroCuenta(500);
cuenta1.mostrarDineroCuenta();

// Operaciones cuenta 1
cuenta2.mostrarDineroCuenta();
cuenta2.depositarDineroCuenta(800);
cuenta2.retirarDineroCuenta(200);
cuenta2.retirarDineroCuenta(250);
cuenta2.mostrarDineroCuenta();

// Historial de movimientos
cuenta1.mostrarMovimientosCuenta();
cuenta2.mostrarMovimientosCuenta();

// Calcular total movimientos
console.log('Total dinero depositado cuenta 1: ' + cuenta1.calcularTotalMovimientos('deposito'));
console.log('Total dinero retirado cuenta 1: ' + cuenta1.calcularTotalMovimientos('retiro'));

console.log('Total dinero depositado cuenta 2: ' + cuenta2.calcularTotalMovimientos('deposito'));
console.log('Total dinero retirado cuenta 2: ' + cuenta2.calcularTotalMovimientos('retiro'));