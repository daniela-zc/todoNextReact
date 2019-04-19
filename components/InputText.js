import css from '../static/css/index.css';

export default (props) => (
    <form className={css.form} onSubmit={props.onSubmit}>
        <input ref={props.inputRef} type="text" value={props.inputValue} onChange={props.onInputChange}/>
        <button type="submit"> {props.buttonText} </button>
    </form>
)