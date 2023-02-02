import {Link} from "react-router-dom";

export default function Index(): JSX.Element {
	return (
		<div className="tasksContainer">
			<h1>Бизнес-технологии в Internet</h1>
			<h2>Вариант 4 - Сувениры</h2>
			<h3>Логвинец В. А., АС-46</h3>
			<div className="tasks">
				<Link to="task1" className="task">
					<p>Задание 1</p>
					<span>Вывести информацию о сувенирах заданного производителя.</span>
				</Link>
				<Link to="task2" className="task">
					<p>Задание 2</p>
					<span>Вывести информацию о сувенирах, произведенных в заданной стране.</span>
				</Link>
				<Link to="task3" className="task">
					<p>Задание 3</p>
					<span>Вывести информацию о производителях, чьи цены на сувениры меньше заданной.</span>
				</Link>
				<Link to="task4" className="task">
					<p>Задание 4</p>
					<span>Вывести информацию о производителях заданного сувенира, произведенного в заданном году.</span>
				</Link>
				<Link to="task5" className="task">
					<p>Задание 5</p>
					<span>Удалить заданного производителя и его сувениры.</span>
				</Link>
			</div>
		</div>
	);
}