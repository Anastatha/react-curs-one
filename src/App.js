import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const onPreviousClick = () => {
		if (!isFirstStep) {
		  setActiveIndex(activeIndex - 1);
		}
	};

	const onNextClick = () => {
		if (!isLastStep) {
		  setActiveIndex(activeIndex + 1);
		} else {
		  setActiveIndex(0); 
		}
	};
	
	const onStepClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
						<li
							key={step.id}
							className={`${styles['steps-item']} 
							${index <= activeIndex ? styles.done : ''} 
							${index === activeIndex ? styles.active : ''}`}
						>
						<button
							className={styles['steps-item-button']}
							onClick={() => onStepClick(index)}
						>
							{index + 1}
						</button>
							{step.title}
						</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onPreviousClick} disabled={isFirstStep}>Назад</button>
						<button className={styles.button} onClick={onNextClick}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
