export default function CardFooter(props) {
    return (
        <>
            <div className="bg-primary/50 px-5 py-4 text-sm text-white/50">
                {props.footer}
            </div>
        </>
    );
}