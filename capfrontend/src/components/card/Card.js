import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export default function Card(props) {
    const additionalClasses = props.className ? ` ${props.className}` : '';
    const customStyles = `mb-5 flex flex-col overflow-hidden rounded-lg shadow-sm border border-lineart border-2 ${props.transparent ? 'bg-black/75' : 'bg-black'}${additionalClasses}`;


    return (
        <>
            {/* Card */}
            <div className={customStyles}>
                <div>
                    {/* Card Header */}
                    {props.header != null ? <CardHeader header={props.header} /> : null}

                    {/* END Card Header */}

                    {/* Card Body */}
                    <div className="grow px-6 py-3 items-center text-gray-300">
                        {props.children}
                    </div>
                    {/* END Card Body */}

                    {/* Card Footer */}
                    {props.footer != null ? <CardFooter footer={props.footer} /> : null}
                    {/* END Card Footer */}
                </div>
            </div>
            {/* End Card */}
        </>
    );
}