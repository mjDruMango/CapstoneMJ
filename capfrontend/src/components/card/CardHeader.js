export default function CardHeader(props) {
    return (
        <>
            <div className="bg-primary px-5 py-4 text-white">
                <h3 className="font-bold">{props.header}</h3>
            </div>
        </>
    );
}