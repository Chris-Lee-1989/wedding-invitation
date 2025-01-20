"use client"
import { useUpdateEffect } from 'ahooks';
import React, { Fragment, useCallback, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { HiOutlineTemplate } from 'react-icons/hi';

const DraggableItem = ({ item, index, moveItem, onChangeSort }: { item: I_Images, index: number, moveItem: (dragIndex: number, hoverIndex: number) => void, onChangeSort: () => void }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: 'ITEM',
        hover: (draggedItem: { index: number }) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = draggedItem.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            draggedItem.index = hoverIndex;
        },
        drop: (item, monitor) => {
            onChangeSort();
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'ITEM',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drop(ref);

    drag(drop(ref));

    const idx = (index%5);
    return (
        <div
            ref={ref}
            className="w-40 h-60 bg-slate-600 rounded-md flex items-center justify-center break-words"
            style={{ 
                opacity: isDragging ? 0.5 : 1,
                backgroundImage: `url(${item.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: [0,1].includes(idx) ? '240px' : '154px',
            }}
        >
            <p className="text-white text-5xl font-bold">{item.imageKey}</p>
        </div>
    );
};

const DragAndDrop = ({ gallery, onChangeSort }: Props) => {
    const [items, setItems] = useState(gallery);
    useUpdateEffect(() => {setItems(gallery)} , [gallery])
    const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
        const updatedItems = [...items];
        const [removed] = updatedItems.splice(dragIndex, 1);
        updatedItems.splice(hoverIndex, 0, removed);
        setItems(updatedItems);
    }, [items]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-6">
                <div className="max-w-full overflow-x-auto overflow-y-hidden "> 
                    <div className="flex flex-col flex-wrap gap-4" style={{ height: 500 }}>
                        {items.map((item, index) => (
                            <DraggableItem 
                                key={index} index={index} item={item} moveItem={moveItem} 
                                onChangeSort={() => {
                                    onChangeSort(items);
                                }} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

interface Props {
    gallery: I_Images[];
    onChangeSort: (gallery: I_Images[]) => void;
}
const Components = ({ gallery, onChangeSort }: Props) => {
    return (
        <Fragment>
            <DragAndDrop gallery={gallery} onChangeSort={onChangeSort} />
        </Fragment>
    )
}

export default React.memo(Components);