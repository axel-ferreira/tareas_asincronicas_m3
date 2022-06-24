function crearCalculadora(){
    let calculadora ={
        //aqui esta el valor interno, acumulado
        almacenador: 0,
        valor:function(){
            return this.almacenador //con this llamamos mdentro del objeto
        },
        sumar: function(num){
            this.almacenador = this.almacenador + num
        },
        restar: function(num){
            this.almacenador = this.almacenador - num
        },
        reset : function(){
            this.almacenador=0
        }
    }
    return calculadora
}