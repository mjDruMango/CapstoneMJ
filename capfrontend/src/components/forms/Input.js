import InputLabel from "./InputLabel";

export default function Input(props) {
    return (
        <>
            {props.label ? <InputLabel label={props.label} id={props.id} /> : ''}
            <input id={props.id}
                name={props.name ? props.name : props.id}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                onChange={props.onChange ? props.onChange : null}
                className="border-none mt-1 outline-none file:mr-4 file:rounded file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-primary focus:outline-none bg-primary block w-full block placeholder-white px-3 py-2 leading-6 rounded-lg text-white focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:select-none" />
        </>
    );
}