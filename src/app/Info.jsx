function Info({coin}) {
    return (  
        <div className="flex flex-row gap-x-4 " >
        <h2 className=" font-semibold text-2xl" >{coin.name}<span> {coin.id}</span></h2>
                <img width={35} src={coin.thumb} alt={coin.name} />
        </div>
    );
}

export default Info;