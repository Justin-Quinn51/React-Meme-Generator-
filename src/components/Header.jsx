

export default function Header() {
    return (
        <header className="flex items-center bg-gradient-to-r from-headerPrimary to-headerSecondary text-white h-16 w-screen">
            <img className="h-6 w-8 ml-5" src="/Troll Face.png" alt="" />
            <h2 className="text-xl pl-2">Meme Generator</h2>
            <h3 className="text-xs ml-auto pr-9">React Course - Project 3</h3>
        </header>
    )
}