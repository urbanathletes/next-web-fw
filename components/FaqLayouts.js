import Link from 'next/link'
import { useRouter } from 'next/router';
import FaqsLayout from './FaqsLayout'

function FaqLayouts(props) {
  const route = useRouter()
  const path = route.asPath.split('/');
  return (
    <FaqsLayout>
      <div className="container lg:flex lg:flex-row-reverse">
        <div className="w-full lg:w-96 font-judul tracking-wide my-4 mx-8 lg:mx-0">
          <div className="bg-neutral-100 mr-auto inline-block py-4 pl-4 pr-8 w-full text-2xl">
            <div className="flex">
              <h2 className="text-blue-primary border-b-2 border-blue-primary">More Support Topic</h2>
            </div>
            <div className="text-neutral-500 py-4">
              <ul>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <Link className={path[2] == 'faq' ? 'active' : ''} href="/faqs/faq" >FAQ</Link>
                </li>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <Link className={path[2] == 'club-and-fasility' ? 'active' : ''} href="/faqs/club-and-fasility" >CLUB AND FACILITY</Link>
                </li>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <Link className={path[2] == 'safety-health' ? 'active' : ''} href="/faqs/safety-health" >Safety & Health Protocols</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" container lg:mr-8 lg:max-w-3xl w-full my-4 text-blue-primary">
          { props.children }
        </div>
      </div>
    </FaqsLayout>
  )
}

export default FaqLayouts