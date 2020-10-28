Algoritmo tres
	Definir suma como entero;
	Definir i como entero;
	Definir termina como logico;
	suma = 0;
	i = 50;
	termina = Falso;
	Repetir
		Si (i>=50 y i<=100) Entonces
			i = i + 5;
			suma = suma + 1;
		sino
			termina = Verdadero;
		FinSi
	Hasta que termina = Verdadero;
	Escribir suma;
FinAlgoritmo
