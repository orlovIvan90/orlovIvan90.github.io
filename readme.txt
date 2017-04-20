1) Классы для изменения цвета стоимости 
.order__value-sum--red {
	color: #f38787;
}
.order__value-sum--green {
	color: #87f387;
}



2) Чтобы отобразить информацию о почтовом ящике нужно диву с классом input__wrap добавить класс input__wrap--info */
.input__info {
	width: 600px;
	color: #797979;
	display: none;
}
.input__wrap--info .input__info {
	display: block;
	right: -640px;
}

3) Чтобы отобразить информацию об ошибке нужно диву с классом input__wrap добавить класс input__wrap--error
.input__wrap--error .input__error {
	display: block;
}