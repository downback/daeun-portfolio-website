import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Daeun Park</h1>
      <a
        className="text-blue-500 hover:text-blue-700 underline"
        href="https://drive.google.com/file/d/1VPxf9k-7WkvBLC4zafChXuoOnc0A_UYZ/view?usp=sharing"
      >
        Link to Portfolio
      </a>
    </div>
  )
}
