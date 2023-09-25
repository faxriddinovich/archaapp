import React, {useRef, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";


import './historylist.css'
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "reactstrap";

function HistoryList({historyList}){


    const myRef = useRef()

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className={'history-list-section'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <ul className={'history-list'} ref={myRef}>
                            {historyList.map(item => <li key={item.id} className={'history-list-item'}>

                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId={item.id}>
                                            <h4>Yakunlanmagan order</h4><br/>
                                            <p className={'mx-3 mt-3'}>({item.date})</p>
                                        </AccordionHeader>
                                        <AccordionBody accordionId={item.id}>
                                            <b>Umumiy narx: {item.totalPrice}</b>
                                            <ul className={'book-list'}>
                                                {item.dishes.map(book =><li className={'book-list-item'} key={book.dish.id}>
                                                    <p>{book.dish.name}</p>

                                                    <span>{book.dish.price} so'm</span>
                                                </li>)}
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>

                                </Accordion>

                                {/*<div className={'history-title'}>*/}
                                {/*    <div className={'history-desc'}>*/}
                                {/*        <h3>Yakunlanmagan order | </h3>*/}
                                {/*        <p>{item.date}</p>*/}
                                {/*    </div>*/}

                                {/*    <div className={'dropdown'}>*/}
                                {/*        <button onClick={()=>toggleAccordion(index)}>*/}
                                {/*            <AiFillCaretDown/>*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<div className={'booked-foods'}>*/}
                                {/*    <h3>Umumiy narx: {item.totalPrice}</h3>*/}
                                {/*    <ul className={'book-list'}>*/}
                                {/*        {item.dishes.map(book =><li className={'book-list-item'} key={book.dish.id}>*/}
                                {/*            <p>{book.dish.name}</p>*/}

                                {/*            <span>{book.dish.price} so'm</span>*/}
                                {/*        </li>)}*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryList