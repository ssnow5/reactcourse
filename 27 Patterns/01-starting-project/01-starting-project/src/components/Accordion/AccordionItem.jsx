import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, className, title, children }) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  //   function handleClick() {
  //     // if (isOpen) {
  //     //   closeItem();
  //     // } else {
  //     //   openItem(id);
  //     // }

  //     toggleItem(id);
  //   }

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
