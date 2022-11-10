import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

function ButtonLink(props) {

  function scrollTop() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Link href={props.link} onClick={scrollTop}>
        <button className="flex items-center py-1 my-4 border border-yellow-primary group z-10 relative overflow-hidden hover:border-blue-primary hover:text-blue-primary transition-all duration-300">
          <p className="font-judul px-4 border-r border-yellow-primary group-hover:border-blue-primary transition-all duration-300">
            {props.text}
          </p>
          <p className="px-3 -rotate-90 group-hover:rotate-0 transition-all duration-300">
            <MdArrowForward className="font-bold" />
            {/* <i className="icofont-arrow-right z-20"></i> */}
          </p>
            <span className="-z-10 absolute top-1.5 bottom-0 right-0 h-5 w-5 bg-yellow-primary scale-0 rounded-full group-hover:scale-150 group-hover:h-full group-hover:w-full transition-all duration-300 ease-in"></span>
        </button>
      </Link>
    </>
  )
}

export default ButtonLink