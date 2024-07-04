
function Hdtop() {
    return (
      <header className="bg-[#ffffff] z-10 lg:fixed w-[100%] h-[70px] flex items-center justify-center ">
          <div className="m-auto w-[1500px]">
            <div className="hd-liner lg:flex items-center justify-between  gap-[30px] mr-[10px] ml-[10px] lg:ml-[20px] lg:mr-[20px] xl:ml-[30px] xl:mr-[30px] ">
            <img src="/Logo-yandexmarket.-kompaktnyi-.png "  className=' lg:flex hidden w-[180px]' alt="eror 404 sorry plasee" />
           
            <div className="top flex lg:hidden justify-between items-center mb-[10px] mt-[20px] ">
                <div className="noselect flex items-center hover:bg-[#00000017] cursor-pointer active:scale-[.9] rounded-[5px] p-[3px] duration-500 hover:shadow  hover:shadow-[#00000017]">
                    <img src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png" className="w-[17px]" alt="" />
                    <h1 className="font-[600]">Москва</h1>
                </div>
                <div className="r">
                <img src="https://play-lh.googleusercontent.com/tM33Mk5KVbodYrHha8N3aG2aeA7yd8EYx-hOru3mMEZUmjBxDJ951IFjc6YGvjtPOg" className="w-[60px]" alt="" />
                </div>
            </div>
           
            <div className="left flex items-center gap-[10px]">
              <div className="left  items-center gap-[10px] h-[40px] lg:flex hidden    2xl:w-[110px] w-[45px] rounded-[6px] justify-center active:scale-[.9] duration-500  bg-[#FCE000] ">
                <div className="burger flex flex-col gap-[3px] ">
                  <div className="bg-[black] w-[18px] h-[2px]  "></div>
                  <div className="bg-[black] w-[18px] h-[2px]  "></div>
                  <div className="bg-[black] w-[18px] h-[2px]  "></div>
                </div>
                <h1 className="font-[600] hidden 2xl:flex">Каталог</h1>
              </div>
              <div className="right w-[100%] lg:w-[400px] lg:mr-auto lg:ml-auto mr-[10px] ml-[5px] xl:w-[600px]">
                <form className="flex items-center">
                  <input type="search" className="w-[100%] outline-none border-[#FCE000] border-[2px] h-[45px] pl-[10px] pr-[10px]  lg:rounded-l-[5px]  " placeholder="Искать на Яндекс Маркете" />
                  <button  className="bg-[#FCE000] lg:block hidden   active:scale-[.9] duration-700   rounded-r-[5px] h-[45px] w-[79px] font-[600]">Найти</button>
                </form>
              </div>
            </div>
  
            <div className="right  items-center gap-[18px] xl:gap-[20px] lg:flex hidden ">
                <div className="flex justify-center items-center flex-col leading-[10px] relative bottom-[2px] cursor-pointer  noselect  active:scale-[.9] duration-500">
                  <img className="w-[40px] flex xl:hidden 2xl:flex " src="https://play-lh.googleusercontent.com/tM33Mk5KVbodYrHha8N3aG2aeA7yd8EYx-hOru3mMEZUmjBxDJ951IFjc6YGvjtPOg" alt="eror 404 sorry" />
                    <h1 className="text-[#444444a8] text-[14px] hidden 2xl:flex ">Баллы</h1>
                </div>
                <div className="flex justify-center items-center flex-col leading-[25px] xl:mt-[11px] cursor-pointer  noselect  active:scale-[.9] duration-500">
                  <img src="/gub.png" className="w-[24px]" alt="eror 404 sorry" />
                <h1 className="text-[#444444a8] text-[14px] hidden xl:flex">Заказы</h1>
                </div>
                <div className="flex justify-center items-center flex-col leading-[25px]  xl:mt-[11px] cursor-pointer  noselect  active:scale-[.9] duration-500">
                  <img src="/black.png" className="w-[24px]" alt="eror 404 sorry" />
                <h1 className="text-[#444444a8] text-[14px] hidden xl:flex">Избранное</h1>
                </div>
  
                <div className="flex xl:m-auto mr-[30px] justify-center items-center flex-col leading-[25px] xl:mt-[11px] noselect  cursor-pointer active:scale-[.9] duration-500">
                  <img src="/k-removebg-preview.png" className="w-[24px]" alt="eror 404 sorry" />
                <h1 className="text-[#444444a8] text-[14px] hidden xl:flex">Корзинка</h1>
                </div>
  
                <div>
                  <button className="cursor-pointer bg-[#adadad41] h-[45px] flex justify-center w-[70px] items-center rounded-[5px] mt-[4px] active:scale-[.9] duration-500">
                  Войти
                  </button>
                </div>
            </div>
  
            </div>
          </div>
      </header>
    )
  }
  
  export default Hdtop