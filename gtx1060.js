public class EjemploMetodos {
    // Método con nombre descriptivo en camelCase
    public double calcularPromedio(double[] numeros) {
        double suma = 0;
        for (double numero : numeros) {
            suma += numero;
        }
        return suma / numeros.length;
    }
    
    // Método con nombre descriptivo en camelCase
    public String buscarElemento(String[] array, String elemento) {
        for (String item : array) {
            if (item.equals(elemento)) {
                return "Elemento encontrado";
            }
        }
        return "Elemento no encontrado";
    }
}
