const Span = ({ clazz, textContent }) => {
	const clazzName = clazz ? clazz : '';
	return < span className={clazzName} > {textContent}</span >
}
export default Span;