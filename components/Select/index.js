import React, { useState, useRef, useEffect } from 'react'
import ChevronDown from '../Icons/ChevronUp'
import ChevronUp from '../Icons/ChevronUp'
 
function Select(props) {
     const {selectedValue, setSelectedValue} = props;
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('');
    const optionList = props?.list[0].list ?? [];
    const dropdownRef = useRef(null);
    

    
    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            setSearchText("");
        }
    };
    
    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);
    
    const filteredItems = optionList.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
    );

    
  return (
        <div className='p-0.5 rounded-xl bg-gradient' ref={dropdownRef}>
            <div className='relative bg-black rounded-xl'>
                <div onClick={() => setIsOpen(true)} className='h-[55px] bg-mediumdark px-6 py-4 pr-12 cursor-pointer relative rounded-xl'>
                   {isOpen ? <input value={searchText} onChange={(e) => setSearchText(e.target.value)} 
                   className='w-full bg-transparent outline-none focus:ring-0' placeholder='Search...'  />: 
                      <>
                      {selectedValue ? selectedValue : "Select" }
                     </>
                   }
                   
                    <span
                        className={`absolute right-6 top-4 transition-transform transform ${isOpen ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronUp />
                    </span>
                </div>
                {isOpen && (
                    <div className='custom-dropdown absolute mt-3 z-10  max-h-[320px] overflow-y-auto w-full p-4 rounded-xl shadow-lg bg-[#3A3940]'>
                      {filteredItems.length === 0 && "No Results Found"}
                      {filteredItems.map((item, index) => <a key={index} style={{
                          padding: '9px 0px 9px 12px',
                      }} className='block py-2 h-[42px] cursor-pointer' onClick={(e) => { 
                         e.preventDefault();
                        setSelectedValue(item)
                        setIsOpen(false)
                         } }>
                          {item}
                      </a>)}
                      
                    </div>
                )}
            </div>
        </div>
    );
  
}


const SelectDropDown = () => {
    <div className='w-full'></div>
}

export default Select