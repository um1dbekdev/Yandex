import Hdbtm from "./hdbtm"
import Hdtop from "./hdtop"

function Header() {
  return (
    <div className="shadow pb-[15px]">
      <Hdtop/>
      <Hdbtm/>
    </div>
  )
}

export default Header