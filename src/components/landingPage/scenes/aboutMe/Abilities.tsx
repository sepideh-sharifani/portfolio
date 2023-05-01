type Props = {
    name: string;
    image: string;
}

const Abilites = ({ name, image }: Props) => {

    return (
        <div className="flex items-center justify-around gap-4 border-2 p-2">
            <img src={image} alt={`${image}`} className="w-16 " />
            <div>
                <p>{name}</p>
            </div>

        </div>
    )
}

export default Abilites