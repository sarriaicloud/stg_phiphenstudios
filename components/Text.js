import parse from 'html-react-parser';
import styles from './styles/text.module.scss'

const Text = ({data}) => {

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				{parse(data.text)}
			</div>
			
		</div>
	)
}

export default Text;