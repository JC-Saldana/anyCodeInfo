Algoritmo cuatro
	definir mayores Como Entero
	definir menores Como Entero
	definir media Como Real
	Para i = 0 hasta 9 Con Paso 1 Hacer
		leer edad
		si edad >= 18
			mayores = mayores + 1
		sino 
			menores = menores + 1
		FinSi
		media = media + (edad/10)
	Fin Para
	Escribir mayores
	Escribir menores
	Escribir media
	
FinAlgoritmo
