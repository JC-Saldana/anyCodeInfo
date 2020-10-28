Algoritmo calificaciones
	escribir "Introduce tu nota: "
	leer nota;
	notatruncada <- trunc(nota)
	segun notatruncada hacer //siguiendo modelo español
		0,1,2,3,4:
			escribir "Insuficiente"
		5:
			escribir "Suficiente"
		6:
			escribir "Bien"
		7,8:
			escribir "Notable"
		9,10:
			escribir "Sobresaliente"
	FinSegun
FinAlgoritmo
