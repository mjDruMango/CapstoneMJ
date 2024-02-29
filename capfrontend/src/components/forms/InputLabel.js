export default function InputLabel(props) {
    return (
        <>
            <label htmlFor={props.id} className="block font-medium text-sm">{props.label}</label>
        </>
    );
}