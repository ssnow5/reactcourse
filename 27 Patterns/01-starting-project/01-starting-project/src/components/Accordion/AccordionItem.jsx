// import { useAccordionContext } from "./Accordion";

import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      'AccordionItem-related components must be wrapped by <Accordion.Item>'
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  // const { openItemId, toggleItem } = useAccordionContext();

  // const isOpen = openItemId === id;

  //   function handleClick() {
  //     // if (isOpen) {
  //     //   closeItem();
  //     // } else {
  //     //   openItem(id);
  //     // }

  //     toggleItem(id);
  //   }

  return (
    // <li className={className}>
    //   <h3 onClick={() => toggleItem(id)}>{title}</h3>
    //   <div
    //     className={
    //       isOpen ? "accordion-item-content open" : "accordion-item-content"
    //     }
    //   >
    //     {children}
    //   </div>
    // </li>
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
