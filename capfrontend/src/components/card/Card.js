import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export default function Card(props) {
    const additionalClasses = props.className ? ` ${props.className}` : '';
    const customStyles = `mb-5 flex flex-col overflow-hidden rounded-lg shadow-sm ring-1 ring-primary border-none ${props.transparent ? 'bg-secondary/75' : 'bg-secondary'}${additionalClasses}`;


    return (
        <>
            {/* Card */}
            <div className={customStyles}>
                {/* Card Header */}
                {props.header != null ? <CardHeader header={props.header} /> : null}

                {/* END Card Header */}

                {/* Card Body */}
                <div className="grow px-6 py-3 items-center text-white">
                    {props.children}
                </div>
                {/* END Card Body */}

                {/* Card Footer */}
                {props.footer != null ? <CardFooter footer={props.footer} /> : null}
                {/* END Card Footer */}
            </div>
            {/* End Card */}
        </>
    );
}