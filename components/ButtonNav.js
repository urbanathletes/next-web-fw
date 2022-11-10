import Link from "next/link"

function ButtonNav(props) {
  return (
    <div className="py-1 flex justify-center items-center">
      <Link href={props.toLink} className="bg-yellow-400 px-4 py-0.5 tracking-wider">{props.text}</Link>
    </div>
  )
}

export default ButtonNav